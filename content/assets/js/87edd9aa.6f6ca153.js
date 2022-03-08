"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1770],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4963:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=["components"],l={title:"Build Docker Images",sidebar_label:"build-docker",description:"Build Docker Images",draft:!0},p=void 0,u={unversionedId:"misc/build-docker",id:"misc/build-docker",isDocsHomePage:!1,title:"Build Docker Images",description:"Build Docker Images",source:"@site/docs/misc/build-docker.md",sourceDirName:"misc",slug:"/misc/build-docker",permalink:"/docs/misc/build-docker",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/misc/build-docker.md",version:"current",frontMatter:{title:"Build Docker Images",sidebar_label:"build-docker",description:"Build Docker Images",draft:!0}},s=[{value:"Pinot",id:"pinot",children:[{value:"How to build a docker image",id:"how-to-build-a-docker-image",children:[]}]},{value:"How to publish a docker image",id:"how-to-publish-a-docker-image",children:[]},{value:"Kubernetes Examples",id:"kubernetes-examples",children:[]},{value:"Pinot Presto",id:"pinot-presto",children:[{value:"How to build",id:"how-to-build",children:[]},{value:"How to push",id:"how-to-push",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Volumes",id:"volumes",children:[]},{value:"Kubernetes Examples",id:"kubernetes-examples-1",children:[]}]},{value:"Pinot Superset",id:"pinot-superset",children:[{value:"How to build",id:"how-to-build-1",children:[]},{value:"Configuration",id:"configuration-1",children:[]},{value:"Volumes",id:"volumes-1",children:[]},{value:"Kubernetes Examples",id:"kubernetes-examples-2",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The scripts to build Pinot related docker images is located at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot/tree/master/docker/images"},"here")),(0,o.kt)("p",null,"You can access those scripts by running below command to checkout Pinot repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:apache/pinot.git pinot\ncd pinot/docker/images\n")),(0,o.kt)("p",null,"You can find current supported 3 images in this directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pinot: Pinot all-in-one distribution image"),(0,o.kt)("li",{parentName:"ul"},"Pinot-Presto: Presto image with Presto-Pinot Connector built-in."),(0,o.kt)("li",{parentName:"ul"},"Pinot-Superset: Superset image with Pinot connector built-in.")),(0,o.kt)("h2",{id:"pinot"},"Pinot"),(0,o.kt)("p",null,"This is a docker image of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot"},"Apache Pinot")),(0,o.kt)("h3",{id:"how-to-build-a-docker-image"},"How to build a docker image"),(0,o.kt)("p",null,"There is a docker build script which will build a given Git repo/branch and tag the image."),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./docker-build.sh [Docker Tag] [Git Branch] [Pinot Git URL]\n")),(0,o.kt)("p",null,"This script will check out Pinot Repo ",(0,o.kt)("inlineCode",{parentName:"p"},"[Pinot Git URL]")," on branch ",(0,o.kt)("inlineCode",{parentName:"p"},"[Git Branch]")," and build the docker image for that. ",(0,o.kt)("br",null),"\nThe docker image is tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"[Docker Tag]"),". ",(0,o.kt)("br",null),"\nDocker Tag: Name and tag your docker image. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"pinot:latest"),". ",(0,o.kt)("br",null),"\nGit Branch: The Pinot branch to build. Default is master. ",(0,o.kt)("br",null),"\nPinot Git URL: The Pinot Git Repo to build, users can set it to their own fork. ",(0,o.kt)("br",null),"\nPlease note that, the URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," based, not ",(0,o.kt)("inlineCode",{parentName:"p"},"git://"),". ",(0,o.kt)("br",null),"\nDefault is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot.git"},"Apache Repo: https://github.com/apache/pinot.git"),". ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of building and tagging a snapshot on your own fork:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./docker-build.sh pinot_fork:snapshot-5.2 snapshot-5.2 https://github.com/your_own_fork/pinot.git\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of building a release version:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./docker-build.sh pinot:release-0.1.0 release-0.1.0 https://github.com/apache/pinot.git\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of building current master branch as a snapshot:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./docker-build.sh apachepinot/pinot:0.3.0-SNAPSHOT master\n")),(0,o.kt)("h2",{id:"how-to-publish-a-docker-image"},"How to publish a docker image"),(0,o.kt)("p",null,"Script ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-push.sh")," publishes a given docker image to your docker registry.\nIn order to push to your own repo, the image needs to be explicitly tagged with the repo name."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of publishing an image to ",(0,o.kt)("inlineCode",{parentName:"li"},"[apachepinot/pinot](https://hub.docker.com/u/apachepinot/repository/docker/apachepinot/pinot)")," dockerHub repo.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./docker-push.sh apachepinot/pinot:latest\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can also tag a built image, then push it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag pinot:release-0.1.0 apachepinot/pinot:release-0.1.0\ndocker push apachepinot/pinot:release-0.1.0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Script docker-build-and-push.sh builds and publishes this docker image to your docker registry after build.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Example of building and publishing an image to ",(0,o.kt)("inlineCode",{parentName:"p"},"[apachepinot/pinot](https://hub.docker.com/u/apachepinot/repository/docker/apachepinot/pinot)")," dockerHub repo."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./docker-build-and-push.sh apachepinot/pinot:latest master https://github.com/apache/pinot.git\n")),(0,o.kt)("h2",{id:"kubernetes-examples"},"Kubernetes Examples"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premise"},"Kubernetes Quickstart")," for deployment examples."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premise"},"Kubernetes Quickstart")),(0,o.kt)("h2",{id:"pinot-presto"},"Pinot Presto"),(0,o.kt)("p",null,"Docker image for Presto with Pinot integration.\nThis docker build project is specialized for Pinot."),(0,o.kt)("h3",{id:"how-to-build"},"How to build"),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./docker-build.sh [Docker Tag] [Git Branch] [Presto Git URL]\n")),(0,o.kt)("p",null,"This script will check out Pinot Repo ",(0,o.kt)("inlineCode",{parentName:"p"},"[Pinot Git URL]")," on branch ",(0,o.kt)("inlineCode",{parentName:"p"},"[Git Branch]")," and build the docker image for that. ",(0,o.kt)("br",null),"\nThe docker image is tagged as ",(0,o.kt)("inlineCode",{parentName:"p"},"[Docker Tag]"),". ",(0,o.kt)("br",null),"\nDocker Tag: Name and tag your docker image. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"pinot:latest"),". ",(0,o.kt)("br",null),"\nGit Branch: The Pinot branch to build. Default is master. ",(0,o.kt)("br",null),"\nPinot Git URL: The Pinot Git Repo to build, users can set it to their own fork. ",(0,o.kt)("br",null),"\nPlease note that, the URL is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," based, not ",(0,o.kt)("inlineCode",{parentName:"p"},"git://"),". ",(0,o.kt)("br",null),"\nDefault is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot.git"},"Apache Repo: https://github.com/apache/pinot.git"),". ",(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"how-to-push"},"How to push"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push apachepinot/pinot-presto:latest\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Follow the instructions provided by Presto for writing your own configuration files under etc directory."),(0,o.kt)("h3",{id:"volumes"},"Volumes"),(0,o.kt)("p",null,"The image defines two data volumes: one for mounting configuration into the container, and one for data.\nThe configuration volume is located alternatively at ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/presto/etc"),", which contains all the configuration and plugins.\nThe data volume is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/presto/data"),"."),(0,o.kt)("h3",{id:"kubernetes-examples-1"},"Kubernetes Examples"),(0,o.kt)("p",null,"Please refer to presto-coordinator.yaml as k8s deployment example."),(0,o.kt)("h2",{id:"pinot-superset"},"Pinot Superset"),(0,o.kt)("p",null,"Docker image for Superset with Pinot integration.\nThis docker build project is based on Project docker-superset and specialized for Pinot."),(0,o.kt)("h3",{id:"how-to-build-1"},"How to build"),(0,o.kt)("p",null,"Please modify file ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," to change image and ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_version")," accordingly.\nBelow command will build docker image and tag it as ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_version")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make latest\n")),(0,o.kt)("p",null,"You can also build directly with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build")," command by setting arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build \\\n    --build-arg NODE_VERSION=latest \\\n    --build-arg PYTHON_VERSION=3.6 \\\n    --build-arg SUPERSET_VERSION=0.34.1 \\\n    --tag apachepinot/pinot-superset:0.34.1 \\\n    --target build .\n")),(0,o.kt)("p",null,"How to push"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make push\n")),(0,o.kt)("h3",{id:"configuration-1"},"Configuration"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://superset.apache.org/installation.html#configuration"},"instructions")," provided by Apache Superset for writing your own superset_config.py."),(0,o.kt)("p",null,"Place this file in a local directory and mount this directory to /etc/superset inside the container. This location\nis included in the image's ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH"),". Mounting this file to a different location is possible, but it will need to be in the PYTHONPATH."),(0,o.kt)("h3",{id:"volumes-1"},"Volumes"),(0,o.kt)("p",null,"The image defines two data volumes: one for mounting configuration into the container, and one for data (logs, SQLite DBs, &c)."),(0,o.kt)("p",null,"The configuration volume is located alternatively at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/superset")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/superset"),"; either is acceptable. Both of these directories are included in the PYTHONPATH of the image. Mount any configuration (specifically the superset_config.py file) here to have it read by the app on startup."),(0,o.kt)("p",null,"The data volume is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/superset")," and it is where you would mount your SQLite file (if you are using that as your backend), or a volume to collect any logs that are routed there. This location is used as the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SUPERSET_HOME")," environmental variable."),(0,o.kt)("h3",{id:"kubernetes-examples-2"},"Kubernetes Examples"),(0,o.kt)("p",null,"Please refer to superset.yaml as k8s deployment example."))}d.isMDXComponent=!0}}]);