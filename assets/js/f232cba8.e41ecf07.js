"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4637],{7607:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=(a(4996),["components"]),s={id:"tev2-toolbox",title:"TEv2 Terminology Toolbox",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220421},p=void 0,l={unversionedId:"tev2/tev2-toolbox",id:"tev2/tev2-toolbox",title:"TEv2 Terminology Toolbox",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/tev2-toolbox.md",sourceDirName:"tev2",slug:"/tev2/tev2-toolbox",permalink:"/framework/docs/tev2/tev2-toolbox",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-toolbox.md",tags:[],version:"current",frontMatter:{id:"tev2-toolbox",title:"TEv2 Terminology Toolbox",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220421},sidebar:"tev2SideBar"},m={},h=[],f={toc:h};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"This document is meant as a specification of results that the ToIP CTWG aims to realize, that can serve as the basis for the specification of terminology tooling."),(0,o.kt)("p",null,"The intended audience is expected to be familiar with the ",(0,o.kt)("a",{parentName:"p",href:"https://essif-lab.github.io/framework/docs/terms/pattern-terminology#formalized-model"},"mental model on terminology")," and the current way(s) of working of the CTWG."),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"tev2-overview"},"TEv2 overview"),", the toolbox is envisaged to have a variety of tools, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Term Ref(erence) Resolution Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"TRRT"),")"),". This tool takes markdown files that contain so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," (e.g. ","[",(0,o.kt)("inlineCode",{parentName:"p"},"terms community"),"]","(",(0,o.kt)("inlineCode",{parentName:"p"},"terms-community"),"@",(0,o.kt)("inlineCode",{parentName:"p"},"ctwg"),")) and creates a copy for each of these files in which all ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," are converted to regular ",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown links"),", allowing such files to be further processed, e.g. by Github pages, Docusaurus or similar tools. In later versions, the ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT")," may be extended to include options for other kinds of conversions, e.g. to produce LaTex instructions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRGT"),")"),". This tool reads the ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," to find the instructions by which it creates an ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," for each of the versions of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," that are maintained within that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Glossary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"HRGT")),". This tool reads the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", resolves any ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," as necessary, and creates a rendering that results in a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Integrity Checker Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"ICT"),")"),". This tool enables ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to test the integrity of ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAFs"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs"),", and ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts")," for integrity, logging any situation that may cause inconvenience or errors, and providing helptexts that are aimed at guiding ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to resolve any such issues.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRDT"),")"),". This tool generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRD"),") of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that originate from different (versions of) ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies"),", from various ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),". ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRDs")," are meant to be processed by a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRDT"),", which turns it into (a specific format of) ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRD"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"HRDT"),")"),". This tool generates a a Human Readable ",(0,o.kt)("a",{parentName:"p",href:"@"},"Dictionary")," (",(0,o.kt)("a",{parentName:"p",href:"@"},"HRD"),"), that renders the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," from a ",(0,o.kt)("a",{parentName:"p",href:"@"},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRDs")," can be created for different purposes, e.g. to compare different ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies")," (across ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"), or as a reference of what ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," mean in different ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"."))),(0,o.kt)("p",null,"Additionally, a collection of code snippets is envisaged that can be used to automatically generate ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs")," and ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGs")," upon  successful commits to the master-branch of an associated repo/wiki, enabling ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to establish CI/CD pipelines."))}c.isMDXComponent=!0}}]);