import datetime
import uuid
import os
from fastapi import UploadFile, HTTPException
from typing import Tuple, Optional

from apps.base.dependencies import IPRateLimit
from apps.base.models import FileCodes
from core.settings import settings
from core.utils import get_random_num, get_random_string, max_save_times_desc


async def get_file_path_name(file: UploadFile) -> Tuple[str, str, str, str, str]:
    """获取文件路径和文件名"""
    today = datetime.datetime.now()
    path = f"{today.strftime('%Y/%m/%d')}"
    prefix, suffix = os.path.splitext(file.filename)
    file_uuid = uuid.uuid4().hex
    uuid_file_name = f"{file_uuid}{suffix}"
    save_path = f"{path}/{uuid_file_name}"
    return path, suffix, prefix, uuid_file_name, save_path


async def get_expire_info(expire_value: int, expire_style: str) -> Tuple[Optional[datetime.datetime], int, int, str]:
    """获取过期信息"""
    expired_count, used_count = -1, 0
    now = datetime.datetime.now()
    code = None

    max_timedelta = datetime.timedelta(seconds=settings.max_save_seconds) if settings.max_save_seconds > 0 else datetime.timedelta(days=7)
    detail = await max_save_times_desc(settings.max_save_seconds) if settings.max_save_seconds > 0 else '7天'
    detail = f'限制最长时间为 {detail[0]}，可换用其他方式'

    expire_styles = {
        'day': lambda: now + datetime.timedelta(days=expire_value),
        'hour': lambda: now + datetime.timedelta(hours=expire_value),
        'minute': lambda: now + datetime.timedelta(minutes=expire_value),
        'count': lambda: (now + datetime.timedelta(days=1), expire_value),
        'forever': lambda: (None, None),  # 修改这里
    }

    if expire_style in expire_styles:
        result = expire_styles[expire_style]()
        if isinstance(result, tuple):
            expired_at, extra = result
            if expire_style == 'count':
                expired_count = extra
            elif expire_style == 'forever':
                code = await get_random_code(style='string')  # 移动到这里
        else:
            expired_at = result
        if expired_at and expired_at - now > max_timedelta:
            raise HTTPException(status_code=403, detail=detail)
    else:
        expired_at = now + datetime.timedelta(days=1)

    if not code:
        code = await get_random_code()

    return expired_at, expired_count, used_count, code


async def get_random_code(style='num') -> str:
    """获取随机字符串"""
    while True:
        code = await get_random_num() if style == 'num' else await get_random_string()
        if not await FileCodes.filter(code=code).exists():
            return code


ip_limit = {
    'error': IPRateLimit(count=settings.uploadCount, minutes=settings.errorMinute),
    'upload': IPRateLimit(count=settings.errorCount, minutes=settings.errorMinute)
}
