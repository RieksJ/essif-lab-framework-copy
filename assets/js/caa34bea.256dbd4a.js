"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[9185],{7453:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return h}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),s=["components"],o={id:"term",scope:"tev2",termtype:"concept",termid:"term",formphrases:"term{ss}, word{ss}, phrase{ss}",grouptags:null,status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-08-09T00:00:00.000Z"),vsntag:"v0.1",contributors:"RieksJ",isa:"identifier",term:"term",fullterm:null,shorterm:null,synonyms:null,glossaryText:"a word or phrase (i.e.: text) that is used in at least one [scope](@)/context to represent specific [knowledge artifacts](@).",title:"Term",hoverText:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent specific Knowledge Artifacts, e.g. Concepts, Relations or Mental Models."},l=void 0,p={unversionedId:"tev2/terms/term",id:"tev2/terms/term",title:"Term",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/terms/term.md",sourceDirName:"tev2/terms",slug:"/tev2/terms/term",permalink:"/framework/docs/tev2/terms/term",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/terms/term.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1660127696,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"term",scope:"tev2",termtype:"concept",termid:"term",formphrases:"term{ss}, word{ss}, phrase{ss}",grouptags:null,status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-08-09T00:00:00.000Z",vsntag:"v0.1",contributors:"RieksJ",isa:"identifier",term:"term",fullterm:null,shorterm:null,synonyms:null,glossaryText:"a word or phrase (i.e.: text) that is used in at least one [scope](@)/context to represent specific [knowledge artifacts](@).",title:"Term",hoverText:"Term: a word or phrase (i.e.: text) that is used in at least one Scope/context to represent specific Knowledge Artifacts, e.g. Concepts, Relations or Mental Models."},sidebar:"tev2SideBar",previous:{title:"Term Type",permalink:"/framework/docs/tev2/terms/term-type"},next:{title:"Terminology Process",permalink:"/framework/docs/tev2/terms/terminology-process"}},m={},h=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Notes",id:"notes",level:3},{value:"Footnotes",id:"footnotes",level:3}],f={toc:h};function c(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Term")," is a word or phrase (i.e.: text) that is used in at least one ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"/context to represent specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),", e.g. ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"relations")," or ",(0,i.kt)("a",{parentName:"p",href:"@"},"mental models"),". We use the phrase '",(0,i.kt)("a",{parentName:"p",href:"@"},"scoped term"),"' to refer to a term when it is used in one specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("p",null,"While a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," is often thought of as a single word (or phrase), it is better conceived as a construct that consists of multiple parts, that enables us to use a word or phrase in different kinds for different kinds of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),", as we often see that people do in practice. This construct is visualized in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/terms/patterns/pattern-terminology#formalized-model"},"formalized terminology model"),"), and consists of the following components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term name")," (required), i.e. an ",(0,i.kt)("a",{parentName:"li",href:"@"},"identifier")," that is used to represent a ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact"),". Note that different ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifacts")," can have the same ",(0,i.kt)("a",{parentName:"li",href:"@"},"term name")," (which is known as ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Semantic_overload"},"semantically overloading"),")."),(0,i.kt)("li",{parentName:"ol"},"a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term type")," (optional), i.e. an ",(0,i.kt)("a",{parentName:"li",href:"@"},"identifier")," that is used to ",(0,i.kt)("a",{parentName:"li",href:"@"},"identify")," the particular ",(0,i.kt)("em",{parentName:"li"},"kind")," of ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term name")," represents, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"concept"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"relation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pattern")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"mental-model"),")."),(0,i.kt)("li",{parentName:"ol"},"a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term attrs")," (optional), i.e. a list of ",(0,i.kt)("a",{parentName:"li",href:"term-attrs@"},"attributes")," that enable one to distinguish between ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifacts")," that have the same ",(0,i.kt)("a",{parentName:"li",href:"@"},"term name")," and are of the same ",(0,i.kt)("a",{parentName:"li",href:"term-type@"},"type"),".")),(0,i.kt)("p",null,"Thus:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a single term may (and typically does) have different meanings (",(0,i.kt)("a",{parentName:"li",href:"@"},"semantics"),") in different ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopes"),"/contexts. For example, in the context of a beauty-salon, the term 'nail' has a different meaning than in the context of constructing buildings."),(0,i.kt)("li",{parentName:"ul"},"different terms (in the same, or different ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopes"),"/contexts) may have the same meaning (i.e. represent the same ",(0,i.kt)("a",{parentName:"li",href:"@"},"concept")," (",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Synonym"},"synonymity"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/alias"},"alias"),").")),(0,i.kt)("p",null,"The precise meaning of a term thus depends on the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"/context in which it is used. We use the phrase ",(0,i.kt)("a",{parentName:"p",href:"@"},"scoped term")," to refer to a term that is part of one particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"/context, and refers to a single ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," (or other ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),"), and hence is unambiguous."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this concept fits in with related concepts.\nThe ",(0,i.kt)("a",{parentName:"p",href:"@"},"term-ref")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-syntax/term-ref-syntax"},"syntax specification")," specifies the syntax that ",(0,i.kt)("a",{parentName:"p",href:"@"},"authors")," should use as they want to use a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," in their text."),(0,i.kt)("h3",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"Understanding words or phrases uttered by others requires that we are able to 'translate' them into terms that we habitually use, i.e. with the meaning of which we are familiar. While this is mostly an (unconscious) automatism, and it is often also not necessary to be very precise, this may be different when they relate to stuff we find important. The ability to represent a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," (or other ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),") with a specific text or phrase, where this 'representation' is limited to a specific (or several) context(s), helps us to better interpret these words, which is: to properly understand what others actually try to convey in spoken or written language."),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"A term MUST be a word or phrase (i.e.: text) that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is used in at least one ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),"/context, where it represents (and ",(0,i.kt)("a",{parentName:"li",href:"@"},"identifies"),")) one specific ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact")," that is part of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"community")," that ",(0,i.kt)("a",{parentName:"li",href:"@"},"owns")," that ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),";"),(0,i.kt)("li",{parentName:"ul"},"can be mapped on a tuple consisting of:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"precisely one name (the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term name"),");"),(0,i.kt)("li",{parentName:"ul"},"at most one type (the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term type"),", i.e. a text that identifies the kind of ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact"),");"),(0,i.kt)("li",{parentName:"ul"},"any number of attributes (the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term attrs"),"), as needed.")))),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,"There is an important ",(0,i.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Concept"},"distinction")," between ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," (and other ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),") and the (multitude of) terms (names, labels) that we need to be able to talk and reason (argue) about them. Please consider that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"different ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms")," are used in different contexts for representing a single ",(0,i.kt)("a",{parentName:"li",href:"@"},"concept"),";"),(0,i.kt)("li",{parentName:"ul"},"in different contexts, a single ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," may represent different ",(0,i.kt)("a",{parentName:"li",href:"@"},"concepts"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://resolver.tudelft.nl/uuid:964a90da-da81-4d38-9f45-84f3f5fa96b3"},"to resolve terminological disputes"),", which usually are about the 'correct' meaning of a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term"),", try to establish the criteria that the different participants use for the concept behind the term. That helps participants understand each others (different) positions, and provides a better basis for resolving the conflict.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"footnotes"},"Footnotes"))}c.isMDXComponent=!0}}]);