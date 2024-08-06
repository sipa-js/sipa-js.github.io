"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},o="History and why of Sipa",s={unversionedId:"guides/history_and_why",id:"guides/history_and_why",title:"History and why of Sipa",description:"History",source:"@site/docs/guides/history_and_why.md",sourceDirName:"guides",slug:"/guides/history_and_why",permalink:"/docs/guides/history_and_why",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/guides/history_and_why.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/guides/overview"},next:{title:"Installation",permalink:"/docs/guides/installation"}},l={},d=[{value:"History",id:"history",level:2},{value:"Why",id:"why",level:2},{value:"Why is it called SIPA?",id:"why-is-it-called-sipa",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"history-and-why-of-sipa"},"History and why of Sipa"),(0,a.kt)("h2",{id:"history"},"History"),(0,a.kt)("p",null,"After I started with web development at the end of the 90s, a lot has happened since then."),(0,a.kt)("p",null,"One of the major changes was the introduction of CSS. Before, layouts were build using framesets, iframes and using tables. CSS made reusing styles very comfortable, but lacked at the beginning a lot of features for creating layouts, that were possible with tables. "),(0,a.kt)("p",null,"Another major change was the empowering JavaScript programming language, creating more and more interactive websites natively (without Flash plugin!)."),(0,a.kt)("p",null,"People tried to put concepts from other desktop UI frameworks into the browser. So called Single Page Application (SPA) Frameworks like Angular(JS), Ember, Knockout and Backbone arised."),(0,a.kt)("p",null,"Many of their concepts were great, but not their actual implementation. It made so many stuff more complicated, as necessary."),(0,a.kt)("p",null,'They not introduced their concepts, they even introduced their own "language" jumping apart from the JavaScript Standard, introducing own concepts (like JSX) and even introducing new languages (like TypeScript, Elm, ...).'),(0,a.kt)("p",null,'So many advantages of developing native in your browser, were replaced with complicated build chains and magic concepts. So new developers did not really learn JavaScript programming in its core anymore, when starting with the "big" frameworks - they learned the framework.'),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,'The first time I worked with one of the "big" SPAs, using Angular, i was curious about its concepts, the learning tutorials felt fluent and nice.'),(0,a.kt)("p",null,'But then working with it and solving "real" problems became very inefficent. At first i thought, it might need more time, but the time showed, that developers often were not solving problems, they always were looking for "How can i do this with Angular?". So we did not only focus on implementing our solutions, but spending a lot of time with Angular and its documentation. And it\'s regular updates with breaking changes, several options to solve one problem (choosing between two different form builders). It never became fluent and enjoyable, as i was get used to web development before.'),(0,a.kt)("p",null,"Get used doing my job intuitively and fluent, i felt like in an insane asylum."),(0,a.kt)("p",null,"Why not just using good old JavaScript, of course with its current language features, and throwing away all the complexity I'm not interested to keep busy with?"),(0,a.kt)("p",null,"Why not having some good basic structure, that helps me to organize my projects, but free from to much limitations that lead me to hack the framework in special cases again and again?"),(0,a.kt)("p",null,'Originally the predecessor arised rather coincidentally. We needed a really quick PoC for a separate, independent project and my relationship to the f*cking "beloved" Angular was already a disaster, I started it doing the old way using just proven libraries as jQuery, lodash and more ... by adding more and more basic structure into the project.'),(0,a.kt)("p",null,"As the original frontend developers that introduced Angular for a desktop and mobile app, more and more moved to other projects, leaving it to me as main developer, at first i reimplemented the whole mobile app, which was also based on Angular, within a few weeks, including new features without Angular from scratch, because i was sure, i would even need more time, to just add them to the existing Angular app, the first step was done. My claim, that Angular has a good concept idea, but is a piece of sh*t for development, was confirmed by that experience. So i reimplemented the layout of the desktop Angular app and implemented new features based on the PoC mentioned before. The old desktop was linked (nearly) flawless with the new one. Developer happiness end productivity came back again."),(0,a.kt)("p",null,"Many aspects ot the new code base were very customized to the product itself. Some structures showed up that they can be optimized."),(0,a.kt)("p",null,"With the desire to rework it again, make it more unspecific and generic, but also beeing able to use it in future private projects, loving OpenSource, i rewrote the base in my free time, especially in my vacations between christmas and new year in the last years and SIPA was born."),(0,a.kt)("h2",{id:"why-is-it-called-sipa"},"Why is it called SIPA?"),(0,a.kt)("p",null,"I wanted to give the framework a name that tells, that this framework is particular simple!"),(0,a.kt)("p",null,"Playing around with these words, ",(0,a.kt)("inlineCode",{parentName:"p"},"Simpartic")," was born. Particular Simple. Reversed. Shortened. And it sounds like ",(0,a.kt)("inlineCode",{parentName:"p"},"simpatico"),"."),(0,a.kt)("p",null,"It was also very important for me, to make it friendly to Google. ",(0,a.kt)("inlineCode",{parentName:"p"},"Simpartic")," was a new word with hardly any search results."),(0,a.kt)("p",null,"As ",(0,a.kt)("inlineCode",{parentName:"p"},"simpartic")," was a long name for the command line (CLI), i also offered a shortcut ",(0,a.kt)("inlineCode",{parentName:"p"},"sipa")," at the beginning."),(0,a.kt)("p",null,"And i figured out, that pronouncing ",(0,a.kt)("inlineCode",{parentName:"p"},"sipa")," was much more fun than ",(0,a.kt)("inlineCode",{parentName:"p"},"simpartic")," ..."),(0,a.kt)("p",null,"After thinking about loosing great search engine ability to find easily everything about ",(0,a.kt)("inlineCode",{parentName:"p"},"simpartic"),", i decided to give it a sh*t. Who cares? Will it ever be popular? Not when pronouncing it is no fun!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Sipa")," was born. ",(0,a.kt)("inlineCode",{parentName:"p"},"SIPA")," has entered the world."),(0,a.kt)("p",null,"So you still can use ",(0,a.kt)("inlineCode",{parentName:"p"},"simpartic")," as alias on the command line and so be a part of its history. ;-)"))}u.isMDXComponent=!0}}]);