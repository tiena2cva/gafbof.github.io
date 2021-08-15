(self.webpackChunkblog=self.webpackChunkblog||[]).push([[706],{7198:function(n,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return h},toc:function(){return d},default:function(){return p}});var o=a(2122),e=a(9756),i=(a(7294),a(3905)),c={sidebar_label:"B\xe0i 0: Anaconda"},h={unversionedId:"python/anaconda",id:"python/anaconda",isDocsHomePage:!1,title:"Anaconda - b\u1ea1n c\u1ee7a m\u1ecdi nh\xe0",description:"1. Gi\u1edbi thi\u1ec7u",source:"@site/../docs/tutorial/python/01.anaconda.md",sourceDirName:"python",slug:"/python/anaconda",permalink:"/tutorial/python/anaconda",version:"current",sidebar_label:"B\xe0i 0: Anaconda",sidebarPosition:1,frontMatter:{sidebar_label:"B\xe0i 0: Anaconda"},sidebar:"tutorialSidebar",next:{title:"Jupyter",permalink:"/tutorial/python/jupyter"}},d=[{value:"1. Gi\u1edbi thi\u1ec7u",id:"1-gi\u1edbi-thi\u1ec7u",children:[]},{value:"2. Conda, Miniconda, Anaconda",id:"2-conda-miniconda-anaconda",children:[]},{value:"3. T\u1ea1o m\xf4i tr\u01b0\u1eddng \u1ea3o",id:"3-t\u1ea1o-m\xf4i-tr\u01b0\u1eddng-\u1ea3o",children:[]}],r={toc:d};function p(n){var t=n.components,c=(0,e.Z)(n,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},r,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-gi\u1edbi-thi\u1ec7u"},"1. Gi\u1edbi thi\u1ec7u"),(0,i.kt)("p",null,"Anaconda l\xe0 1 n\u1ec1n t\u1ea3ng m\xe3 ngu\u1ed3n m\u1edf v\u1ec1 Khoa h\u1ecdc d\u1eef li\u1ec7u (Data Science - DS) tr\xean Python th\xf4ng d\u1ee5ng nh\u1ea5t hi\u1ec7n nay. V\u1edbi h\u01a1n 25 tri\u1ec7u ng\u01b0\u1eddi d\xf9ng (theo th\u1ed1ng k\xea t\u1ea1i trang ch\u1ee7), Anaconda l\xe0 gi\u1ea3i ph\xe1p nhanh nh\u1ea5t v\xe0 d\u1ec5 nh\u1ea5t \u0111\u1ec3 c\xe1c b\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u DS v\u1edbi Python ho\u1eb7c R tr\xean Windows, Linux v\xe0 Mac OS X. V\xe0 ng\xe0y h\xf4m nay, ",(0,i.kt)("strong",{parentName:"p"},"ZootoPi")," xin ph\xe9p \u0111\u01b0\u1ee3c khai b\xfat chu\u1ed7i series ",(0,i.kt)("ins",null," ",(0,i.kt)("strong",{parentName:"p"},"Khoa h\u1ecdc d\u1eef li\u1ec7u cho ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u")," ")," b\u1eb1ng nh\u1eefng c\xf4ng c\u1ee5 thi\u1ebft y\u1ebfu d\xe0nh cho nh\xe0 khoa h\u1ecdc d\u1eef li\u1ec7u (Data Scientist), b\u1eaft \u0111\u1ea7u v\u1edbi Anaconda."),(0,i.kt)("p",null,"C\xe1c b\u1ea1n c\xf3 th\u1ec3 t\u1ea3i Anaconda t\u01b0\u01a1ng \u1ee9ng v\u1edbi h\u1ec7 \u0111i\u1ec1u h\xe0nh c\xe1c b\u1ea1n s\u1eed d\u1ee5ng t\u1ea1i ",(0,i.kt)("a",{parentName:"p",href:"https://www.anaconda.com/products/individual"},"\u0111\xe2y")," ",(0,i.kt)("img",{src:"https://media.giphy.com/media/j5oMK60WVe1w9YaaOa/source.gif",width:"20"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"anaconda",src:a(486).Z})),(0,i.kt)("p",null,"C\xe1c b\u1ea1n c\xf3 th\u1ec3 tham kh\u1ea3o th\xeam c\xe1c link d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 c\xe0i \u0111\u1eb7t t\u01b0\u01a1ng \u1ee9ng v\u1edbi h\u1ec7 \u0111i\u1ec1u h\xe0nh b\u1ea1n \u0111ang s\u1eed d\u1ee5ng:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MacOS: click v\xe0o ",(0,i.kt)("a",{parentName:"li",href:"https://docs.anaconda.com/anaconda/install/mac-os/"},"\u0111\xe2y"),"."),(0,i.kt)("li",{parentName:"ul"},"Windows: click v\xe0o ",(0,i.kt)("a",{parentName:"li",href:"https://docs.anaconda.com/anaconda/install/windows/"},"\u0111\xe2y"),"."),(0,i.kt)("li",{parentName:"ul"},"Ubuntu: click v\xe0o ",(0,i.kt)("a",{parentName:"li",href:"https://docs.anaconda.com/anaconda/install/linux/"},"\u0111\xe2y"),".")),(0,i.kt)("h2",{id:"2-conda-miniconda-anaconda"},"2. Conda, Miniconda, Anaconda"),(0,i.kt)("p",null,"V\u1edbi c\xe1c b\u1ea1n m\u1edbi b\u1eaft \u0111\u1ea7u, khi t\xecm hi\u1ec3u c\xe1c t\xe0i li\u1ec7u v\u1ec1 ",(0,i.kt)("inlineCode",{parentName:"p"},"Anaconda")," s\u1ebd r\u1ea5t d\u1ec5 g\u1eb7p nh\u1eefng c\u1ee5m t\u1eeb nh\u01b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Conda"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Miniconda"),", th\u1eadm ch\xed khi thi tho\u1ea3ng c\xf2n g\u1eb7p nh\u1eefng c\xe2u l\u1ec7nh update \u0111i li\u1ec1n nhau nh\u01b0 sau:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"conda update conda\nconda update anaconda\n")),(0,i.kt)("p",null,"V\u1eady th\xec ",(0,i.kt)("inlineCode",{parentName:"p"},"Conda"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Miniconda"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Anaconda")," kh\xe1c nhau nh\u01b0 th\u1ebf n\xe0o?"),(0,i.kt)("p",null,"Hi\u1ec3u 1 c\xe1ch \u0111\u01a1n gi\u1ea3n, ",(0,i.kt)("inlineCode",{parentName:"p"},"Conda")," l\xe0 1 tay qu\u1ea3n l\xed m\xf4i tr\u01b0\u1eddng (environments) v\xe0 qu\u1ea3n l\xfd g\xf3i (packages). N\xf3i n\xf4m na, ch\xfang ta s\u1eed d\u1ee5ng ",(0,i.kt)("inlineCode",{parentName:"p"},"Conda")," nh\u01b0 1 c\xf4ng c\u1ee5 d\xf2ng l\u1ec7nh, \u0111\u1ed3ng th\u1eddi nh\u01b0 1 g\xf3i Python."),(0,i.kt)("p",null,"Nh\u01b0 v\u1eady, Miniconda v\xe0 Anaconda c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c bi\u1ec3u di\u1ec5n nh\u01b0 sau:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Miniconda = Python + conda\n\nAnaconda = Python + conda + g\xf3i meta anaconda\n")),(0,i.kt)("p",null,"S\u1ef1 kh\xe1c bi\u1ec7t gi\u1eefa Anaconda v\xe0 Miniconda n\u1eb1m \u1edf ",(0,i.kt)("inlineCode",{parentName:"p"},"g\xf3i meta anaconda")," . S\u1edf d\u0129 g\u1ecdi l\xe0 g\xf3i meta v\xec n\xf3 ch\u1ee9a kho\u1ea3ng 160 g\xf3i Python kh\xe1c thu\u1eadn ti\u1ec7n \u0111\u1ec3 s\u1eed d\u1ee5ng h\xe0ng ng\xe0y trong khoa h\u1ecdc d\u1eef li\u1ec7u. \u0110\xe2y c\u0169ng l\xe0 1 trong nh\u1eefng l\xed do m\xe0 m\xecnh mu\u1ed1n gi\u1edbi thi\u1ec7u Anaconda \u0111\u1ea7u ti\xean cho c\xe1c b\u1ea1n b\u1eaft \u0111\u1ea7u t\xecm hi\u1ec3u v\u1ec1 Khoa h\u1ecdc d\u1eef li\u1ec7u."),(0,i.kt)("h2",{id:"3-t\u1ea1o-m\xf4i-tr\u01b0\u1eddng-\u1ea3o"},"3. T\u1ea1o m\xf4i tr\u01b0\u1eddng \u1ea3o"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"T\u1ea1o 1 m\xf4i tr\u01b0\u1eddng \u1ea3o:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"conda create -n zootopi python=3.8\n")),(0,i.kt)("p",null,"\u1ede \u0111\xe2y, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"-n"))," l\xe0 vi\u1ebft t\u1eaft c\u1ee7a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"-name")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"zootopi"))," l\xe0 t\xean c\u1ee7a m\xf4i tr\u01b0\u1eddng. C\xe1c b\u1ea1n c\xf3 th\u1ec3 \u0111\u1ed5i t\xean m\xf4i tr\u01b0\u1eddng tu\u1ef3 v\xe0o m\u1ee5c \u0111\xedch c\u1ee7a m\xf4i tr\u01b0\u1eddng, t\u1ea1o cho d\u1ef1 \xe1n n\xe0o, l\u01b0u \xfd l\xe0 t\xean m\xf4i tr\u01b0\u1eddng ph\u1ea3i vi\u1ebft li\u1ec1n kh\xf4ng d\u1ea5u. \u0110\u1ec3 ch\u1ecdn phi\xean b\u1ea3n Python, ta s\u1eed d\u1ee5ng ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"python=")),". Hi\u1ec7n nay, Python \u0111\xe3 c\xf3 h\u1ed7 tr\u1ee3 \u0111\u1ebfn phi\xean b\u1ea3n 3.9. Tuy nhi\xean, \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o t\xednh \u1ed5n \u0111\u1ecbnh c\u1ee7a phi\xean b\u1ea3n, m\xecnh khuy\u1ebfn kh\xedch c\xe1c b\u1ea1n d\xf9ng l\xf9i xu\u1ed1ng 1 \u0111\u1ebfn 2 version (e.g Python 3.8 ho\u1eb7c Python 3.7)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"(base) \u279c  ~ conda create -n zootopi python=3.8\nCollecting package metadata (current_repodata.json): done\nSolving environment: done\n\n\n==> WARNING: A newer version of conda exists. <==\n  current version: 4.9.2\n  latest version: 4.10.1\n\nPlease update conda by running\n\n    $ conda update -n base -c defaults conda\n\n\n\n## Package Plan ##\n\n  environment location: /home/t/anaconda3/envs/zootopi\n\n  added / updated specs:\n    - python=3.8\n\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"K\xedch ho\u1ea1t m\xf4i tr\u01b0\u1eddng")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"conda activate zootopi\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'(base) \u279c  ~ conda activate zootopi\n(zootopi) \u279c  ~ python\nPython 3.8.5 (default, Sep  4 2020, 07:30:14)\n[GCC 7.3.0] :: Anaconda, Inc. on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n')),(0,i.kt)("p",null,"V\u1eady l\xe0 ch\xfang ta \u0111\xe3 t\u1ea1o ra 1 m\xf4i tr\u01b0\u1eddng \u1ea3o \u0111\u1ec3 b\u1eaft \u0111\u1ea7u d\u1ef1 \xe1n r\u1ed3i. C\xe1c b\u1ea1n c\xf3 th\u1ec3 tham kh\u1ea3o th\xeam 1 s\u1ed1 c\xe2u l\u1ec7nh v\xe0 c\xfa ph\xe1p ph\u1ed5 bi\u1ebfn t\u1ea1i ",(0,i.kt)("a",{parentName:"p",href:"https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf"},"\u0111\xe2y"),"."),(0,i.kt)("p",null,"Trong b\xe0i vi\u1ebft ti\u1ebfp theo, ZootoPi s\u1ebd ti\u1ebfp t\u1ee5c gi\u1edbi thi\u1ec7u \u0111\u1ebfn c\xe1c b\u1ea1n v\u1ec1 ",(0,i.kt)("inlineCode",{parentName:"p"},"JupyterLab")," v\xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Jupyter Notebook"),"? V\u1eady 2 kh\xe1i ni\u1ec7m n\xe0y l\xe0 g\xec? S\u1eed d\u1ee5ng ",(0,i.kt)("inlineCode",{parentName:"p"},"JupyterLab")," v\xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Jupyter Notebook")," nh\u01b0 th\u1ebf n\xe0o \u0111\u1ec3 c\xf3 th\u1ec3 l\xe0m vi\u1ec7c hi\u1ec7u qu\u1ea3? ZootoPi xin ph\xe9p h\u1eb9n b\u1ea1n trong b\xe0i vi\u1ebft ti\u1ebfp theo!"))}p.isMDXComponent=!0},486:function(n,t,a){"use strict";t.Z=a.p+"assets/images/anaconda-93c520e12fbe23b23d4f46e348a717ef.png"}}]);