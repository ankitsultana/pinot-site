(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5118],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,b=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7432:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(4137)),i=["components"],l={title:"Engineering SQL Support on Apache Pinot at Uber",author:"Uber",author_title:"Uber Data Team",author_url:"https://eng.uber.com/category/articles/uberdata/",author_image_url:"https://pbs.twimg.com/profile_images/1192909783856103427/6A4s8gW2_400x400.png",description:"Talks about solution that linked Presto, a query engine that supports full ANSI SQL, and Pinot, a real-time OLAP (online analytical processing) datastore.",keywords:["Pinot","Pinot SQL","Pinot Presto","User-Facing Analytics","Real-time data platform"],tags:["Pinot","Uber","real-time data platform","Realtime","Analytics","User-Facing Analytics","Presto","SQL"]},s=void 0,p={permalink:"/blog/2020/01/15/Pinot-Presto-SQL",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2020-01-15-Pinot-Presto-SQL.md",source:"@site/blog/2020-01-15-Pinot-Presto-SQL.md",title:"Engineering SQL Support on Apache Pinot at Uber",description:"Talks about solution that linked Presto, a query engine that supports full ANSI SQL, and Pinot, a real-time OLAP (online analytical processing) datastore.",date:"2020-01-15T00:00:00.000Z",formattedDate:"January 15, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Uber",permalink:"/blog/tags/uber"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"Presto",permalink:"/blog/tags/presto"},{label:"SQL",permalink:"/blog/tags/sql"}],readingTime:.42,truncated:!1,prevItem:{title:"Analyzing anomalies with ThirdEye",permalink:"/blog/2020/02/20/LinkedIn-Thirdeye"},nextItem:{title:"Auto-tuning Pinot real-time consumption",permalink:"/blog/2019/07/11/LinkedIn-AutoTune"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uber leverages real-time analytics on aggregate data to improve the user experience across our products, from fighting fraudulent behavior on Uber Eats to forecasting demand on our platform."),(0,o.kt)("p",null,"To resolve these issues, we built a solution that linked Presto, a query engine that supports full ANSI SQL, and Pinot, a real-time OLAP (online analytical processing) datastore. This married solution allows users to write ad-hoc SQL queries, empowering teams to unlock significant analysis capabilities."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://eng.uber.com/engineering-sql-support-on-apache-pinot/"},"Read More at https://eng.uber.com/engineering-sql-support-on-apache-pinot/")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/Header-SQL-768x329.png",alt:"SQL Support on Apache Pinot at Uber"})))}m.isMDXComponent=!0}}]);