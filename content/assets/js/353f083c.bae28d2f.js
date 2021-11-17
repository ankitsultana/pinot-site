"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1845],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,d=g["".concat(c,".").concat(m)]||g[m]||p[m]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8799:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var i=n(7462),r=n(3366),a=(n(7294),n(4137)),o=["components"],l={title:"Auto-tuning Pinot real-time consumption",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",keywords:["Pinot","Uber Data","Auto Tuning","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,s={permalink:"/blog/2019/07/11/LinkedIn-AutoTune",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2019-07-11-LinkedIn-AutoTune.md",source:"@site/blog/2019-07-11-LinkedIn-AutoTune.md",title:"Auto-tuning Pinot real-time consumption",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",date:"2019-07-11T00:00:00.000Z",formattedDate:"July 11, 2019",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.24,truncated:!1,authors:[{name:"LinkedIn",title:"LinkedIn Engineering Team",url:"https://engineering.linkedin.com/blog/topic/pinot",imageURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png"}],prevItem:{title:"Engineering SQL Support on Apache Pinot at Uber",permalink:"/blog/2020/01/15/Pinot-Presto-SQL"},nextItem:{title:"Star-tree index - Powering fast aggregations on Pinot",permalink:"/blog/2019/06/14/LinkedIn-StarTree"}},u={authorsImageUrls:[void 0]},p=[],g={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Focus on Auto tuning Pinot, a scalable distributed columnar OLAP data store developed at LinkedIn, delivers real-time analytics for site-facing use cases such as LinkedIn's Who viewed my profile, Talent insights, and more."),(0,a.kt)("p",null,"Read More at ",(0,a.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/bridging-batch-and-stream-processing"},"https://engineering.linkedin.com/blog/2020/bridging-batch-and-stream-processing")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/07/bridging-1.png",alt:"Bridging batch and stream processing for the Recruiter usage statistics dashboard"})))}m.isMDXComponent=!0}}]);