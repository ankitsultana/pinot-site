"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9733],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3618:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(4137)),o=["components"],s={title:"Star-Tree Index in Apache Pinot - Part 3 - Understanding the Impact in Real Customer Scenarios",author:"Sandeep Dabade, Kulbir Nijjer",author_title:"Solutions Engineers",author_url:"https://pinot.apache.org/",author_image_url:"https://pinot.apache.org/authors/pinot_team.jpg",description:"The blog post discusses how implementing a star-tree index significantly improved query performance for an AdTech platform by reducing latency. This index has also been successful in cybersecurity threat detection and multiplayer game leaderboard tracking, resulting in improved query performance and cost savings. Real production use cases showed a 95% to 99% improvement in query performance using StarTree Cloud for real-time analytics.",keywords:["Apache Pinot","startree index","AdTech platform","reducing latency","cybersecurity threat detection","multiplayer game leaderboard tracking","improved query performance","cost savings","StarTree Cloud","realtime analytics","95% to 99% improvement"],tags:["Pinot","Data","Analytics","User-Facing Analytics","blog post","implementing","startree index","query performance","AdTech platform","reducing latency","cybersecurity threat detection","multiplayer game leaderboard tracking","improved query performance","cost savings","real production use cases","StarTree Cloud","realtime analytics","95% to 99% improvement"]},l=void 0,c={permalink:"/blog/2023/07/12/star-tree-index-in-apache-pinot-part-3-understanding-the-impact-in-real-customer",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2023-07-12-star-tree-index-in-apache-pinot-part-3-understanding-the-impact-in-real-customer.md",source:"@site/blog/2023-07-12-star-tree-index-in-apache-pinot-part-3-understanding-the-impact-in-real-customer.md",title:"Star-Tree Index in Apache Pinot - Part 3 - Understanding the Impact in Real Customer Scenarios",description:"The blog post discusses how implementing a star-tree index significantly improved query performance for an AdTech platform by reducing latency. This index has also been successful in cybersecurity threat detection and multiplayer game leaderboard tracking, resulting in improved query performance and cost savings. Real production use cases showed a 95% to 99% improvement in query performance using StarTree Cloud for real-time analytics.",date:"2023-07-12T00:00:00.000Z",formattedDate:"July 12, 2023",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Data",permalink:"/blog/tags/data"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"blog post",permalink:"/blog/tags/blog-post"},{label:"implementing",permalink:"/blog/tags/implementing"},{label:"startree index",permalink:"/blog/tags/startree-index"},{label:"query performance",permalink:"/blog/tags/query-performance"},{label:"AdTech platform",permalink:"/blog/tags/ad-tech-platform"},{label:"reducing latency",permalink:"/blog/tags/reducing-latency"},{label:"cybersecurity threat detection",permalink:"/blog/tags/cybersecurity-threat-detection"},{label:"multiplayer game leaderboard tracking",permalink:"/blog/tags/multiplayer-game-leaderboard-tracking"},{label:"improved query performance",permalink:"/blog/tags/improved-query-performance"},{label:"cost savings",permalink:"/blog/tags/cost-savings"},{label:"real production use cases",permalink:"/blog/tags/real-production-use-cases"},{label:"StarTree Cloud",permalink:"/blog/tags/star-tree-cloud"},{label:"realtime analytics",permalink:"/blog/tags/realtime-analytics"},{label:"95% to 99% improvement",permalink:"/blog/tags/95-to-99-improvement"}],readingTime:7.66,truncated:!1,prevItem:{title:"Segment Compaction for Upsert Enabled Tables in Apache Pinot",permalink:"/blog/2023/08/04/segment-compaction-for-upsert-enabled-tables-in-apache-pinot-3f30657aa077"},nextItem:{title:"Real-Time Mastodon Usage with Apache Kafka, Apache Pinot, and Streamlit",permalink:"/blog/2023/06/01/real-time-mastodon-usage-with-apache-kafka-apache-pinot-and-streamlit"}},p=[{value:"AdTech Use Case",id:"adtech-use-case",children:[{value:"Why was the existing system not working?",id:"why-was-the-existing-system-not-working",children:[]},{value:"The Problem and Challenges?",id:"the-problem-and-challenges",children:[]},{value:"Data Size and Infra Footprint for the Pilot:\xa0",id:"data-size-and-infra-footprint-for-the-pilot",children:[]},{value:"Impact Summary:",id:"impact-summary",children:[]}]},{value:"CyberSecurity Use Case:",id:"cybersecurity-use-case",children:[{value:"Why was the existing system not working?",id:"why-was-the-existing-system-not-working-1",children:[]},{value:"The Problem and Challenges?",id:"the-problem-and-challenges-1",children:[]},{value:"Data Size and Infra Footprint for the Pilot:\xa0",id:"data-size-and-infra-footprint-for-the-pilot-1",children:[]},{value:"Impact Summary:",id:"impact-summary-1",children:[]}]},{value:"Multiplayer Game Leaderboard Use Case",id:"multiplayer-game-leaderboard-use-case",children:[{value:"The Problem and Challenges?",id:"the-problem-and-challenges-2",children:[]},{value:"Data Size and Infra Footprint for the Pilot:\xa0",id:"data-size-and-infra-footprint-for-the-pilot-2",children:[]},{value:"Impact Summary:",id:"impact-summary-2",children:[]}]},{value:"Quick Recap: Star-Tree Index Performance Improvements",id:"quick-recap-star-tree-index-performance-improvements",children:[]},{value:"Intrigued by What You\u2019ve Read?",id:"intrigued-by-what-youve-read",children:[]}],d={toc:p},u="wrapper";function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/blog/star-tree-indexes-in-apache-pinot-part-1-understanding-the-impact-on-query-performance"},"part 1 of this blog series"),", we looked at how a star-tree index brought down standalone query latency on a sizable dataset of ~633M records from 1,513ms to 4ms! \u2014 nearly 380x faster.\xa0"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/blog/star-tree-indexes-in-apache-pinot-part-2-understanding-the-impact-during-high-concurrency"},"part 2 of this blog series"),", we imitated a real production scenario by firing hundreds of concurrent queries using JMeter and showcased how using a star-tree index helped achieve a >95% drop in p90th / p95th / p99th latencies and 126x increase in Throughput."),(0,i.kt)("p",null,"In this part, we will cover some real customer stories that have seen 95% to 99% improvement in query performance using Star-Tree Index."),(0,i.kt)("h2",{id:"adtech-use-case"},"AdTech Use Case"),(0,i.kt)("p",null,"This was for a leading AdTech platform and a somewhat typical use case; users of the platform (advertisers, publishers, and influencers) wanted to see fresh metrics on how their activities (such as online content, ad, and email campaigns) were performing in real-time so they could tweak things as needed. The application team wanted to provide a rich analytical interface to these users so that not only can they see the current performance but also do custom slicing and dicing of data over a period of time. For example, compare their current campaign performance to one they ran two weeks back, do cohort analysis, and so on."),(0,i.kt)("h3",{id:"why-was-the-existing-system-not-working"},"Why was the existing system not working?"),(0,i.kt)("p",null,"Their existing tech stack was a mix of OSS and custom-built in-house code, which was both operationally difficult to manage and costly to maintain. Yet more importantly, it wasn\u2019t able to meet the basic throughput and latency requirements required by the platform to sustain user growth as well as provide richer analytic capabilities in the product."),(0,i.kt)("h3",{id:"the-problem-and-challenges"},"The Problem and Challenges?"),(0,i.kt)("p",null,"When the StarTree Sales Engineering team was engaged, the requirements were very clear:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Throughput: Support 50+ QPS during POC and 200+ for production)"),(0,i.kt)("li",{parentName:"ul"},"Latency: P95th latency of 2s, including query that needed aggregation of ~ 2 billion rows"),(0,i.kt)("li",{parentName:"ul"},"Scalability: Ability to scale efficiently with future growth in QPS in a non-linear manner")),(0,i.kt)("p",null,"The biggest challenge was the size of data \u2014 20+ TB and growing \u2014 and on top of that, a complex aggregation query driving the summary view for users so they can drill further in to get more details.\xa0"),(0,i.kt)("p",null,"This particular query needed to aggregate close to 2 Billion records at read time and then would be fired for every active user interacting with the platform (so high concurrent QPS). In this case, despite applying all relevant indexes available in their existing system, out-of-the-box query performance was still in the 6-8 seconds range, which is expected given that bulk of the work for the query is happening in the aggregation phase and not during the filtering phase (indexing helps with this)."),(0,i.kt)("p",null,"In other OLAP systems they explored, the only option available to handle this use case was doing ingestion time rollups. In other words, changing the data to higher granularity. However, this obviously means losing access to raw data and also potentially re-bootstrapping if new use cases come down the road that need raw data access."),(0,i.kt)("p",null,"This is exactly the type of scenario that the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/basics/indexing/star-tree-index"},"Star-Tree Index"),", unique to Apache Pinot, is designed to address - handle large aggregation queries at scale that need sub-second performance. The best part is you can apply it anytime without any need to reprocess the data or plan any system downtime. (Segment reload to apply table config changes run as a background task in Apache Pinot.) In this specific case, the same query latencies with the star-tree index applied went down to 15 ms. This implicitly meant that with the same infrastructure footprint, StarTree was able to support ~70 QPS (Queries Per Second) vs < 1 QPS for this most complex query; while still keeping the raw data intact."),(0,i.kt)("h3",{id:"data-size-and-infra-footprint-for-the-pilot"},"Data Size and Infra Footprint for the Pilot:\xa0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total # of records: ~2 Trillion"),(0,i.kt)("li",{parentName:"ul"},"Data Size: ~20 TB"),(0,i.kt)("li",{parentName:"ul"},"Capacity: 72 vCPUs across 9 Pinot servers (8 vCPU, 64GB per node).\xa0")),(0,i.kt)("h3",{id:"impact-summary"},"Impact Summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"99.76% reduction in latency vs. no Star-Tree Index (6.3 seconds to 15 ms)"),(0,i.kt)("li",{parentName:"ul"},"99.99999% reduction in amount of data scanned/aggregated per query (>1.8B docs to <2,400)")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1689174701-image1.png",alt:"Visualization of the impact of start-tree index for an AdTech use case with Apache Pinot"})),(0,i.kt)("h2",{id:"cybersecurity-use-case"},"CyberSecurity Use Case:"),(0,i.kt)("p",null,"A cybersecurity company that provides their customers with a real-time threat detection platform with AI, allowing them to analyze network flow logs in real-time with a sophisticated reporting/analytical UI. The initial landing page inside the customer portal is a summary view of everything the platform was monitoring in the user's environment and then provides the capability to drill down into specifics of each. For example, filter requests by a specific application or IP Address."),(0,i.kt)("h3",{id:"why-was-the-existing-system-not-working-1"},"Why was the existing system not working?"),(0,i.kt)("p",null,"Their existing tech stack was a mix of Athena/Presto, which couldn\u2019t meet the throughput and latency requirements with growing data volume across their customers. Additionally, operational overhead around managing some of these systems in-house led to increased cost."),(0,i.kt)("h3",{id:"the-problem-and-challenges-1"},"The Problem and Challenges?"),(0,i.kt)("p",null,"Some of the key requirements that StarTree Cloud cluster had to meet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Throughput: Up to 200 QPS (200 projected by end of year)"),(0,i.kt)("li",{parentName:"ul"},"Latency: <1 second P99"),(0,i.kt)("li",{parentName:"ul"},"High ingestion rate: 300k events/sec"),(0,i.kt)("li",{parentName:"ul"},"ROI: Provide better cost efficiencies")),(0,i.kt)("p",null,"Similar to Use case #1, the customer wanted to retain data at the lowest granularity (so no ingestion roll-ups), and given the time column granularity similar challenge with running the complex aggregation query to power off the summary view. Additionally, the requirement to get double-digit throughput(QPS) for the POC with the most efficient compute footprint made it quite challenging."),(0,i.kt)("p",null,"Given the overhead while doing complex aggregations, efficient filtering (indexes) wasn\u2019t enough - in this case, with 3 ","*"," 4-core/32GB nodes query took more than 15 seconds. We immediately switched the table config to add star-tree index to the table config and do a segment reload, and the results were phenomenal \u2014 query latency was reduced to 10ms.\xa0"),(0,i.kt)("h3",{id:"data-size-and-infra-footprint-for-the-pilot-1"},"Data Size and Infra Footprint for the Pilot:\xa0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total # of records: ~8 Billion"),(0,i.kt)("li",{parentName:"ul"},"Data Size: 500+ GB"),(0,i.kt)("li",{parentName:"ul"},"Capacity: 12 vCPUs across 3 Pinot servers (4-core/32GB)\xa0")),(0,i.kt)("h3",{id:"impact-summary-1"},"Impact Summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"99.94% reduction in query latency (achieving 100 QPS for the same query with no extra hardware)"),(0,i.kt)("li",{parentName:"ul"},"99.9998% reduction in data scanned/aggregated per query"),(0,i.kt)("li",{parentName:"ul"},"Happy Customer \ud83d\ude03")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1689175033-image4.png",alt:"Visualization of the impact of star-tree index for a Cybersecurity use case with Apache Pinot"})),(0,i.kt)("h2",{id:"multiplayer-game-leaderboard-use-case"},"Multiplayer Game Leaderboard Use Case"),(0,i.kt)("p",null,"A global leader in the interactive entertainment field has an A/B Testing / Experimentation use case that tracks players\u2019 activities to measure the player engagement on the new features being rolled out."),(0,i.kt)("h3",{id:"the-problem-and-challenges-2"},"The Problem and Challenges?"),(0,i.kt)("p",null,"Some of the key requirements that StarTree Cloud cluster had to meet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Throughput: = 200 QPS\xa0"),(0,i.kt)("li",{parentName:"ul"},"Latencies: <1 second P99"),(0,i.kt)("li",{parentName:"ul"},"Ingestion rate: 50K events/sec")),(0,i.kt)("p",null,"Given the overhead while doing complex aggregations, efficient filtering (indexes) wasn\u2019t enough - in this case, with 1 ","*"," 4-core/32GB nodes query took 163 milliseconds. After switching to a star-tree index, the query latency was reduced to 7ms (a reduction of 95.7%).\xa0"),(0,i.kt)("h3",{id:"data-size-and-infra-footprint-for-the-pilot-2"},"Data Size and Infra Footprint for the Pilot:\xa0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total # of records: ~34 Million"),(0,i.kt)("li",{parentName:"ul"},"Data Size: 500+ GB"),(0,i.kt)("li",{parentName:"ul"},"Capacity: 4 vCPUs - 1 Pinot server (4-cores / 32 GB)\xa0")),(0,i.kt)("h3",{id:"impact-summary-2"},"Impact Summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"95.70% improvement in query performance as a result of 99.9962% reduction in number of documents and entries scanned. \xa0")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1689175176-image2.png",alt:"Visualization of the impact of star-tree index for a Gaming use case with Apache Pinot"})),(0,i.kt)("h2",{id:"quick-recap-star-tree-index-performance-improvements"},"Quick Recap: Star-Tree Index Performance Improvements"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1689175271-image3.png",alt:"Recap Table of the Impact that star-tree index had on three real-world customers using Apache Pinot\u2122"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"99.99% reduction in data scanned/aggregated per query"),(0,i.kt)("li",{parentName:"ul"},"95 to 99% improvement in query performance")),(0,i.kt)("p",null,"Disk IO is the most expensive operation in query processing. The star-tree index reduces Disk IO significantly. Instead of scanning raw documents from the disk and computing aggregates on the fly, star-tree index scans pre-aggregated documents for the combination of dimensions specified in the query from the disk.\xa0"),(0,i.kt)("p",null,"In part 1 of the series, we saw that the star-tree index reduced the disk reads by 99.999% from 584 Million entries (in case of an inverted index) to 2,045. Query latency came down 99.67% from 1,513 ms to 4 ms! This, in itself, was a HUGE benefit.\xa0"),(0,i.kt)("p",null,"In addition to the drastic improvement in query latency, the memory and CPU usage decreased significantly, freeing up resources for taking up more concurrent workloads. The cumulative effect was the 126 x increase in QPS on this small 4 vCPU Pinot Server, as we saw in part 2 blog of this series.\xa0"),(0,i.kt)("p",null,"And finally, in this part 3 of the blog series, we covered three real production use cases that have seen 95% to 99% improvement in query performance using Star-Tree Index."),(0,i.kt)("h2",{id:"intrigued-by-what-youve-read"},"Intrigued by What You\u2019ve Read?"),(0,i.kt)("p",null,"The next step is to load your data into an open-source ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/basics/getting-started"},"Apache Pinot")," cluster or, if you prefer, a fully-managed database-as-a-service (DBaaS). Sign up today for a ",(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/saas-signup"},"StarTree Cloud account"),", free for 30 days. If you have more questions, sign up for the ",(0,i.kt)("a",{parentName:"p",href:"https://communityinviter.com/apps/startreedata/startree-community"},"StarTree Community Slack"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/saas-signup"},"GET STARTED ON STARTREE CLOUD")))}m.isMDXComponent=!0}}]);