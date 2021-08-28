"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[574],{1625:function(n,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return e},metadata:function(){return k},toc:function(){return g},default:function(){return d}});var u=i(7462),h=i(3366),l=(i(7294),i(3905)),c=["components"],a={sidebar_label:"Missing values"},e="C\xe2u chuy\u1ec7n khuy\u1ebft d\u1eef li\u1ec7u",k={unversionedId:"data_science/missing",id:"data_science/missing",isDocsHomePage:!1,title:"C\xe2u chuy\u1ec7n khuy\u1ebft d\u1eef li\u1ec7u",description:"1. Khuy\u1ebft d\u1eef li\u1ec7u (Missing values) l\xe0 g\xec?",source:"@site/../docs/tutorial/data_science/01.missing.md",sourceDirName:"data_science",slug:"/data_science/missing",permalink:"/tutorial/data_science/missing",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Missing values"},sidebar:"tutorialSidebar",previous:{title:"B\xe0i 4: Gi\u1edbi thi\u1ec7u v\u1ec1 NumPy",permalink:"/tutorial/python/numpy"}},g=[{value:"1. Khuy\u1ebft d\u1eef li\u1ec7u (Missing values) l\xe0 g\xec?",id:"1-khuy\u1ebft-d\u1eef-li\u1ec7u-missing-values-l\xe0-g\xec",children:[{value:"1.1 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft v\u1ec1 c\u1ea5u tr\xfac",id:"11-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-v\u1ec1-c\u1ea5u-tr\xfac",children:[]},{value:"1.2 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ho\xe0n to\xe0n ng\u1eabu nhi\xean (MCAR)",id:"12-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-ho\xe0n-to\xe0n-ng\u1eabu-nhi\xean-mcar",children:[]},{value:"1.3 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ng\u1eabu nhi\xean (MAR)",id:"13-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-ng\u1eabu-nhi\xean-mar",children:[]},{value:"1.4 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft kh\xf4ng ph\u1ea3i ng\u1eabu nhi\xean (MNAR)",id:"14-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-kh\xf4ng-ph\u1ea3i-ng\u1eabu-nhi\xean-mnar",children:[]}]},{value:"2. Ph\xe2n bi\u1ec7t c\xe1c lo\u1ea1i khuy\u1ebft d\u1eef li\u1ec7u",id:"2-ph\xe2n-bi\u1ec7t-c\xe1c-lo\u1ea1i-khuy\u1ebft-d\u1eef-li\u1ec7u",children:[]}],r={toc:g};function d(n){var t=n.components,i=(0,h.Z)(n,c);return(0,l.kt)("wrapper",(0,u.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"c\xe2u-chuy\u1ec7n-khuy\u1ebft-d\u1eef-li\u1ec7u"},"C\xe2u chuy\u1ec7n khuy\u1ebft d\u1eef li\u1ec7u"),(0,l.kt)("h2",{id:"1-khuy\u1ebft-d\u1eef-li\u1ec7u-missing-values-l\xe0-g\xec"},"1. Khuy\u1ebft d\u1eef li\u1ec7u (Missing values) l\xe0 g\xec?"),(0,l.kt)("p",null,"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ho\u1eb7c kh\xf4ng \u0111\u1ea7y \u0111\u1ee7 (th\u01b0\u1eddng \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb nh\u01b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Null"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"N/A"),",\u2026 trong ",(0,l.kt)("inlineCode",{parentName:"p"},"Pandas"),") l\xe0 1 th\xe1ch th\u1ee9c c\xf3 t\xe1c \u0111\u1ed9ng l\u1edbn \u0111\u1ebfn b\u1ea5t k\u1ef3 d\u1ef1 \xe1n khoa h\u1ecdc d\u1eef li\u1ec7u n\xe0o. Vi\u1ec7c khuy\u1ebft d\u1eef li\u1ec7u x\u1ea3y ra c\xf3 th\u1ec3 b\u1edfi nhi\u1ec1u nguy\xean nh\xe2n nh\u01b0:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Th\xf4ng tin v\u1ed1n kh\xf4ng t\u1ed3n t\u1ea1i"),(0,l.kt)("li",{parentName:"ul"},"Ng\u01b0\u1eddi d\xf9ng qu\xean \u0111i\u1ec1n"),(0,l.kt)("li",{parentName:"ul"},"L\u1ed7i t\u1eeb ph\u1ea7n m\u1ec1m thu th\u1eadp d\u1eef li\u1ec7u"),(0,l.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u b\u1ecb m\u1ea5t trong qu\xe1 tr\xecnh chuy\u1ec3n th\u1ee7 c\xf4ng t\u1eeb c\u01a1 s\u1edf d\u1eef li\u1ec7u c\u0169 ...")),(0,l.kt)("p",null,"M\u1eb7c d\xf9 gi\u1ea3i ph\xe1p t\u1ed1t nh\u1ea5t cho vi\u1ec7c khuy\u1ebft d\u1eef li\u1ec7u l\xe0 tr\xe1nh ngay t\u1eeb \u0111\u1ea7u, t\u1ee9c l\xe0 ph\xe1t tri\u1ec3n c\xe1c ch\xednh s\xe1ch qu\u1ea3n l\xfd v\xe0 thu th\u1eadp d\u1eef li\u1ec7u th\u1eadt t\u1ed1t. Tuy nhi\xean, kh\xf4ng ph\u1ea3i l\xfac n\xe0o vi\u1ec7c thu th\u1eadp d\u1eef li\u1ec7u c\u0169ng d\u1ec5 d\xe0ng v\xe0 m\xe0u h\u01b0\u1eddng nh\u01b0 v\u1eady."),(0,l.kt)("p",null,"X\xe9t v\u1ec1 m\u1eb7t ch\u1ea5t l\u01b0\u1ee3ng, d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c chia v\u1ec1 4 lo\u1ea1i:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft v\u1ec1 c\u1ea5u tr\xfac"),(0,l.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ho\xe0n to\xe0n ng\u1eabu nhi\xean (",(0,l.kt)("strong",{parentName:"li"},"MCAR"),")"),(0,l.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ng\u1eabu nhi\xean (",(0,l.kt)("strong",{parentName:"li"},"MAR"),")"),(0,l.kt)("li",{parentName:"ul"},"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft kh\xf4ng ph\u1ea3i ng\u1eabu nhi\xean (",(0,l.kt)("strong",{parentName:"li"},"MNAR"),")")),(0,l.kt)("p",null,"Trong b\xe0i vi\u1ebft n\xe0y, ZootoPi s\u1ebd gi\xfap b\u1ea1n hi\u1ec3u \u0111\u01b0\u1ee3c s\u1ef1 kh\xe1c nhau gi\u1eefa c\xe1c lo\u1ea1i khuy\u1ebft d\u1eef li\u1ec7u n\xe0y c\u0169ng nh\u01b0 c\xe1ch ta c\xf3 th\u1ec3 x\u1eed l\xfd v\u1edbi t\u1eebng lo\u1ea1i \u0111\u1ec3 m\u1ecdi ph\xe2n t\xedch \u0111\u1ec1u c\xf3 \xfd ngh\u0129a."),(0,l.kt)("h3",{id:"11-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-v\u1ec1-c\u1ea5u-tr\xfac"},"1.1 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft v\u1ec1 c\u1ea5u tr\xfac"),(0,l.kt)("p",null,"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft v\u1ec1 m\u1eb7t c\u1ea5u tr\xfac l\xe0 d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft v\xec m\u1ed9t l\xfd do h\u1ee3p l\xfd. N\xf3i c\xe1ch kh\xe1c, \u0111\xf3 l\xe0 d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft b\u1edfi v\xec n\xf3 kh\xf4ng t\u1ed3n t\u1ea1i."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"V\xed d\u1ee5"),": K\u1ebft qu\u1ea3 thi 1 h\u1ecdc k\u1ef3 t\u1ea1i 1 tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc b\u1ecb khuy\u1ebft \u0111i\u1ec3m 1 s\u1ed1 m\xf4n c\u1ee7a 1 s\u1ed1 sinh vi\xean. \u0110i\u1ec1u n\xe0y c\xf3 th\u1ec3 x\u1ea3y ra khi h\u1ecdc sinh \u0111\xe3 b\u1ecf h\u1ecdc m\xf4n \u0111\xf3 tr\u01b0\u1edbc k\u1ef3 thi ho\u1eb7c c\xf3 th\u1ec3 v\u1eafng m\u1eb7t trong bu\u1ed5i thi. V\xec v\u1eady, \u0111\xe2y l\xe0 m\u1ed9t gi\xe1 tr\u1ecb b\u1ecb khuy\u1ebft v\u1ec1 m\u1eb7t c\u1ea5u tr\xfac.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Gi\u1ea3i ph\xe1p"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Lo\u1ea1i tr\u1eeb nh\u1eefng b\u1ea3n ghi c\xf3 d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft nh\u01b0 v\u1eady kh\u1ecfi b\u1ea5t k\u1ef3 ph\xe2n t\xedch n\xe0o v\u1ec1 c\xe1c bi\u1ebfn c\xf3 gi\xe1 tr\u1ecb b\u1ecb khuy\u1ebft v\u1ec1 c\u1ea5u tr\xfac."),(0,l.kt)("li",{parentName:"ul"},"Lu\u1eadn suy b\u1eb1ng c\xe1ch ch\xe8n s\u1ed1 0 v\xe0o nh\u1eefng ch\u1ed7 c\xf2n khuy\u1ebft \u0111\xf3.")))),(0,l.kt)("h3",{id:"12-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-ho\xe0n-to\xe0n-ng\u1eabu-nhi\xean-mcar"},"1.2 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ho\xe0n to\xe0n ng\u1eabu nhi\xean (MCAR)"),(0,l.kt)("p",null,"Nh\u01b0 t\xean g\u1ecdi, d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft trong tr\u01b0\u1eddng h\u1ee3p n\xe0y x\u1ea3y ra ho\xe0n to\xe0n do ng\u1eabu nhi\xean, ngh\u0129a l\xe0 kh\xf4ng t\u1ed3n t\u1ea1i b\u1ea5t k\u1ef3 m\u1ed1i quan h\u1ec7 hay s\u1ef1 li\xean quan n\xe0o gi\u1eefa d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft v\u1edbi c\xe1c d\u1eef li\u1ec7u quan s\xe1t \u0111\u01b0\u1ee3c."),(0,l.kt)("h3",{id:"13-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-ng\u1eabu-nhi\xean-mar"},"1.3 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ng\u1eabu nhi\xean (MAR)"),(0,l.kt)("p",null,"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft trong tr\u01b0\u1eddng h\u1ee3p n\xe0y x\u1ea3y ra do ng\u1eabu nhi\xean, tuy nhi\xean v\u1eabn c\xf3 m\u1ed1i quan h\u1ec7 gi\u1eefa d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft v\xe0 d\u1eef li\u1ec7u quan s\xe1t \u0111\u01b0\u1ee3c. \u0110i\u1ec1u \u0111\xf3 c\u0169ng c\xf3 ngh\u0129a l\xe0 d\u1eef li\u1ec7u b\u1ecb khuy\u1ebft ng\u1eabu nhi\xean c\xf3 t\xe1c \u0111\u1ed9ng \u0111\u1ebfn s\u1ef1 sai l\u1ec7ch c\u1ee7a d\u1eef li\u1ec7u c\u0169ng nh\u01b0 \u0111\u1ed9 tin c\u1eady c\u1ee7a m\xf4 h\xecnh v\u1ec1 sau."),(0,l.kt)("h3",{id:"14-d\u1eef-li\u1ec7u-b\u1ecb-khuy\u1ebft-kh\xf4ng-ph\u1ea3i-ng\u1eabu-nhi\xean-mnar"},"1.4 D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft kh\xf4ng ph\u1ea3i ng\u1eabu nhi\xean (MNAR)"),(0,l.kt)("p",null,"D\u1eef li\u1ec7u b\u1ecb khuy\u1ebft kh\xf4ng ph\u1ea3i l\xe0 ng\u1eabu nhi\xean m\xe0 c\xe1c gi\xe1 tr\u1ecb n\xe0y b\u1ecb b\u1ecf s\xf3t 1 c\xe1ch c\xf3 ch\u1ee7 \xfd, t\u1ee9c l\xe0 c\xf3 s\u1ef1 li\xean quan v\u1ec1 m\u1eb7t xu h\u01b0\u1edbng 1 c\xe1ch c\xf3 h\u1ec7 th\u1ed1ng gi\u1eefa gi\xe1 tr\u1ecb b\u1ecb khuy\u1ebft v\xe0 gi\xe1 tr\u1ecb kh\xf4ng b\u1ecb khuy\u1ebft trong m\u1ed9t bi\u1ebfn v\xe0 \u0111i\u1ec1u \u0111\xf3 c\xf3 th\u1ec3 t\xe1c \u0111\u1ed9ng \u0111\u1ebfn s\u1ef1 sai l\u1ec7ch c\u1ee7a d\u1eef li\u1ec7u."),(0,l.kt)("h2",{id:"2-ph\xe2n-bi\u1ec7t-c\xe1c-lo\u1ea1i-khuy\u1ebft-d\u1eef-li\u1ec7u"},"2. Ph\xe2n bi\u1ec7t c\xe1c lo\u1ea1i khuy\u1ebft d\u1eef li\u1ec7u"),(0,l.kt)("p",null,"Trong th\u1ef1c t\u1ebf, khi l\xe0m vi\u1ec7c v\u1edbi 1 t\u1eadp d\u1eef li\u1ec7u v\xe0 \u0111\u1ed1i m\u1eb7t v\u1edbi v\u1ea5n \u0111\u1ec1 m\u1ea5t m\xe1t hay khuy\u1ebft d\u1eef li\u1ec7u, ta c\u1ea7n ph\xe2n lo\u1ea1i \u0111\u01b0\u1ee3c d\u1eef li\u1ec7u \u0111ang b\u1ecb khuy\u1ebft theo c\u01a1 ch\u1ebf n\xe0o \u0111\u1ec3 t\u1eeb \u0111\xf3 \u0111\u01b0a ra nh\u1eefng h\u01b0\u1edbng gi\u1ea3i quy\u1ebft ph\xf9 h\u1ee3p \u0111\u1ea3m b\u1ea3o \u0111\u1ed9 tin c\u1eady c\u1ee7a d\u1eef li\u1ec7u."),(0,l.kt)("p",null,"Th\xf4ng th\u01b0\u1eddng, ta kh\xf3 c\xf3 th\u1ec3 ph\xe2n bi\u1ec7t t\u01b0\u1eddng minh gi\u1eefa c\xe1c lo\u1ea1i khuy\u1ebft d\u1eef li\u1ec7u n\xe0y, \u0111\u1eb7c bi\u1ec7t l\xe0 MAR so v\u1edbi MNAR. Tuy nhi\xean, ta c\xf3 th\u1ec3 ki\u1ec3m tra xem d\u1eef li\u1ec7u khuy\u1ebft theo MCAR hay MAR th\xf4ng qua th\u1eed nghi\u1ec7m t\u1ea1o c\xe1c bi\u1ebfn gi\u1ea3 r\u1ed3i th\u1eed nghi\u1ec7m ",(0,l.kt)("inlineCode",{parentName:"p"},"t-test")," v\xe0 ki\u1ec3m \u0111\u1ecbnh ",(0,l.kt)("inlineCode",{parentName:"p"},"chi-squared test")," gi\u1eefa bi\u1ebfn n\xe0y v\xe0 c\xe1c bi\u1ebfn kh\xe1c trong t\u1eadp d\u1eef li\u1ec7u \u0111\u1ec3 xem li\u1ec7u s\u1ef1 thi\u1ebfu h\u1ee5t tr\xean bi\u1ebfn n\xe0y c\xf3 li\xean quan \u0111\u1ebfn gi\xe1 tr\u1ecb c\u1ee7a c\xe1c bi\u1ebfn kh\xe1c hay kh\xf4ng."),(0,l.kt)("p",null,"V\xed d\u1ee5: n\u1ebfu n\u1eef gi\u1edbi th\u1ef1c s\u1ef1 \xedt c\xf3 kh\u1ea3 n\u0103ng cho b\u1ea1n bi\u1ebft c\xe2n n\u1eb7ng c\u1ee7a h\u1ecd h\u01a1n nam gi\u1edbi, th\xec ",(0,l.kt)("inlineCode",{parentName:"p"},"chi-squared test")," s\u1ebd cho b\u1ea1n bi\u1ebft r\u1eb1ng t\u1ef7 l\u1ec7 khuy\u1ebft d\u1eef li\u1ec7u tr\xean bi\u1ebfn c\xe2n n\u1eb7ng \u1edf ph\u1ee5 n\u1eef cao h\u01a1n nam gi\u1edbi. T\u1eeb \u0111\xf3, ta c\xf3 th\u1ec3 k\u1ebft lu\u1eadn r\u1eb1ng tr\u01b0\u1eddng c\xe2n n\u1eb7ng l\xe0 MAR."))}d.isMDXComponent=!0}}]);