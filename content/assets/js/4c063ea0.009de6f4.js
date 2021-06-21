(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[969],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3054:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var r=n(2122),i=n(9756),a=(n(7294),n(4137)),o=["components"],l={title:"Star-tree index - Powering fast aggregations on Pinot",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"Introduced Star-Tree index to utilize the pre-aggregated documents in a smart way that achieves low query latencies, while using the storage space efficiently.",keywords:["Pinot","LinkedIn","Star-Tree","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,s={permalink:"/blog/2019/06/14/LinkedIn-StarTree",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2019-06-14-LinkedIn-StarTree.md",source:"@site/blog/2019-06-14-LinkedIn-StarTree.md",title:"Star-tree index - Powering fast aggregations on Pinot",description:"Introduced Star-Tree index to utilize the pre-aggregated documents in a smart way that achieves low query latencies, while using the storage space efficiently.",date:"2019-06-14T00:00:00.000Z",formattedDate:"June 14, 2019",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.175,truncated:!1,prevItem:{title:"Auto-tuning Pinot real-time consumption",permalink:"/blog/2019/07/11/LinkedIn-AutoTune"},nextItem:{title:"Introducing ThirdEye - LinkedIn\u2019s Business-Wide Monitoring Platform",permalink:"/blog/2019/01/09/LinkedIn-IntroThirdEye"}},p=[],u={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Introduced Star-Tree index to utilize the pre-aggregated documents in a smart way that achieves low query latencies,\nwhile using the storage space efficiently."),(0,a.kt)("p",null,"Read More at ",(0,a.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2019/06/star-tree-index--powering-fast-aggregations-on-pinot"},"https://engineering.linkedin.com/blog/2019/06/star-tree-index--powering-fast-aggregations-on-pinot")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2019/06/startree3.png",alt:"Star-tree index - Powering fast aggregations on Pinot"})))}g.isMDXComponent=!0}}]);