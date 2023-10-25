"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8779],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},116:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],s={title:"StarTree Indexes in Apache Pinot Part-1 - Understanding the Impact on Query Performance",author:"Sandeep Dabade",author_title:"Solutions engineer",author_url:"https://pinot.apache.org/",author_image_url:"https://pinot.apache.org/authors/pinot_team.jpg",description:"The blog post explains the star-tree index in Apache Pinot and its benefits compared to traditional materialized views. By implementing a star-tree index, query performance significantly improved, reducing query latency from 1,513 ms to just 4 ms and drastically reducing disk reads by 99.999%.",keywords:["Apache Pinot","star-tree index","traditional materialized views","query performance","significantly improved","reducing query latency","drastically reducing","disk reads"],tags:["Pinot","Data","Analytics","User-Facing Analytics","star-tree index"]},l=void 0,p={permalink:"/blog/2023/05/16/star-tree-indexes-in-apache-pinot-part-1-understanding-the-impact-on-query-performance",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2023-05-16-star-tree-indexes-in-apache-pinot-part-1-understanding-the-impact-on-query-performance.md",source:"@site/blog/2023-05-16-star-tree-indexes-in-apache-pinot-part-1-understanding-the-impact-on-query-performance.md",title:"StarTree Indexes in Apache Pinot Part-1 - Understanding the Impact on Query Performance",description:"The blog post explains the star-tree index in Apache Pinot and its benefits compared to traditional materialized views. By implementing a star-tree index, query performance significantly improved, reducing query latency from 1,513 ms to just 4 ms and drastically reducing disk reads by 99.999%.",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Data",permalink:"/blog/tags/data"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"star-tree index",permalink:"/blog/tags/star-tree-index"}],readingTime:6.25,truncated:!1,prevItem:{title:"Apache Pinot Tutorial for Getting Started - A Step-by-Step Guide",permalink:"/blog/2023/05/18/apache-pinot-tutorial-for-getting-started-a-step-by-step-guide"},nextItem:{title:"Geospatial Indexing in Apache Pinot",permalink:"/blog/2023/05/11/Geospatial-Indexing-in-Apache-Pinot"}},d=[{value:"1. The Dataset:",id:"1-the-dataset",children:[{value:"Schema:",id:"schema",children:[]}]},{value:"2. Query Pattern",id:"2-query-pattern",children:[{value:"Star-Tree Index Config:",id:"star-tree-index-config",children:[]}]},{value:"4. Query Results and Stats",id:"4-query-results-and-stats",children:[{value:"Iteration #1: w/o any Apache Pinot optimizations:",id:"iteration-1-wo-any-apache-pinot-optimizations",children:[]},{value:"Iteration #2: w/ Inverted Index\xa0",id:"iteration-2-w-inverted-index",children:[]},{value:"Iteration #3: w/ Star-Tree Index:\xa0",id:"iteration-3-w-star-tree-index",children:[]},{value:"Comparison:",id:"comparison",children:[]}]},{value:"5. Impact Summary:",id:"5-impact-summary",children:[{value:"Key Benefits of the Star-Tree Index:",id:"key-benefits-of-the-star-tree-index",children:[]}]}],c={toc:d},u="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Star-tree is a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/basics/indexing/star-tree-index"},"specialized index")," in ",(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/resources/what-is-apache-pinot"},"Apache Pinot\u2122"),". This index dynamically builds a tree structure to maintain aggregates for a group of dimensions. With star-tree Index, the query latency becomes a function of just a tree traversal with computational complexity of log(",(0,i.kt)("em",{parentName:"p"},"n"),")."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/blog/a-tale-of-three-real-time-olap-databases#query"},"This comprehensive blog")," explains in depth how the star-tree Index differs from traditional materialized views (MVs). In particular, read the section Star-Tree Index: Pinot\u2019s intelligent materialized view. Particularly this one key passage:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Star-Tree Index: Pinot\u2019s Intelligent Materialized View:"),"\xa0"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The star-tree index provides an intelligent way to build materialized views within Pinot. Traditional MVs work by fully materializing the computation for each source record that matches the specified predicates. Although useful, this can result in non-trivial storage overhead. On the other hand, the star-tree index allows us to partially materialize the computations and provide the ability to tune the space-time tradeoff by providing a configurable threshold between pre-aggregation and data scans.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246698-image5.png",alt:null})),(0,i.kt)("p",null,"In this three-part blog series, we will compare and contrast query performance of a star-tree index with an inverted index, something that most of the OLAP databases end up using for such queries.\xa0\xa0"),(0,i.kt)("p",null,"In this first part, we will showcase how a star-tree index brought down standalone query latency on a sizable dataset of ~633M records from 1,513ms to 4ms! \u2014 nearly 380x faster."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246806-image7.png",alt:null})),(0,i.kt)("h2",{id:"1-the-dataset"},"1","."," The Dataset:"),(0,i.kt)("p",null,"We used New York City Taxi Data for this comparison. Original source: ",(0,i.kt)("a",{parentName:"p",href:"https://www.kaggle.com/c/nyc-taxi-trip-duration"},"here"),". Below are the high level details about this dataset.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246816-image6.png",alt:null})),(0,i.kt)("h3",{id:"schema"},"Schema:"),(0,i.kt)("p",null,"The dataset has 8 dimension fields and 11 metric columns as listed below.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246732-image2.png",alt:null})),(0,i.kt)("h2",{id:"2-query-pattern"},"2","."," Query Pattern"),(0,i.kt)("p",null,"The query pattern involved slicing and dicing the data (GROUPING) BY various dimensions (Date, Month and Year), aggregating different metrics (total trips, distance and passengers count) and FILTERING BY a time range that could go as wide as 1 year."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246872-image10.png",alt:null})),(0,i.kt)("p",null,"Note: A key thing to note is that a single star-tree index covers a wide range of OLAP queries that comprise the dimensions, metrics and aggregate functions specified in it.\xa0"),(0,i.kt)("h3",{id:"star-tree-index-config"},"Star-Tree Index Config:"),(0,i.kt)("p",null,"To support the various query patterns specified above, we defined the following star-tree index."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"starTreeIndexConfigs": [\n        {\n          "dimensionsSplitOrder": [\n            "dropoff_date_str",\n            "dropoff_month",\n            "dropoff_year"\n          ],\n          "skipStarNodeCreationForDimensions": [],\n          "functionColumnPairs": [\n            "COUNT__*",\n            "SUM__passenger_count",\n            "SUM__total_amount",\n            "SUM__trip_distance",\n            "AVG__passenger_count",\n            "AVG__total_amount",\n            "AVG__trip_distance",\n            "MIN__passenger_count",\n            "MIN__total_amount",\n            "MIN__trip_distance",\n            "MAX__passenger_count",\n            "MAX__total_amount",\n            "MAX__trip_distance"\n          ],\n          "maxLeafRecords": 10000\n        }\n      ]\n')),(0,i.kt)("p",null,"This one star-tree index can get us insights to questions such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How many trips were completed in a given day, month or year?\xa0"),(0,i.kt)("li",{parentName:"ul"},"How many passengers traveled in a given day, month or year?\xa0"),(0,i.kt)("li",{parentName:"ul"},"What is the daily / monthly / annual average trip revenue?\xa0"),(0,i.kt)("li",{parentName:"ul"},"What is the daily / monthly / annual average trip revenue, trip duration and distance traveled?\xa0"),(0,i.kt)("li",{parentName:"ul"},"What is the daily / monthly / annual breakdown of total number of trips, total distance traveled and total revenue generated in 2015?"),(0,i.kt)("li",{parentName:"ul"},"And many more\u2026")),(0,i.kt)("p",null,"We will use one such variant query for this illustration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the total number of trips, total distance traveled and total revenue generated by day in 2015?")),(0,i.kt)("p",null,"We used a very small infrastructure footprint for this comparison test.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1687549350-screen-shot-2023-06-22-at-1-32-51-pm.png",alt:null})),(0,i.kt)("h2",{id:"4-query-results-and-stats"},"4","."," Query Results and Stats"),(0,i.kt)("h3",{id:"iteration-1-wo-any-apache-pinot-optimizations"},"Iteration #1: w/o any Apache Pinot optimizations:"),(0,i.kt)("p",null,"First, we ran the query without any optimizations offered in Apache Pinot.\xa0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'-- Iteration #1: w/o optimizations > 120s\n\nSELECT \n      toDateTime(tpep_dropoff_datetime/1000, \'yyyy-MM-dd\') "Date",\n      count(*) "Total # of Trips", \n      sum(trip_distance) "Total distance traveled", \n      sum(passenger_count) "Total # of Passengers", \n      sum(total_amount) "Total Revenue"\nFROM \n      nyc_taxi_demo\nWHERE\n    "Date" BETWEEN \'2015-01-01\' AND \'2015-12-31\' \nGROUP BY\n    "Date"\nORDER BY\n    "Date" ASC\nlimit 1000\n')),(0,i.kt)("p",null,"This was a wide time range query (365 days). It required scanning across ~146M out of ~633M documents. In addition, it involved performing an expensive ToDateTime transformation on the tpep","_","dropoff","_","datetime entry in each of those ~146M documents during query time.\xa0"),(0,i.kt)("p",null,"Result: The query took 131,425 milliseconds (~131.4s; ~2m 11s) to complete.\xa0"),(0,i.kt)("h3",{id:"iteration-2-w-inverted-index"},"Iteration #2: w/ Inverted Index\xa0"),(0,i.kt)("p",null,"In this iteration, we used a derived column - dropoff","_","date","_","str - which performed the ToDateTime transformation for every record during ingestion time. Since the cardinality of this derived column was much lower (granularity was at Day level instead of milliseconds), this enabled us to use an inverted index on this column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'-- Iteration #2: w/ Ingestion Time Transformation\nSELECT \n      dropoff_date_str "Date",\n      count(*) "Total # of Trips", \n      sum(trip_distance) "Total distance traveled", \n      sum(passenger_count) "Total # of Passengers", \n      sum(total_amount) "Total Revenue"\nFROM \n      nyc_taxi_demo\nWHERE\n    "Date" BETWEEN \'2015-01-01\' AND \'2015-12-31\' \nGROUP BY\n    "Date"\nORDER BY\n    "Date" ASC\nlimit 1000\noption(useStarTree=false, timeoutMs=20000)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246716-image1.png",alt:null})),(0,i.kt)("p",null,"Result: The query completed in 1,513 milliseconds. (~1.5s); from ~131s to ~1.5s was a BIG improvement. However, results still took more than a second \u2014 which is a relatively long time for an OLAP database, especially if it is faced with multiple concurrent queries."),(0,i.kt)("h3",{id:"iteration-3-w-star-tree-index"},"Iteration #3: w/ Star-Tree Index:\xa0"),(0,i.kt)("p",null,"In this iteration, we ran the same query with star-tree index enabled.\xa0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'-- Iteration #3: w/ Ingestion Time Transformation + StarTree Index\nSELECT \n      dropoff_date_str "Date",\n      count(*) "Total # of Trips", \n      sum(trip_distance) "Total distance traveled", \n      sum(passenger_count) "Total # of Passengers", \n      sum(total_amount) "Total Revenue"\nFROM \n      nyc_taxi_demo\nWHERE\n    "Date" BETWEEN \'2015-01-01\' AND \'2015-12-31\' \nGROUP BY\n    "Date"\nORDER BY\n    "Date" ASC\nlimit 1000\noption(useStarTree=true)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246852-image9.png",alt:null})),(0,i.kt)("p",null,"Result: The query completed in 4 milliseconds! Notice in particular that the numDocsScanned came down from ~146M to 409!\xa0"),(0,i.kt)("h3",{id:"comparison"},"Comparison:"),(0,i.kt)("p",null,"Let\u2019s take a closer look at the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/users/api/querying-pinot-using-standard-sql/response-format"},"query response stats")," across all three iterations to understand the \u201chow\u201d part of this magic of indexing in Apache Pinot.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246748-image3.png",alt:null})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The dataset has 633,694,594 records (documents) spread across 130 segments.\xa0")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Query Stats:\xa0"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"w/o any index optimizations (Iteration #1), the query scanned ALL 633,694,594 records (check numEntriesScannedInFilter) during processing. Also, numEntriesScannedPostFilter was 584,147,312 (numDocsScanned = ~146M). All 130 segments were processed which was very inefficient.\xa0"),(0,i.kt)("li",{parentName:"ol"},"w/ Inverted Index (Iteration #2), numEntriesScannedInFilter was 0; numEntriesScannedPostFilter was 584,147,312 (numDocsScanned = ~146M) which meant that the query selectivity was low (the query had to scan a lot of records during post filter phase; about 92% of overall records). This is an indication of when a star-tree index could help."),(0,i.kt)("li",{parentName:"ol"},"w/ Star-tree Index (Iteration #3), numEntriesScannedInFilter was 0; numEntriesScannedPostFilter was only 2,045 (numDocsScanned = 409). The star-tree index helped improve query performance tremendously by providing high query selectivity.")))),(0,i.kt)("h2",{id:"5-impact-summary"},"5","."," Impact Summary:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1684246766-image4.png",alt:null})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"356,968x improvement (or 99.999% drop) in num docs scanned from ~146M to 409."),(0,i.kt)("li",{parentName:"ol"},"378.5x improvement (~99.736% drop) in query latency from 1,513 ms to 4 ms.")),(0,i.kt)("h3",{id:"key-benefits-of-the-star-tree-index"},"Key Benefits of the Star-Tree Index:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User controllable: Tune space vs. time overhead")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Flexible: create any number of indexes. The right index is chosen based on the query structure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transparent: Unlike traditional MVs, users don\u2019t need to know about the existence of a star-tree index. The same query will be accelerated with a star-tree index in place.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic: Very easy to generate a new index at any point of time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Disk IO is the most expensive operation in query processing. Latency is linear to the number of disk reads a query has to perform. Star-Tree Index brings the number of disk reads down exponentially.\xa0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In this example, star-tree Index reduced the disk reads by 99.999% from ~584 Million entries (~146 Million documents or records) in case of an inverted index to 2,045 entries (409 documents or records). Query latency came down from 1,513 ms to 4 ms!\xa0")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/blog/star-tree-indexes-in-apache-pinot-part-2-understanding-the-impact-during-high-concurrency"},"In part 2 of this series,")," we will perform throughput tests to measure the impact of star-tree index under high load."))}m.isMDXComponent=!0}}]);