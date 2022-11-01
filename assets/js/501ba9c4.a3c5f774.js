"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3401],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>s});var o=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,o,i=function(n,t){if(null==n)return{};var e,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var h=o.createContext({}),r=function(n){var t=o.useContext(h),e=t;return n&&(e="function"==typeof n?n(t):c(c({},t),n)),e},p=function(n){var t=r(n.components);return o.createElement(h.Provider,{value:t},n.children)},g={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(n,t){var e=n.components,i=n.mdxType,a=n.originalType,h=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=r(e),s=i,m=u["".concat(h,".").concat(s)]||u[s]||g[s]||a;return e?o.createElement(m,c(c({ref:t},p),{},{components:e})):o.createElement(m,c({ref:t},p))}));function s(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var a=e.length,c=new Array(a);c[0]=u;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=n,l.mdxType="string"==typeof n?n:i,c[1]=l;for(var r=2;r<a;r++)c[r]=e[r];return o.createElement.apply(null,c)}return o.createElement.apply(null,e)}u.displayName="MDXCreateElement"},7669:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var o=e(7462),i=(e(7294),e(3905));const a={title:"4 m\u1eb9o t\u1eadn d\u1ee5ng t\u1ed1i \u0111a Google Colab",description:"4 m\u1eb9o gi\xfap b\u1ea1n s\u1eed d\u1ee5ng Colab hi\u1ec7u qu\u1ea3 h\u01a1n","\x3c!-- author":"H\u1ed3ng H\u1ea1nh --\x3e","\x3c!-- author_url":"https://github.com/honghanhh --\x3e"},c="\ud83d\udd25Hack the Colab - 4 m\u1eb9o gi\xfap b\u1ea1n t\u1eadn d\u1ee5ng t\u1ed1i \u0111a Google Colab\ud83d\udd25",l={permalink:"/blog/2022/02/17/colab",source:"@site/../blog/2022-02-17-colab.md",title:"4 m\u1eb9o t\u1eadn d\u1ee5ng t\u1ed1i \u0111a Google Colab",description:"4 m\u1eb9o gi\xfap b\u1ea1n s\u1eed d\u1ee5ng Colab hi\u1ec7u qu\u1ea3 h\u01a1n",date:"2022-02-17T00:00:00.000Z",formattedDate:"February 17, 2022",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{title:"4 m\u1eb9o t\u1eadn d\u1ee5ng t\u1ed1i \u0111a Google Colab",description:"4 m\u1eb9o gi\xfap b\u1ea1n s\u1eed d\u1ee5ng Colab hi\u1ec7u qu\u1ea3 h\u01a1n","\x3c!-- author":"H\u1ed3ng H\u1ea1nh --\x3e","\x3c!-- author_url":"https://github.com/honghanhh --\x3e"},nextItem:{title:"\ud83d\udd25XAI - Th\u1ef1c h\xe0nh Bi\u1ec3u \u0111\u1ed3 Ph\u1ee5 thu\u1ed9c T\u1eebng ph\u1ea7n (PDP)\ud83d\udd25",permalink:"/blog/2022/02/15/xai2-thuc-hanh"}},h={authorsImageUrls:[]},r=[{value:"M\u1eb9o s\u1ed1 1: S\u1eed d\u1ee5ng GPU, TPU trong 1 n\u1ed1t nh\u1ea1c",id:"m\u1eb9o-s\u1ed1-1-s\u1eed-d\u1ee5ng-gpu-tpu-trong-1-n\u1ed1t-nh\u1ea1c",level:2},{value:"M\u1eb9o s\u1ed1 2: K\u1ebft n\u1ed1i Google Drive v\u1edbi Colab, chuy\u1ec7n nh\u1ecf",id:"m\u1eb9o-s\u1ed1-2-k\u1ebft-n\u1ed1i-google-drive-v\u1edbi-colab-chuy\u1ec7n-nh\u1ecf",level:2},{value:"M\u1eb9o s\u1ed1 3: Github v\xe0 Colab l\xe0 \u0111\xf4i b\u1ea1n th\xe2n",id:"m\u1eb9o-s\u1ed1-3-github-v\xe0-colab-l\xe0-\u0111\xf4i-b\u1ea1n-th\xe2n",level:2},{value:"M\u1eb9o s\u1ed1 4: T\u1ea1m bi\u1ec7t n\u1ed7i lo ng\u1eaft k\u1ebft n\u1ed1i Colab",id:"m\u1eb9o-s\u1ed1-4-t\u1ea1m-bi\u1ec7t-n\u1ed7i-lo-ng\u1eaft-k\u1ebft-n\u1ed1i-colab",level:2}],p={toc:r};function g(n){let{components:t,...a}=n;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Google Colaboratory (hay c\xf2n g\u1ecdi l\xe0 "Colab") l\xe0 m\u1ed9t n\u1ec1n t\u1ea3ng mi\u1ec5n ph\xed c\u1ee7a Google cho ph\xe9p ch\xfang ta c\xf3 th\u1ec3 vi\u1ebft v\xe0 th\u1ef1c thi Python trong tr\xecnh duy\u1ec7t m\u1ed9t c\xe1ch nhanh g\u1ecdn v\xe0 ti\u1ec7n l\u1ee3i. \u0110\u1eb7c bi\u1ec7t, Colab h\u1ed7 tr\u1ee3 li\xean k\u1ebft v\u1edbi t\xe0i kho\u1ea3n Google v\xe0 cung c\u1ea5p quy\u1ec1n truy c\u1eadp ho\xe0n to\xe0n mi\u1ec5n ph\xed v\xe0o GPU v\xe0 TPU m\xe0 kh\xf4ng y\xeau c\u1ea7u c\u1ea5u h\xecnh ph\u1ee9c t\u1ea1p tr\xean m\xe1y c\xe1 nh\xe2n c\u0169ng nh\u01b0 d\u1ec5 d\xe0ng chia s\u1ebb m\xe3 ngu\u1ed3n v\u1edbi c\u1ed9ng \u0111\u1ed3ng.'),(0,i.kt)("p",null,"D\u01b0\u1edbi \u0111\xe2y l\xe0 1 s\u1ed1 m\u1eb9o \u0111\u1ec3 c\xe1c b\u1ea1n c\xf3 th\u1ec3 t\u1eadn d\u1ee5ng t\u1ed1i \u0111a Colab b\u1ea3n mi\u1ec5n ph\xed khi vi\u1ebft v\xe0 th\u1ef1c thi \u0111o\u1ea1n m\xe3 Python th\xf4ng qua tr\xecnh duy\u1ec7t ph\u1ee5c v\u1ee5 cho c\xf4ng vi\u1ec7c ph\xe2n t\xedch d\u1eef li\u1ec7u, x\xe2y d\u1ef1ng m\xf4 h\xecnh v\xe0 gi\xe1o d\u1ee5c. \u0110\u1ec3 kh\u1edfi t\u1ea1o m\u1ed9t notebook, c\xe1c b\u1ea1n truy c\u1eadp v\xe0o \u0111\u01b0\u1eddng link sau: ",(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/"},"colab.research.google.com"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Colab tips",src:e(9753).Z,width:"940",height:"788"})),(0,i.kt)("h2",{id:"m\u1eb9o-s\u1ed1-1-s\u1eed-d\u1ee5ng-gpu-tpu-trong-1-n\u1ed1t-nh\u1ea1c"},"M\u1eb9o s\u1ed1 1: S\u1eed d\u1ee5ng GPU, TPU trong 1 n\u1ed1t nh\u1ea1c"),(0,i.kt)("p",null,"Colab lu\xf4n \u0111\u1ec3 m\u1eb7c \u0111\u1ecbnh ph\u1ea7n c\u1ee9ng l\xe0 CPU. Tuy nhi\xean, b\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng b\u1eadt h\u1ed7 tr\u1ee3 GPU hay th\u1eadm ch\xed l\xe0 TPU cho c\xe1c t\xe1c v\u1ee5 \u0111\xf2i h\u1ecfi t\xednh to\xe1n nhi\u1ec1u nh\u01b0 x\xe2y d\u1ef1ng c\xe1c m\xf4 h\xecnh H\u1ecdc s\xe2u."),(0,i.kt)("p",null,"\u0110\u1ec3 l\xe0m \u0111\u01b0\u1ee3c \u0111i\u1ec1u n\xe0y, b\u1ea1n nh\u1ea5p v\xe0o ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit"),", ch\u1ecdn ",(0,i.kt)("inlineCode",{parentName:"p"},"Notebook settings"),". Khi \u0111\xf3, 1 c\u1eeda s\u1ed5 con s\u1ebd hi\u1ec7n l\xean nh\u01b0 sau:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"C\xe0i \u0111\u1eb7t s\u1ed5 tay",src:e(1278).Z,width:"786",height:"638"})),(0,i.kt)("p",null,"Khi \u0111\xf3, ta tr\u1ecf v\xe0o ph\u1ea7n ",(0,i.kt)("inlineCode",{parentName:"p"},"Hardware accelerator")," v\xe0 ch\u1ecdn ki\u1ec3u ph\u1ea7n c\u1ee9ng mong mu\u1ed1n. Th\xf4ng th\u01b0\u1eddng, Colab s\u1ebd cho ta 3 l\u1ef1a ch\u1ecdn: None (CPU), GPU, v\xe0 TPU."),(0,i.kt)("p",null,"Ta d\u1ec5 d\xe0ng ki\u1ec3m tra xem GPU \u0111\xe3 \u0111\u01b0\u1ee3c k\xedch ho\u1ea1t ch\u01b0a b\u1eb1ng \u0111o\u1ea1n m\xe3 sau:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import tensorflow as tf\ntf.test.gpu_device_name()\n")),(0,i.kt)("p",null,"Hi\u1ec3n th\u1ecb chi ti\u1ebft GPU v\u1edbi m\u1ee9c s\u1eed d\u1ee5ng th\xf4ng qua c\xe2u l\u1ec7nh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!nvidia-smi\n")),(0,i.kt)("p",null,"Hi\u1ec3n th\u1ecb chi ti\u1ebft v\u1ec1 CPU th\xf4ng qua c\xe2u l\u1ec7nh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!cat /proc/cpuinfo\n")),(0,i.kt)("h2",{id:"m\u1eb9o-s\u1ed1-2-k\u1ebft-n\u1ed1i-google-drive-v\u1edbi-colab-chuy\u1ec7n-nh\u1ecf"},"M\u1eb9o s\u1ed1 2: K\u1ebft n\u1ed1i Google Drive v\u1edbi Colab, chuy\u1ec7n nh\u1ecf"),(0,i.kt)("p",null,"\u0110\xe2y l\xe0 1 t\xednh n\u0103ng v\xf4 c\xf9ng h\u1eefu \xedch \u0111\u1ec3 ch\xfang ta c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o c\xe1c t\u1ec7p tr\xean Google Drive c\u1ee7a m\xecnh c\u0169ng nh\u01b0 l\u01b0u c\xe1c m\xf4 h\xecnh v\xe0 d\u1eef li\u1ec7u c\u1ee7a b\u1ea1n t\u1ea1i \u0111\xe2y. \u0110\u1ec3 l\xe0m nh\u01b0 v\u1eady, ch\u1ec9 c\u1ea7n nh\u1eadp \u0111o\u1ea1n m\xe3 sau:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from google.colab import drive\ndrive.mount('/content/gdrive')\n")),(0,i.kt)("p",null,"N\u1ebfu b\u1ea1n qu\xean \u0111o\u1ea1n m\xe3 n\xe0y th\xec \u0111\u1eebng lo, b\u1edfi v\xec b\u1ea1n ch\u1ec9 c\u1ea7n ch\u1ecdn bi\u1ec3u t\u01b0\u1ee3ng ",(0,i.kt)("inlineCode",{parentName:"p"},"Mount Drive")," trong m\u1ee5c ",(0,i.kt)("inlineCode",{parentName:"p"},"Files")," b\xean tay tr\xe1i c\u1ee7a Colab. Khi \u0111\xf3, 1 c\u1eeda s\u1ed5 con s\u1ebd hi\u1ec7n ra v\xe0 h\u1ecfi m\xecnh c\xf3 mu\u1ed1n \u0111\u1ec3 notebook truy c\u1eadp v\xe0o c\xe1c t\u1ec7p trong Google Drive kh\xf4ng, ta ch\u1ecdn ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect to Google Drive"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"K\u1ebft n\u1ed1i Drive v\xe0 Colab",src:e(5375).Z,width:"1678",height:"358"})),(0,i.kt)("p",null,"Colab s\u1ebd k\u1ebft n\u1ed1i v\u1edbi Google Drive c\u1ee7a c\xe1c b\u1ea1n v\xe0 th\u01b0 m\u1ee5c ",(0,i.kt)("inlineCode",{parentName:"p"},"drive/")," s\u1ebd hi\u1ec7n th\u1ecb trong m\u1ee5c ",(0,i.kt)("inlineCode",{parentName:"p"},"Files"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sau khi k\u1ebft n\u1ed1i Drive v\xe0 Colab",src:e(2694).Z,width:"678",height:"584"})),(0,i.kt)("h2",{id:"m\u1eb9o-s\u1ed1-3-github-v\xe0-colab-l\xe0-\u0111\xf4i-b\u1ea1n-th\xe2n"},"M\u1eb9o s\u1ed1 3: Github v\xe0 Colab l\xe0 \u0111\xf4i b\u1ea1n th\xe2n"),(0,i.kt)("p",null,"\u0110\u1ec3 c\xf3 th\u1ec3 \u0111\u1ecdc \u0111\u01b0\u1ee3c m\xe3 ngu\u1ed3n t\u1eeb c\xe1c file jupyter notebook l\u01b0u tr\xean Github, ta c\xf3 th\u1ec3 t\u1ea3i notebook \u0111\xf3 xu\u1ed1ng m\xe1y t\xednh c\xe1 nh\xe2n r\u1ed3i l\u1ea1i t\u1ea3i l\xean Google Drive \u0111\u1ec3 m\u1edf b\u1eb1ng Colab."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pbs.twimg.com/media/EVkOdDSWsAEQwc5.jpg",alt:"Nani"})),(0,i.kt)("p",null,"Nghe th\xf4i \u0111\xe3 th\u1ea5y c\u1ed3ng k\u1ec1nh r\u1ed3i. \u0110\u1eebng lo, Zootopi s\u1ebd gi\xfap b\u1ea1n bi\u1ebfn nh\u1eefng thao t\xe1c c\u1ed3ng k\u1ec1nh \u0111\xf3 th\xe0nh 1 b\u01b0\u1edbc c\u1ef1c k\xec \u0111\u01a1n gi\u1ea3n. \u0110\u1ec3 \u0111\u1ecdc \u0111\u01b0\u1ee3c jupyter notebook tr\xean Github th\u1eb3ng v\xe0o Colab, c\xe1c b\u1ea1n ch\u1ec9 c\u1ea7n bi\u1ebfn \u0111\u1ed5i t\xean mi\u1ec1n t\u1eeb ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com")," th\xe0nh ",(0,i.kt)("inlineCode",{parentName:"p"},"githubtocolab.com")," nh\u01b0 v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y l\xe0 xong!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u0110\u1ecdc code tr\xean Github b\u1eb1ng Colab",src:e(3650).Z,width:"800",height:"384"})),(0,i.kt)("h2",{id:"m\u1eb9o-s\u1ed1-4-t\u1ea1m-bi\u1ec7t-n\u1ed7i-lo-ng\u1eaft-k\u1ebft-n\u1ed1i-colab"},"M\u1eb9o s\u1ed1 4: T\u1ea1m bi\u1ec7t n\u1ed7i lo ng\u1eaft k\u1ebft n\u1ed1i Colab"),(0,i.kt)("p",null,"\u0110\xe2y c\xf3 l\u1ebd v\u1ea5n \u0111\u1ec1 nh\u1ee9c nh\u1ed1i m\xe0 Zootopi kh\xe1 ch\u1eafc r\u1eb1ng nhi\u1ec1u b\u1ea1n \u0111\xe3 t\u1eebng g\u1eb7p ph\u1ea3i khi l\xe0m vi\u1ec7c v\u1edbi Colab. Khi \u0111ang ch\u1edd m\xf4 h\xecnh hu\u1ea5n luy\u1ec7n tr\xean Colab, Zootopi th\u1ea3 l\u1ecfng ngh\u1ec9 ng\u01a1i v\xe0 nh\xe2m nhi c\u1ed1c tr\xe0 s\u1eefa tr\xe2n ch\xe2u \u0111\u01b0\u1eddng \u0111en ch\u1edd k\u1ebft qu\u1ea3 hu\u1ea5n luy\u1ec7n th\xec B\xd9M! Google Colab \u0111\xe3 ng\u1eaft k\u1ebft n\u1ed1i notebook v\xe0 to\xe0n b\u1ed9 qu\xe1 tr\xecnh hu\u1ea5n luy\u1ec7n m\xf4 h\xecnh \u0111\xe3 d\u1eebng l\u1ea1i."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://33.media.tumblr.com/19a0aa2491a40ef42e1a2cb53446710e/tumblr_npp1qkBfJG1sjcsglo1_500.gif",alt:"No, please! Nooo!"})),(0,i.kt)("p",null,"T\u1ea5t nhi\xean, sau \u0111\xf3 Zootopi ph\xe1t hi\u1ec7n ra r\u1eb1ng Colab s\u1ebd ng\u1eaft k\u1ebft n\u1ed1i file notebook n\u1ebfu ta \u0111\u1ec3 n\xf3 kh\xf4ng ho\u1ea1t \u0111\u1ed9ng trong h\u01a1n 30 ph\xfat. Nh\u01b0ng k\u1ec3 t\u1eeb h\xf4m nay, b\u1ea1n s\u1ebd kh\xf4ng bao gi\u1edd ph\u1ea3i \u0111\u1ed1i m\u1eb7t v\u1edbi v\u1ea5n \u0111\u1ec1 n\xe0y b\u1edfi Zootopi \u0111\xe3 t\xecm ra \u0111\u01b0\u1ee3c 1 gi\u1ea3i ph\xe1p cho v\u1ea5n \u0111\u1ec1 n\xe0y."),(0,i.kt)("p",null,"T\u1ea5t c\u1ea3 nh\u1eefng g\xec ch\xfang ta c\u1ea7n l\xe0m l\xe0 nh\u1ea5p chu\u1ed9t ph\u1ea3i ch\u1ecdn ",(0,i.kt)("inlineCode",{parentName:"p"},"Inspect")," v\xe0 nh\u1eadp \u0111o\u1ea1n m\xe3 Javascript sau v\xe0o ph\u1ea7n ",(0,i.kt)("inlineCode",{parentName:"p"},"Console"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function ConnectButton() {\n  console.log("Connect pushed");\n  document\n    .querySelector("#top-toolbar > colab-connect-button")\n    .shadowRoot.querySelector("#connect")\n    .click();\n}\nsetInterval(ConnectButton, 60000);\n')),(0,i.kt)("p",null,"Khi \u0111\xf3, ph\u1ea7n ",(0,i.kt)("inlineCode",{parentName:"p"},"Console")," s\u1ebd hi\u1ec7n th\u1ecb nh\u01b0 sau:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Th\xeam \u0111o\u1ea1n m\xe3 Javascript v\xe0o Console",src:e(3855).Z,width:"1102",height:"1246"})),(0,i.kt)("p",null,"\u0110o\u1ea1n m\xe3 nh\u1ecf n\xe0y t\u1ea1o ra m\u1ed9t c\xfa nh\u1ea5p chu\u1ed9t v\xe0o m\xe0n h\xecnh Colab sau m\u1ed7i 60 gi\xe2y (t\u01b0\u01a1ng \u1ee9ng 60.000 mili gi\xe2y ta c\xe0i \u0111\u1eb7t trong ph\u1ea7n m\xe3). Do \u0111\xf3, d\xf9 b\u1ea1n kh\xf4ng thao t\xe1c g\xec th\xec Colab v\u1eabn s\u1ebd ngh\u0129 r\u1eb1ng s\u1ed5 ghi ch\xe9p \u0111ang ho\u1ea1t \u0111\u1ed9ng v\xe0 b\u1ea1n kh\xf4ng ph\u1ea3i lo l\u1eafng v\u1ec1 vi\u1ec7c b\u1ecb ng\u1eaft k\u1ebft n\u1ed1i n\u1eefa!"),(0,i.kt)("p",null,"Ch\xfac c\xe1c b\u1ea1n t\u1eadn d\u1ee5ng hi\u1ec3u qu\u1ea3 Google Colab! \u0110\xf3n xem nh\u1eefng tr\u1ea3i nghi\u1ec7m v\xe0 ph\xe2n t\xedch c\u1ee5 th\u1ec3 t\u1eeb Zootopi t\u1ea1i:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Website: ",(0,i.kt)("a",{parentName:"li",href:"https://zootopi.dev/blog"},"https://zootopi.dev/blog")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Youtube: ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/jCCbCPVXcpQ"},"https://youtu.be/jCCbCPVXcpQ")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc49Facebook: ",(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/aizootopi"},"https://www.facebook.com/aizootopi"))))}g.isMDXComponent=!0},3650:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e.p+"assets/images/4_colab-50da3b6bceb57363ff50e531eb805790.gif"},3855:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e.p+"assets/images/4_console-ceab6486b8b0af917d9d13bcc720c5fc.png"},5375:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e.p+"assets/images/4_mount_drive-aace3497ba0f952627f8c0df4192f07a.png"},2694:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e.p+"assets/images/4_mounted_drive-9d7f758457d2436713fb00fd798bb27a.png"},1278:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e.p+"assets/images/4_notebook_settings-3605dcf47356f3b4ca0b80d2d8055ba4.png"},9753:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e.p+"assets/images/4_tricks_colab-8efce84c4f8ef9e5ccdacf0efd6411fa.png"}}]);