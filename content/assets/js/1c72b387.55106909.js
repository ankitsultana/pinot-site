/*! For license information please see 1c72b387.55106909.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6800],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2511:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(3366),a=n(7294),l=n(3727),i=n(9962),o=n(2735),s=n(6136),c=(0,a.createContext)({collectLink:function(){}}),u=n(9524),d=n(3905),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,f=e.to,h=e.href,k=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,O=void 0===b||b,y=(0,r.Z)(e,p),C=(0,i.Z)().siteConfig.trailingSlash,N=(0,u.C)().withBaseUrl,w=(0,a.useContext)(c),E=f||h,P=(0,o.Z)(E),G=null==E?void 0:E.replace("pathname://",""),U=void 0!==G?(n=G,O&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0;U&&P&&(U=(0,d.applyTrailingSlash)(U,C));var j,D=(0,a.useRef)(!1),_=m?l.OL:l.rU,L=s.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!L&&P&&null!=U&&window.docusaurus.prefetch(U),function(){L&&j&&j.disconnect()}}),[U,L,P]);var T=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,S=!U||!P||T;return U&&P&&!T&&!v&&w.collectLink(U),S?a.createElement("a",Object.assign({href:U},E&&!P&&{target:"_blank",rel:"noopener noreferrer"},y)):a.createElement(_,Object.assign({},y,{onMouseEnter:function(){D.current||null==U||(window.docusaurus.preload(U),D.current=!0)},innerRef:function(e){var t,n;L&&e&&P&&(t=e,n=function(){null!=U&&window.docusaurus.prefetch(U)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))}))).observe(t))},to:U||""},m&&{isActive:g,activeClassName:k}))}},2735:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{Z:function(){return a},b:function(){return r}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return l},Z:function(){return i}});var r=n(9962),a=n(2735);function l(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,i=l.forcePrependBaseUrl,o=void 0!==i&&i,s=l.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(l,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},4136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,r=e.split(/[#?]/)[0],a="/"===r?"/":t?(n=r).endsWith("/")?n:n+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);return e.replace(r,a)}},3905:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var l=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(l).default}})},3509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6261:function(e,t,n){"use strict";var r=n(7294),a=n(4184),l=n.n(a);t.Z=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,o=e.type,s=null;switch(o){case"danger":case"warning":s="alert-triangle";break;case"success":s="check-circle";break;default:s="info"}return r.createElement("div",{className:l()(n,"alert","alert--"+o,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.createElement("i",{className:l()("feather","icon-"+(i||s))}),t)}},9342:function(e,t,n){"use strict";var r=n(7294),a=n(2511),l=n(4184),i=n.n(l);t.Z=function(e){var t=e.children,n=e.className,l=e.badge,o=e.icon,s=e.size,c=e.target,u=e.to,d=i()("jump-to","jump-to--"+s,n),p=r.createElement("div",{className:"jump-to--inner"},r.createElement("div",{className:"jump-to--inner-2"},r.createElement("div",{className:"jump-to--main"},l?r.createElement("span",{className:"badge badge--primary badge--right"},l):"",t),r.createElement("div",{className:"jump-to--right"},r.createElement("i",{className:"feather icon-"+(o||"chevron-right")+" arrow"}))));return c?r.createElement("a",{href:u,target:c,className:d},p):r.createElement(a.Z,{to:u,className:d},p)}},2729:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(4137)),i=n(6261),o=n(9342),s=["components"],c={title:"GCP Quickstart",sidebar_label:"GCP",description:"Run Pinot on GCP",draft:!0},u=void 0,d={unversionedId:"administration/installation/cloud/gcp",id:"administration/installation/cloud/gcp",isDocsHomePage:!1,title:"GCP Quickstart",description:"Run Pinot on GCP",source:"@site/docs/administration/installation/cloud/gcp.md",sourceDirName:"administration/installation/cloud",slug:"/administration/installation/cloud/gcp",permalink:"/docs/administration/installation/cloud/gcp",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration/installation/cloud/gcp.md",version:"current",frontMatter:{title:"GCP Quickstart",sidebar_label:"GCP",description:"Run Pinot on GCP",draft:!0},sidebar:"docs",previous:{title:"AWS",permalink:"/docs/administration/installation/cloud/aws"},next:{title:"Azure",permalink:"/docs/administration/installation/cloud/azure"}},p=[{value:"Tooling Installation",id:"tooling-installation",children:[{value:"Install Kubectl",id:"install-kubectl",children:[]},{value:"Install Helm",id:"install-helm",children:[]}]},{value:"Install Google Cloud SDK",id:"install-google-cloud-sdk",children:[{value:"For Mac User",id:"for-mac-user",children:[]},{value:"(Optional) Initialize Google Cloud Environment",id:"optional-initialize-google-cloud-environment",children:[]},{value:"(Optional) Create a Kubernetes cluster(GKE) in Google Cloud",id:"optional-create-a-kubernetes-clustergke-in-google-cloud",children:[]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}]}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To have basic set with ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine(GKE)")," on GCP:"),(0,l.kt)("h2",{id:"tooling-installation"},"Tooling Installation"),(0,l.kt)("h3",{id:"install-kubectl"},"Install Kubectl"),(0,l.kt)("p",null,"Please follow this link (",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"},"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),(0,l.kt)("p",null,"For Mac User"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-cli\n")),(0,l.kt)("p",null,"Please check kubectl version after installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl version\n")),(0,l.kt)("p",null,"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12"),(0,l.kt)("h3",{id:"install-helm"},"Install Helm"),(0,l.kt)("p",null,"Please follow this ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/using_helm/#installing-helm"},"link to install helm")),(0,l.kt)("p",null,"For Mac User"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-helm\n")),(0,l.kt)("p",null,"Please check helm version after installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,l.kt)(i.Z,{icon:!1,type:"info",mdxType:"Alert"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1. Please pick the script based on your helm version."),(0,l.kt)("h2",{id:"install-google-cloud-sdk"},"Install Google Cloud SDK"),(0,l.kt)("p",null,"Please follow this link to ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/install"},"install Google Cloud SDK")),(0,l.kt)("h3",{id:"for-mac-user"},"For Mac User"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Google Cloud SDK")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://sdk.cloud.google.com | bash\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Restart your shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"exec -l $SHELL\n")),(0,l.kt)("h3",{id:"optional-initialize-google-cloud-environment"},"(Optional) Initialize Google Cloud Environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud init\n")),(0,l.kt)("h3",{id:"optional-create-a-kubernetes-clustergke-in-google-cloud"},"(Optional) Create a Kubernetes cluster(GKE) in Google Cloud"),(0,l.kt)("p",null,"Below script will create a 3 nodes cluster named pinot-quickstart in ",(0,l.kt)("inlineCode",{parentName:"p"},"us-west1-b")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"n1-standard-2")," machines for demo purposes."),(0,l.kt)("p",null,"Please modify the parameters in the example command below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GCLOUD_PROJECT=[your gcloud project name]\nGCLOUD_ZONE=us-west1-b\nGCLOUD_CLUSTER=pinot-quickstart\nGCLOUD_MACHINE_TYPE=n1-standard-2\nGCLOUD_NUM_NODES=3\ngcloud container clusters create ${GCLOUD_CLUSTER} \\\n  --num-nodes=${GCLOUD_NUM_NODES} \\\n  --machine-type=${GCLOUD_MACHINE_TYPE} \\\n  --zone=${GCLOUD_ZONE} \\\n  --project=${GCLOUD_PROJECT}\n")),(0,l.kt)("p",null,"You can monitor cluster status by command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instances list\n")),(0,l.kt)("p",null,"Once the cluster is in RUNNING status, it's ready to be used."),(0,l.kt)("h3",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),(0,l.kt)("p",null,"Simply run below command to get the credential for the cluster pinot-quickstart that you just created or your existing cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GCLOUD_PROJECT=[your gcloud project name]\nGCLOUD_ZONE=us-west1-b\nGCLOUD_CLUSTER=pinot-quickstart\ngcloud container clusters get-credentials ${GCLOUD_CLUSTER} --zone ${GCLOUD_ZONE} --project ${GCLOUD_PROJECT}\n")),(0,l.kt)("p",null,"To verify the connection, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")),(0,l.kt)("h3",{id:"pinot-quickstart"},"Pinot Quickstart"),(0,l.kt)("p",null,"Please follow this ",(0,l.kt)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premises"},"Kubernetes QuickStart")," to deploy your Pinot Demo."),(0,l.kt)(o.Z,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),(0,l.kt)("h3",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GCLOUD_ZONE=us-west1-b\ngcloud container clusters delete pinot-quickstart --zone=${GCLOUD_ZONE}\n")))}f.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);