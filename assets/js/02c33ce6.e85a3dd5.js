"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7948],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)a=u[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(i,".").concat(m)]||h[m]||s[m]||u;return a?r.createElement(d,o(o({ref:t},l),{},{components:a})):r.createElement(d,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,o=new Array(u);o[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<u;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),n=a(79443);var u=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),p="tabItem_vU9c",i="tabItemActive_cw6a";var c=function(e){var t,a=e.lazy,n=e.block,c=e.defaultValue,l=e.values,s=e.groupId,h=e.className,m=r.Children.toArray(e.children),d=null!=l?l:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=u(),y=v.tabGroupChoices,w=v.setTabGroupChoices,b=(0,r.useState)(f),g=b[0],k=b[1],P=[];if(null!=s){var N=y[s];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&k(N)}var O=function(e){var t=e.currentTarget,a=P.indexOf(t),r=d[a].value;k(r),null!=s&&(w(s,r),setTimeout((function(){var e,a,r,n,u,o,p,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,u=e.right,o=window,p=o.innerHeight,c=o.innerWidth,a>=0&&u<=c&&n<=p&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.target)+1;a=P[r]||P[0];break;case"ArrowLeft":var n=P.indexOf(e.target)-1;a=P[n]||P[P.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},d.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",p,{"tabs__item--active":g===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=a?a:t)}))),a?(0,r.cloneElement)(m.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},95890:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return h},default:function(){return d}});var r=a(87462),n=a(63366),u=(a(67294),a(3905)),o=a(55064),p=a(58215),i=["components"],c={title:"Puppet Provider: WeChat4U",sidebar_label:"WeChat4U"},l=void 0,s={unversionedId:"puppet-providers/wechat4u",id:"puppet-providers/wechat4u",isDocsHomePage:!1,title:"Puppet Provider: WeChat4U",description:"Wechaty Puppet WeChat4U",source:"@site/docs/puppet-providers/wechat4u.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/wechat4u",permalink:"/docs/puppet-providers/wechat4u",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-providers/wechat4u.md",tags:[],version:"current",lastUpdatedBy:"Soumi7",lastUpdatedAt:1629781743,formattedLastUpdatedAt:"8/24/2021",frontMatter:{title:"Puppet Provider: WeChat4U",sidebar_label:"WeChat4U"},sidebar:"docs",previous:{title:"PadLocal",permalink:"/docs/puppet-providers/padlocal"},next:{title:"XP",permalink:"/docs/puppet-providers/xp"}},h=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],m={toc:h};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"wechat4u"},(0,u.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-WeChat4U-blueviolet",alt:"Wechaty Puppet WeChat4U"}))),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-wechat4u/HEAD/docs/images/wechat4u-logo.png",alt:"Wechaty Puppet WeChat4U"})),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-wechat4u"},(0,u.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-wechat4u.svg",alt:"NPM Version"})),"\n",(0,u.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-wechat4u?activeTab=versions"},(0,u.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-wechat4u/next.svg",alt:"npm (tag)"}))),(0,u.kt)("p",null,"Wechat4U is an excellent wechat bot framework that supports both Node.js and Browser, with rich features and an active community of experienced contributors. PuppetWechat4U will let wechaty users have the second way to use wechaty, not only by Browser Hook but also by Server API Call."),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Repo: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat4u"},"https://github.com/wechaty/wechaty-puppet-wechat4u")),(0,u.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,u.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-wechat4u/issues"},"https://github.com/wechaty/wechaty-puppet-wechat4u/issues"))),(0,u.kt)("h2",{id:"features"},"Features"),(0,u.kt)("p",null,"This is a full-featured Wechaty Puppet."),(0,u.kt)("h2",{id:"usage"},"Usage"),(0,u.kt)("p",null,"Run wechaty-puppet-wechat4u."),(0,u.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,u.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nexport WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n"))),(0,u.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nexport WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n"))),(0,u.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-wechat4u\nset WECHATY_PUPPET=wechaty-puppet-wechat4u\nnpm start\n")))),(0,u.kt)("h2",{id:"history"},"History"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2018/07/12/wechaty-new-release-version-0.18/"},"Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817, Huan, Jul 12, 2018"))),(0,u.kt)("h2",{id:"maintainers"},"Maintainers"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}d.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);