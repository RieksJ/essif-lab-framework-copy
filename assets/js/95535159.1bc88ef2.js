"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5544],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(3117),r=a(7294),i=a(6010),o=a(2389),l=a(7392),s=a(7094),d=a(2466),p="tabList__CuJ",m="tabItem_LNqP";function h(e){var t,a,o=e.lazy,h=e.block,u=e.defaultValue,f=e.values,c=e.groupId,k=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,x=(0,r.useState)(v),T=x[0],G=x[1],M=[],R=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=w[c];null!=E&&E!==T&&g.some((function(e){return e.value===E}))&&G(E)}var _=function(e){var t=e.currentTarget,a=M.indexOf(t),n=g[a].value;n!==T&&(R(t),G(n),null!=c&&C(c,String(n)))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=M.indexOf(e.currentTarget)+1;a=null!=(n=M[r])?n:M[0];break;case"ArrowLeft":var i,o=M.indexOf(e.currentTarget)-1;a=null!=(i=M[o])?i:M[M.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":h},k)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return M.push(e)},onKeyDown:A,onFocus:_,onClick:_},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(N.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,o.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},265:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return h},assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(5488),a(5162),["components"]),l={id:"mrgt",title:"Machine Readable Glossary Generation Tool",sidebar_label:"MR Glossary Generation",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220421},s=void 0,d={unversionedId:"tev2/spec-tools/mrgt",id:"tev2/spec-tools/mrgt",title:"Machine Readable Glossary Generation Tool",description:"text to mark",source:"@site/docs/tev2/spec-tools/21-mrgt.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/mrgt",permalink:"/framework/docs/tev2/spec-tools/mrgt",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-tools/21-mrgt.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659451841,formattedLastUpdatedAt:"Aug 2, 2022",sidebarPosition:21,frontMatter:{id:"mrgt",title:"Machine Readable Glossary Generation Tool",sidebar_label:"MR Glossary Generation",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20220421},sidebar:"tev2SideBar"},p={},m=[{value:"Generating an MRG",id:"generating-an-mrg",level:2},{value:"Creating an MRG Entry",id:"creating-an-mrg-entry",level:3},{value:"Exceptions, Warnings, and Logging",id:"exceptions-warnings-and-logging",level:2}],h=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},u={toc:m,Mark:h};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,i.kt)("a",{parentName:"strong",href:"@"},"MRGT"),")")," generates a Machine Readable Inventory (that we call a Machine Readable Glossary or ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),") for (a specific version of) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," of a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," into a specific, well-defined ","[format]","/tev2/spec-files/mrg. This Inventory is not a ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," because it contains so-called ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," for every ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," in that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and such ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," may represent ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," of various kinds, such as ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts"),", but also e.g., ",(0,i.kt)("a",{parentName:"p",href:"pattern@"},"mental models")," and ",(0,i.kt)("a",{parentName:"p",href:"@"},"use cases"),". We choose to maintain the ",(0,i.kt)("a",{parentName:"p",href:"@"},"term"),' "Machine Readable Glossary" (',(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),"), because most of us would view it - initially, at least - as a list of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," and their ",(0,i.kt)("a",{parentName:"p",href:"@"},"definitions"),"."),(0,i.kt)("p",null,"The (newly generated) ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," is meant to be processed by the other tools in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"toolbox"),", regardless of whether such tools are called from within the context of another ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". As it contains every ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," that is used in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and includes the relevant meta-data, it serves as the single, authoritative source of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("h2",{id:"generating-an-mrg"},"Generating an MRG"),(0,i.kt)("p",null,"As input, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," is provided a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),", is pointed to the particular entry in its ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/saf#terminology"},(0,i.kt)("inlineCode",{parentName:"a"},"versions")," section")," that specifies (a specific version of) a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". This section not only includes meta-data for that ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),", but also a set of 'term selection criteria' instructions, that are used to ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/manuals/terminology-construction"},"construct")," the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," is then created as follows (starting with an empty file):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," ",(0,i.kt)("inlineCode",{parentName:"li"},"terminology")," section is created, by copying relevant fields from the appropriate ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," element in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),"."),(0,i.kt)("li",{parentName:"ol"},"Then the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/manuals/terminology-construction"},"terminology construction")," takes place, which can be thought of as constructing a set of tuples ",(0,i.kt)("inlineCode",{parentName:"li"},"{ [termid, term, grouptags] }"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"termid")," ",(0,i.kt)("a",{parentName:"li",href:"@"},"identifies")," the meaning of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"term")," is the (humanly recognizable) ",(0,i.kt)("a",{parentName:"li",href:"term@"},"word or phrase")," that represents this meaning, and ",(0,i.kt)("inlineCode",{parentName:"li"},"grouptags")," is a set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags")," that the tuple is associated with."),(0,i.kt)("li",{parentName:"ol"},"For every tuple in this set, an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," is created, and added to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," under construction. Note that the structure of each such ",(0,i.kt)("a",{parentName:"li",href:"mrg-entry@"},"entry")," depends on the type of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," represents."),(0,i.kt)("li",{parentName:"ol"},"the result is put at the location as specified by the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),", and the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")," itself is updated as necessary.")),(0,i.kt)("h3",{id:"creating-an-mrg-entry"},"Creating an MRG Entry"),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," is either a literal copy of an (existing) ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," that is found in an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," that lives in another ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", or it is constructed from a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),". ",(0,i.kt)("a",{parentName:"p",href:"@"},"Curated texts")," live in files in (one of the subdirectories of) the directory specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"curatedir")," field of hte ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),"."),(0,i.kt)("p",null,"Constructing an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," from a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," is done by first creating the fields that are common for all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries"),", and then adding fields that are specific for the type of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," describes."),(0,i.kt)("p",null,"The common fields get their values according to the following table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value(s) that are assigned to the fields"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")," field in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"termid")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"formphrases")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"formphrases")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"status")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),". If that value is not present, and the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF")," has a non-empty ",(0,i.kt)("inlineCode",{parentName:"td"},"statuses")," field in its ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section, then the value of the first element of that ",(0,i.kt)("inlineCode",{parentName:"td"},"statuses")," field is used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"created")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"created")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"updated")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updated")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"commit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"commit")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contributors")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"contributors")," field of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"locator")),(0,i.kt)("td",{parentName:"tr",align:"left"},"path, relative to ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"curatedir"),"/, of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navurl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(h,{mdxType:"Mark"},"TBD"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"headingids")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated file")," is scanned for ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#headings"},"markdown headings")," (using the syntax with ",(0,i.kt)("inlineCode",{parentName:"td"},"#"),"-signs rather than the ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#alternate-syntax"},"alternate syntax"),") and/or ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ids"),", and each heading or heading-id that is found is added to the list of headingids in this field.")))),(0,i.kt)("h2",{id:"exceptions-warnings-and-logging"},"Exceptions, Warnings, and Logging"),(0,i.kt)("p",null,"The general principle is that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," logs conditions that prevent it from properly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"obtaining the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedir")," from a ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetag"),";"),(0,i.kt)("li",{parentName:"ul"},"parsing a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," (e.g. because it is not in the expected format);"),(0,i.kt)("li",{parentName:"ul"},"resolving ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"s, ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope tags"),", ",(0,i.kt)("a",{parentName:"li",href:"@"},"group tags"),", or ",(0,i.kt)("a",{parentName:"li",href:"@"},"version tags"),";"),(0,i.kt)("li",{parentName:"ul"},"writing the output (e.g. because it has no write-permission for the designated location);"),(0,i.kt)("li",{parentName:"ul"},"etc.;")),(0,i.kt)("p",null,"Also, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," provides suggestions that help tool-operators (",(0,i.kt)("a",{parentName:"p",href:"@"},"curators"),") to not only identify, but also fix any problems."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."))}f.isMDXComponent=!0}}]);