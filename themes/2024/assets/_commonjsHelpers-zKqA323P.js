import{c as y,B as _,D as I,r as k,E as U,o as V,G as W,H as Q}from"./index-B1wrqOQl.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=y("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=y("ClipboardListIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=y("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=y("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=y("TrashIcon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var D=function(){return D=Object.assign||function(h){for(var l,u=1,c=arguments.length;u<c;u++){l=arguments[u];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(h[d]=l[d])}return h},D.apply(this,arguments)};var N;(function(s){var h=function(){function a(e,t,r,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<a.MIN_VERSION||e>a.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var o=[],i=0;i<this.size;i++)o.push(!1);for(var i=0;i<this.size;i++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var f=this.addEccAndInterleave(r);if(this.drawCodewords(f),n==-1)for(var v=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var E=this.getPenaltyScore();E<v&&(n=i,v=E),this.applyMask(i)}c(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return a.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return a.encodeSegments(r,t)},a.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return a.encodeSegments([r],t)},a.encodeSegments=function(e,t,r,n,o,i){if(r===void 0&&(r=1),n===void 0&&(n=40),o===void 0&&(o=-1),i===void 0&&(i=!0),!(a.MIN_VERSION<=r&&r<=n&&n<=a.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");var f,v;for(f=r;;f++){var E=a.getNumDataCodewords(f,t)*8,m=d.getTotalBits(e,f);if(m<=E){v=m;break}if(f>=n)throw new RangeError("Data too long")}for(var p=0,C=[a.Ecc.MEDIUM,a.Ecc.QUARTILE,a.Ecc.HIGH];p<C.length;p++){var M=C[p];i&&v<=a.getNumDataCodewords(f,M)*8&&(t=M)}for(var g=[],w=0,S=e;w<S.length;w++){var R=S[w];l(R.mode.modeBits,4,g),l(R.numChars,R.mode.numCharCountBits(f),g);for(var P=0,z=R.getData();P<z.length;P++){var K=z[P];g.push(K)}}c(g.length==v);var O=a.getNumDataCodewords(f,t)*8;c(g.length<=O),l(0,Math.min(4,O-g.length),g),l(0,(8-g.length%8)%8,g),c(g.length%8==0);for(var B=236;g.length<O;B^=253)l(B,8,g);for(var b=[];b.length*8<g.length;)b.push(0);return g.forEach(function(J,F){return b[F>>>3]|=J<<7-(F&7)}),new a(f,t,b,o)},a.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},a.prototype.getModules=function(){return this.modules},a.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var n=0;n<r;n++)e==0&&n==0||e==0&&n==r-1||e==r-1&&n==0||this.drawAlignmentPattern(t[e],t[n]);this.drawFormatBits(0),this.drawVersion()},a.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^(r>>>9)*1335;var o=(t<<10|r)^21522;c(o>>>15==0);for(var n=0;n<=5;n++)this.setFunctionModule(8,n,u(o,n));this.setFunctionModule(8,7,u(o,6)),this.setFunctionModule(8,8,u(o,7)),this.setFunctionModule(7,8,u(o,8));for(var n=9;n<15;n++)this.setFunctionModule(14-n,8,u(o,n));for(var n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,u(o,n));for(var n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,u(o,n));this.setFunctionModule(8,this.size-8,!0)},a.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;c(r>>>18==0);for(var t=0;t<18;t++){var n=u(r,t),o=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(o,i,n),this.setFunctionModule(i,o,n)}}},a.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var o=Math.max(Math.abs(n),Math.abs(r)),i=e+n,f=t+r;0<=i&&i<this.size&&0<=f&&f<this.size&&this.setFunctionModule(i,f,o!=2&&o!=4)}},a.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)},a.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},a.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=a.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var n=a.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=a.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(a.getNumRawDataModules(t)/8),f=n-i%n,v=Math.floor(i/n),E=[],m=a.reedSolomonComputeDivisor(o),p=0,C=0;p<n;p++){var M=e.slice(C,C+v-o+(p<f?0:1));C+=M.length;var g=a.reedSolomonComputeRemainder(M,m);p<f&&M.push(0),E.push(M.concat(g))}for(var w=[],S=function(R){E.forEach(function(P,z){(R!=v-o||z>=f)&&w.push(P[R])})},p=0;p<E[0].length;p++)S(p);return c(w.length==i),w},a.prototype.drawCodewords=function(e){if(e.length!=Math.floor(a.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var n=0;n<this.size;n++)for(var o=0;o<2;o++){var i=r-o,f=(r+1&2)==0,v=f?this.size-1-n:n;!this.isFunction[v][i]&&t<e.length*8&&(this.modules[v][i]=u(e[t>>>3],7-(t&7)),t++)}}c(t==e.length*8)},a.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}},a.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,n=0,o=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(n++,n==5?e+=a.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,o),r||(e+=this.finderPenaltyCountPatterns(o)*a.PENALTY_N3),r=this.modules[t][i],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,o)*a.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,f=0,o=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(f++,f==5?e+=a.PENALTY_N1:f>5&&e++):(this.finderPenaltyAddHistory(f,o),r||(e+=this.finderPenaltyCountPatterns(o)*a.PENALTY_N3),r=this.modules[t][i],f=1);e+=this.finderPenaltyTerminateAndCount(r,f,o)*a.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var v=this.modules[t][i];v==this.modules[t][i+1]&&v==this.modules[t+1][i]&&v==this.modules[t+1][i+1]&&(e+=a.PENALTY_N2)}for(var E=0,m=0,p=this.modules;m<p.length;m++){var C=p[m];E=C.reduce(function(w,S){return w+(S?1:0)},E)}var M=this.size*this.size,g=Math.ceil(Math.abs(E*20-M*10)/M)-1;return c(0<=g&&g<=9),e+=g*a.PENALTY_N4,c(0<=e&&e<=2568888),e},a.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r},a.getNumRawDataModules=function(e){if(e<a.MIN_VERSION||e>a.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return c(208<=t&&t<=29648),t},a.getNumDataCodewords=function(e,t){return Math.floor(a.getNumRawDataModules(e)/8)-a.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*a.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},a.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var n=1,r=0;r<e;r++){for(var o=0;o<t.length;o++)t[o]=a.reedSolomonMultiply(t[o],n),o+1<t.length&&(t[o]^=t[o+1]);n=a.reedSolomonMultiply(n,2)}return t},a.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),n=function(v){var E=v^r.shift();r.push(0),t.forEach(function(m,p){return r[p]^=a.reedSolomonMultiply(m,E)})},o=0,i=e;o<i.length;o++){var f=i[o];n(f)}return r},a.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return c(r>>>8==0),r},a.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];c(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},a.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},a.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a}();s.QrCode=h;function l(a,e,t){if(e<0||e>31||a>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(a>>>r&1)}function u(a,e){return(a>>>e&1)!=0}function c(a){if(!a)throw new Error("Assertion error")}var d=function(){function a(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return a.makeBytes=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var o=n[r];l(o,8,t)}return new a(a.Mode.BYTE,e.length,t)},a.makeNumeric=function(e){if(!a.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+n),10),n*3+1,t),r+=n}return new a(a.Mode.NUMERIC,e.length,t)},a.makeAlphanumeric=function(e){if(!a.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var n=a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(n,11,t)}return r<e.length&&l(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new a(a.Mode.ALPHANUMERIC,e.length,t)},a.makeSegments=function(e){return e==""?[]:a.isNumeric(e)?[a.makeNumeric(e)]:a.isAlphanumeric(e)?[a.makeAlphanumeric(e)]:[a.makeBytes(a.toUtf8ByteArray(e))]},a.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,t)},a.isNumeric=function(e){return a.NUMERIC_REGEX.test(e)},a.isAlphanumeric=function(e){return a.ALPHANUMERIC_REGEX.test(e)},a.prototype.getData=function(){return this.bitData.slice()},a.getTotalBits=function(e,t){for(var r=0,n=0,o=e;n<o.length;n++){var i=o[n],f=i.mode.numCharCountBits(t);if(i.numChars>=1<<f)return 1/0;r+=4+f+i.bitData.length}return r},a.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",a}();s.QrSegment=d})(N||(N={}));(function(s){(function(h){var l=function(){function u(c,d){this.ordinal=c,this.formatBits=d}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();h.Ecc=l})(s.QrCode||(s.QrCode={}))})(N||(N={}));(function(s){(function(h){var l=function(){function u(c,d){this.modeBits=c,this.numBitsCharCount=d}return u.prototype.numCharCountBits=function(c){return this.numBitsCharCount[Math.floor((c+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();h.Mode=l})(s.QrSegment||(s.QrSegment={}))})(N||(N={}));var A=N,H="H",L={L:A.QrCode.Ecc.LOW,M:A.QrCode.Ecc.MEDIUM,Q:A.QrCode.Ecc.QUARTILE,H:A.QrCode.Ecc.HIGH},$=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function G(s){return s in L}function Y(s,h){h===void 0&&(h=0);var l=[];return s.forEach(function(u,c){var d=null;u.forEach(function(a,e){if(!a&&d!==null){l.push("M".concat(d+h," ").concat(c+h,"h").concat(e-d,"v1H").concat(d+h,"z")),d=null;return}if(e===u.length-1){if(!a)return;d===null?l.push("M".concat(e+h,",").concat(c+h," h1v1H").concat(e+h,"z")):l.push("M".concat(d+h,",").concat(c+h," h").concat(e+1-d,"v1H").concat(d+h,"z"));return}a&&d===null&&(d=e)})}),l.join("")}var T={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:H,validator:function(s){return G(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},X=D(D({},T),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),Z=_({name:"QRCodeSvg",props:T,setup:function(s){var h=k(0),l=k(""),u=function(){var c=s.value,d=s.level,a=s.margin,e=A.QrCode.encodeText(c,L[d]).getModules();h.value=e.length+a*2,l.value=Y(e,a)};return u(),U(u),function(){return I("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h.value," ").concat(h.value)},[I("path",{fill:s.background,d:"M0,0 h".concat(h.value,"v").concat(h.value,"H0z")}),I("path",{fill:s.foreground,d:l.value})])}}}),q=_({name:"QRCodeCanvas",props:T,setup:function(s){var h=k(null),l=function(){var u=s.value,c=s.level,d=s.size,a=s.margin,e=s.background,t=s.foreground,r=h.value;if(r){var n=r.getContext("2d");if(n){var o=A.QrCode.encodeText(u,L[c]).getModules(),i=o.length+a*2,f=window.devicePixelRatio||1,v=d/i*f;r.height=r.width=d*f,n.scale(v,v),n.fillStyle=e,n.fillRect(0,0,i,i),n.fillStyle=t,$?n.fill(new Path2D(Y(o,a))):o.forEach(function(E,m){E.forEach(function(p,C){p&&n.fillRect(C+a,m+a,1,1)})})}}};return V(l),U(l),function(){return I("canvas",{ref:h,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),ne=_({name:"Qrcode",render:function(){var s=this.$props,h=s.renderAs,l=s.value,u=s.size,c=s.margin,d=s.level,a=s.background,e=s.foreground,t=u>>>0,r=c>>>0,n=G(d)?d:H;return I(h==="svg"?Z:q,{value:l,size:t,margin:r,level:n,background:a,foreground:e})},props:X});const oe=W("fileData",()=>{const s=Q(JSON.parse(localStorage.getItem("receiveData")||"[]")||[]),h=Q(JSON.parse(localStorage.getItem("shareData")||"[]")||[]);function l(){localStorage.setItem("receiveData",JSON.stringify(s)),localStorage.setItem("shareData",JSON.stringify(h))}function u(e){s.unshift(e),l()}function c(e){h.unshift(e),l()}function d(e){s.splice(e,1),l()}function a(e){h.splice(e,1),l()}return{receiveData:s,shareData:h,save:l,addShareData:c,addReceiveData:u,deleteReceiveData:d,deleteShareData:a}});var ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function se(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}export{ee as C,te as E,ne as Q,re as S,ae as T,x as a,ie as c,se as g,oe as u};