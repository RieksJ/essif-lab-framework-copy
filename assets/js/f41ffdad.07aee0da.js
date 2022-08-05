"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[814],{7766:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),s=(a(4996),["components"]),o={id:"ctext-spec",title:"Curated Texts",sidebar_label:"Curated Texts",hide_table_of_contents:!0,scopetag:"tev2",date:20220713},d=void 0,l={unversionedId:"tev2/spec-ctexts/ctext-spec",id:"tev2/spec-ctexts/ctext-spec",title:"Curated Texts",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/spec-ctexts/00-ctext-spec.md",sourceDirName:"tev2/spec-ctexts",slug:"/tev2/spec-ctexts/ctext-spec",permalink:"/framework/docs/tev2/spec-ctexts/ctext-spec",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-ctexts/00-ctext-spec.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659697027,formattedLastUpdatedAt:"Aug 5, 2022",sidebarPosition:0,frontMatter:{id:"ctext-spec",title:"Curated Texts",sidebar_label:"Curated Texts",hide_table_of_contents:!0,scopetag:"tev2",date:20220713},sidebar:"tev2SideBar",previous:{title:"Authors Manual",permalink:"/framework/docs/tev2/manuals/author"},next:{title:"Concepts",permalink:"/framework/docs/tev2/spec-ctexts/ctext-concept"}},p={},m=[{value:"Context",id:"context",level:2},{value:"Structure",id:"structure",level:2},{value:"Generic Header Fields",id:"generic-header-fields",level:2},{value:"Type-specific Header Fields",id:"type-specific-header-fields",level:2}],h={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"curated text"))," is a text that documents a ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," within a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". This page specifies the syntax that ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," must ensure that all ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," comply with, and that ",(0,i.kt)("a",{parentName:"p",href:"@"},"authors")," are expected to follow."),(0,i.kt)("p",null,"The documentation of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," includes, e.g.:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term(s)")," that are used within its ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope")," to represent that ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact"),";"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"@"},"definition")," by which ",(0,i.kt)("a",{parentName:"li",href:"@"},"readers")," should be able to distinguish between instances and non-instances of that ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact")),(0,i.kt)("li",{parentName:"ul"},"administrative attributes, e.g., various ",(0,i.kt)("a",{parentName:"li",href:"@"},"tags"),", dates, status, etc."),(0,i.kt)("li",{parentName:"ul"},"processing attributes, e.g., formphrases, etc.,"),(0,i.kt)("li",{parentName:"ul"},"rendering attributes, e.g., texts to use for generating ",(0,i.kt)("a",{parentName:"li",href:"@"},"glossaries"),", document titles, pop-ups, etc.")),(0,i.kt)("p",null,"Within the constraints for ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," as specified in this document, there is still lots of freedom regarding what ",(0,i.kt)("a",{parentName:"p",href:"@"},"authors")," (of such ",(0,i.kt)("a",{parentName:"p",href:"curated-text@"},"texts"),") could do, or not do. The ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," are expected to provide guidance to these ",(0,i.kt)("a",{parentName:"p",href:"@"},"authors")," about additional constraints they require them to follow."),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," resides in a file which we call a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"curated file")),". All ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated files")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," are expected to live in (a subdirectory of) its ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory"),", as specified in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," administration file ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),". ",(0,i.kt)("a",{parentName:"p",href:"@"},"Curated files")," are expected to be processable using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"terminology tools"),". However, ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," may decide that they are also to be processable by other, third party tools, e.g., for the purpose of making rendered versions of such files available to some public. Examples of such tools include ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docusaurus v2"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages"),"."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," consists of two parts: a (",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2.2/"},"YAML"),") ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"header")),", which is also called the 'frontmatter', and a (",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown"),") ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"body")),". The ",(0,i.kt)("a",{parentName:"p",href:"@"},"header")," is a set of key-value pairs that contain meta data about the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," and/or data that could also have been part of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"body"),", but is so small that it doesn't warrant to have a dedicated section for it."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: curated-text\nscope: tev2\ntermtype: concept\ntermid: curated-text\nformphrases: curated-text{ss}, ctext{ss}\ngrouptags: [ terminology, contributing, curation ]\nstatus: proposed\ncreated: 2022-06-06\nglossaryText: a text that documents a [concept](@) or other [knowledge artifact](@).\nhoverText: a text that documents a Concept or other Knowledge Artifact of a specific Community.\n---\n\nA curated text starts with three dashes `---`.\nThis indicates the start of its (YAML) header.\nTypically, the header consists of a sequence of key-value pairs.\nThe header is terminated with onother three dashes and a new line.\n\nThe body of the curated text starts behind the header block.\nIt is typically markdown, but other constructs may be inserted\nthat contribute to the rendering of these texts in a (static) website.\nAn example of this is [MDX](https://mdxjs.com/).\nA discussion on these other constructs is outside the scope of this document.\n")))),(0,i.kt)("p",null,"While part of the structure of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," is common for all of them, another part of it depends on the kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that it describes. That is because a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," that defines a ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," is quite different from one that describes a ",(0,i.kt)("a",{parentName:"p",href:"@"},"mental model"),", or a ",(0,i.kt)("a",{parentName:"p",href:"@"},"use-case"),"."),(0,i.kt)("p",null,"TEv2 assumes that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"header")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," contains a ",(0,i.kt)("strong",{parentName:"p"},"generic part")," that is always there, regardless of the kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"p",href:"curated-text@"},"text")," documents, and a ",(0,i.kt)("strong",{parentName:"p"},"type specific part")," that contains header fields that are specific for the kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"p",href:"curated-text@"},"text")," documents."),(0,i.kt)("h2",{id:"generic-header-fields"},"Generic Header Fields"),(0,i.kt)("p",null,"This section describes the ",(0,i.kt)("strong",{parentName:"p"},"generic header fields")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),", i.e. the fields that must, or may appear in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"header")," of every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),". The header fields that are specific for a particular kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," are specified in the document of that particular artifact (e.g. for ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-ctexts/ctext-concept#header"},"concepts"),")."),(0,i.kt)("p",null,"The following table specifies the ",(0,i.kt)("strong",{parentName:"p"},"generic header fields"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"Y*"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"F"),") the field is required to be present as a header field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"Y*")," signifies that currently, the field is required, but that we envisage it to become optional when tooling becomes more mature, and will be able to automatically create the specified default value. The ",(0,i.kt)("inlineCode",{parentName:"li"},"F")," means that we reserve this field for Future Use."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default"))," If the field is NOT required, this specifies what ",(0,i.kt)("a",{parentName:"li",href:"@"},"TEv2 tools")," SHOULD assume that the value is. If the field IS required, you must provide it according to the specified value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y*"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," within the context of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),". The value of this field can be used as the ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"-field of a ",(0,i.kt)("a",{parentName:"td",href:"@"},"term ref")," that refers to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," described by this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),". It is RECOMMENDED that its value is constructed such that ",(0,i.kt)("a",{parentName:"td",href:"@"},"authors")," would use it in a natural way, e.g. by making it equal to ",(0,i.kt)("inlineCode",{parentName:"td"},"termid")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"<termtype>-<termid>"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scope")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@"},"Scopetag")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," within which this document is being ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated"),". The purpose of specifying this field is that it enables tools to check that resolving any ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," within this document will use this to ",(0,i.kt)("a",{parentName:"td",href:"@"},"identify")," the default ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termid")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Name (",(0,i.kt)("a",{parentName:"td",href:"@"},"Identifier"),") that is used to represent a ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact"),". Actual, i.e. successful ",(0,i.kt)("a",{parentName:"td",href:"@"},"identification")," of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," may also depend on other characteristics, such as the ",(0,i.kt)("inlineCode",{parentName:"td"},"termtype"),", as names are known to be ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Semantic_overload"},"semantically overloaded"),". See ",(0,i.kt)("a",{parentName:"td",href:"/docs/tev2/various-identifiers"},"TEv2 identification")," for more details.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termtype")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the kind of ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," describes. Typical values would be ",(0,i.kt)("inlineCode",{parentName:"td"},"concept"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"relation"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"pattern")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"mental-model"),"), ",(0,i.kt)("inlineCode",{parentName:"td"},"term")," (or ",(0,i.kt)("inlineCode",{parentName:"td"},"alias"),"), or ",(0,i.kt)("inlineCode",{parentName:"td"},"usecase"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termattrs")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"term-attrs@"},"attributes")," that enable one to distinguish between ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifacts")," that have the same ",(0,i.kt)("a",{parentName:"td",href:"@"},"term name")," and are of the same ",(0,i.kt)("a",{parentName:"td",href:"term-type@"},"type"),"."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"glossaryText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is used as the (raw) contents for the entry of this ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," in a human readable ",(0,i.kt)("a",{parentName:"td",href:"@"},"glossary"),". Note that this text SHOULD be allowed to contain ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs"),"."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoverText")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that can be used as the contents of a popup that shows as the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," is rendered in a web browser and the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," hovers over the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," with its mouse."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"termreftext")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@"},"reftext")," that ",(0,i.kt)("a",{parentName:"td",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," that documents the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that this term represents.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"synonyms")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of (optionally quoted) ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms"),", that are considered to also represent the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that is documented by the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"formphrases")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"formphrase@"},"texts")," that are ",(0,i.kt)("a",{parentName:"td",href:"/docs/tev2/spec-tools/trrt#id"},"used to convert")," the ",(0,i.kt)("inlineCode",{parentName:"td"},"show text")," parts of ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," into ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs).",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("a",{parentName:"td",href:"https://www.debuggex.com/r/TZe27fzbJskMcjl8"},(0,i.kt)("inlineCode",{parentName:"a"},"(?:\\[\\s*([a-z0-9_-{}]+)\\s*(?:,\\s*([a-z0-9_-{}]+))*\\s*\\])?")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of ",(0,i.kt)("a",{parentName:"td",href:"@"},"grouptags"),", each of which signifies that the ",(0,i.kt)("a",{parentName:"td",href:"@"},"(scoped) term")," that this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," documents, is part of the group of ",(0,i.kt)("a",{parentName:"td",href:"@"},"terms")," that it represents.",(0,i.kt)("br",null),"Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"[tev2, management]"),".",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("a",{parentName:"td",href:"https://www.debuggex.com/r/a51CXl1NzR3kwihT"},(0,i.kt)("inlineCode",{parentName:"a"},"(?:\\[\\s*([a-z0-9_-]+)\\s*(?:,\\s*([a-z0-9_-]+))*\\s*\\])?")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the status of the term. (",(0,i.kt)("a",{parentName:"td",href:"@"},"Communities")," of) ",(0,i.kt)("a",{parentName:"td",href:"@"},"scopes")," may specify values for this field. An example is the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status tags used by ToIP"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"created")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," was created, in the date format as used within this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"updated")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Date at which of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," was last modified, in the date format as used within this ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vsntag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that identifies the version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"knowledge artifact")," that this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," describes.",(0,i.kt)("br",null),"Must satisfy regex ",(0,i.kt)("inlineCode",{parentName:"td"},"[a-z0-9_-]+"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"contributors")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Text that shows (or refers to) the people that have contributed to this ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")))),(0,i.kt)("admonition",{title:"Editor's notes",type:"info"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"The field ",(0,i.kt)("inlineCode",{parentName:"li"},"termreftext")," isn't properly defined yet, and therefore every use should be documented and fed back to the developers of TEv2."),(0,i.kt)("li",{parentName:"ol"},"There is currently no generic syntax for ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," - see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/ctwg-toolkit-mrg/issues/15"},"this issue"),". Any use of this field should be mentioned and discussed there, until the syntax is defined."))),(0,i.kt)("h2",{id:"type-specific-header-fields"},"Type-specific Header Fields"),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," documents a ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," of a specific type, as specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"termtype")," field of the generic TEv2 front-matter. Depending on the value of that ",(0,i.kt)("inlineCode",{parentName:"p"},"termtype")," field, additional front-matter may be specified. This is the case for the following ",(0,i.kt)("inlineCode",{parentName:"p"},"termtype"),"s:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-ctexts/ctext-concept#header"},(0,i.kt)("inlineCode",{parentName:"a"},"termtype")," = ",(0,i.kt)("inlineCode",{parentName:"a"},"concept"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-ctexts/ctext-pattern#header"},(0,i.kt)("inlineCode",{parentName:"a"},"termtype")," = ",(0,i.kt)("inlineCode",{parentName:"a"},"pattern")))))}c.isMDXComponent=!0}}]);