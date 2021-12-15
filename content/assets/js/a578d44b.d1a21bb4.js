/*! For license information please see a578d44b.d1a21bb4.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6061],{4137:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8448:function(e,r,t){"use strict";var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},7225:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(7462),o=t(7294),a=t(1048),l=t(2713);var i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(1297),c=t(6010),s="tabItem_vU9c";function p(e){var r,t,n,a=e.lazy,l=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),h=(0,u.lx)(b,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(r=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=v[0])?void 0:n.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),k=g.tabGroupChoices,w=g.setTabGroupChoices,O=(0,o.useState)(y),E=O[0],T=O[1],j=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=k[d];null!=P&&P!==E&&b.some((function(e){return e.value===P}))&&T(P)}var N=function(e){var r=e.currentTarget,t=j.indexOf(r),n=b[t].value;n!==E&&(x(r),T(n),null!=d&&w(d,n))},C=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break;case"ArrowLeft":var o=j.indexOf(e.currentTarget)-1;t=j[o]||j[j.length-1]}null==(r=t)||r.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},m)},b.map((function(e){var r=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:E===r?0:-1,"aria-selected":E===r,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":E===r}),key:r,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:N,onClick:N},null!=t?t:r)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==E})}))))}function f(e){var r=(0,a.Z)();return o.createElement(p,(0,n.Z)({key:String(r)},e))}},6261:function(e,r,t){"use strict";var n=t(7294),o=t(4184),a=t.n(o);r.Z=function(e){var r=e.children,t=e.classNames,o=e.fill,l=e.icon,i=e.type,u=null;switch(i){case"danger":case"warning":u="alert-triangle";break;case"success":u="check-circle";break;default:u="info"}return n.createElement("div",{className:a()(t,"alert","alert--"+i,{"alert--fill":o,"alert--icon":!1!==l}),role:"alert"},!1!==l&&n.createElement("i",{className:a()("feather","icon-"+(l||u))}),r)}},5096:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(4137)),l=(t(6261),t(7225),t(8448),["components"]),i={title:"Broker",sidebar_label:"broker",description:"Broker",draft:!0},u=void 0,c={unversionedId:"components/broker",id:"components/broker",title:"Broker",description:"Broker",source:"@site/docs/components/broker.md",sourceDirName:"components",slug:"/components/broker",permalink:"/docs/components/broker",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/components/broker.md",tags:[],version:"current",frontMatter:{title:"Broker",sidebar_label:"broker",description:"Broker",draft:!0},sidebar:"docs",previous:{title:"Ubuntu",permalink:"/docs/administration/installation/operating-systems/ubuntu"},next:{title:"cluster",permalink:"/docs/components/cluster"}},s=[],p={toc:s};function f(e){var r=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Brokers are the components that handle Pinot queries. They accept queries from clients and forward them to the right servers. They collect results back from the servers and consolidate them into a single response, to sent it back to the client."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Broker",src:t(8213).Z})))}f.isMDXComponent=!0},4184:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var l=o.apply(null,t);l&&e.push(l)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var i in t)n.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},8213:function(e,r,t){"use strict";r.Z=t.p+"assets/images/Broker-356f92896de988004ef75c8ae79d4bf1.png"}}]);