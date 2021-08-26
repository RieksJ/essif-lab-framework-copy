(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(229)),s=n(230),r=n.n(s),c={id:"notations-and-conventions",title:"Notations and Conventions",date:20210601},d={unversionedId:"notations-and-conventions",id:"notations-and-conventions",isDocsHomePage:!1,title:"Notations and Conventions",description:"This document provides an overview of the notations and conventions being used within eSSIF-Lab.",source:"@site/docs/notations-and-conventions.md",slug:"/notations-and-conventions",permalink:"/framework/docs/notations-and-conventions",editUrl:"https://gitlab.grnet.gr/essif-lab/framework/-/tree/master/docs/notations-and-conventions.md",version:"current",sidebar:"sidebar_for_terminology",previous:{title:"Duties and Rights",permalink:"/framework/docs/terms/pattern-duties-and-rights"}},l=[{value:"RFC 2119",id:"rfc-2119",children:[]},{value:"Capitalization of words in mid-sentence",id:"capitalization-of-words-in-mid-sentence",children:[]},{value:"Pattern diagram notations",id:"pattern-diagram-notations",children:[]}],h={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document provides an overview of the notations and conventions being used within eSSIF-Lab."),Object(o.b)("h3",{id:"rfc-2119"},"RFC 2119"),Object(o.b)("p",null,"We shall use keywords such as \u201cshall\u201d, \u201cshould\u201d, \u201cmay\u201d etc. as defined by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ietf.org/rfc/rfc2119.txt"}),"RFC 2119"),"."),Object(o.b)("h3",{id:"capitalization-of-words-in-mid-sentence"},"Capitalization of words in mid-sentence"),Object(o.b)("p",null,"A word in mid-sentence that is capitalized is a ",Object(o.b)(r.a,{popup:"Term: a word or phrase that is used in at least one Scope/context to refer to a specific Concept.",reference:"/framework/docs/terms/term",mdxType:"Term"},"term")," that has a ",Object(o.b)(r.a,{popup:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concepts behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction.",reference:"/framework/docs/terms/definition",mdxType:"Term"},"definition")," in the ",Object(o.b)(r.a,{popup:"Corpus (of Terminology): the documentation that describes the Knowledge around a set of Terms and Concepts.",reference:"/framework/docs/terms/corpus",mdxType:"Term"},"Corpus of Terminology"),". This allows readers to distinguish between the more colloquial meanings of words (by not capitalizing them) and those that are actually defined. We appreciate any feedback regarding our (im)proper use of this kind of capitalization of words."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We are working towards deprecating this convention, as we now have better ways of referring to words that are defined in the eSSIF-Lab Corpus."))),Object(o.b)("h3",{id:"pattern-diagram-notations"},"Pattern diagram notations"),Object(o.b)(r.a,{popup:"Pattern (Mental Model): A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",reference:"/framework/docs/terms/pattern",mdxType:"Term"},"Pattern")," diagrams will be visualized in this document using a UML-like notation, as follows:",Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"rectangle")," represents a (named) concept that is explicitly defined. Concepts serve as entity-classes. Their (operational) extensions, i.e. the respective sets of (runtime) instances, are disjunct."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"rectangle that is coloured red(dish)")," represents a (named) concept that is commonly used 'in the wild' (and hence needs not be defined here), relates to one or more concepts that are explicitly defined yet is not the same. We include such 'red concepts' to help readers identify and subsequently bridge gaps between commonly held thoughts and the (sometimes subtly) different meanings we need in our model."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"solid line with a closed arrowhead")," represent a (named) relation/association between the two concepts it connects. We may refer to the concept at the arrowhead as the 'target concept' (TGT) for that relation. Similarly, the concept at the other end will be referred to as the 'source concept' (SRC) for that relation. Names are chosen such that ",Object(o.b)("inlineCode",{parentName:"li"},"<SRC> <relation name> <TGT>")," is a phrase that suggests the intension(al definition) of that relation."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"solid line with an open arrowhead")," represents an 'ISA' relation, which can be read as ",Object(o.b)("inlineCode",{parentName:"li"},"<SRC> ISA <TGT>"),". It means that SRC is a specialization of TGT (which in turn is a generalization of SRC). It means that SRC must satisfy all constraints that TGT must satisfy, and also that it has all attributes (including properties) that TGT has."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"solid line with a solid diamand")," at one end is a composition; the element at the 'non-diamond-end' of the line is 'part of' (the 'part') the element at the 'diamond-end' of the line (the 'whole'); if the 'whole' ceases to exist, then its 'parts' also cease to exist."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"solid line with a hollow diamand")," at one end is an aggregation; the element at the 'non-diamond-end' of the line is 'part of' (the 'part') the element at the 'diamond-end' of the line (the 'whole'); if the 'whole' ceases to exist, then its 'parts' do not necessarily cease to exist, but may 'live on'."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"green name")," at either end of a relation/association is what UML calls 'role'; this name may be used to refer to (an instance of) the concept at which the name is placed as it performs its/this role in this relation."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"dashed line")," with a closed arrow (solid triangle) signifies that while the relation is significant in combination with the model, its actual meaning relies on an assumption or is implied by some rule, or is specified in another pattern. The pattern text will state what this meaning is."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"dashed line")," with a pointed arrow (",Object(o.b)("inlineCode",{parentName:"li"},">"),") represents a dependency, where  the SRC concept somehow depends on the TGT concept. The kind of dependency is specified by ",Object(o.b)("inlineCode",{parentName:"li"},"<<text>>"),", where ",Object(o.b)("inlineCode",{parentName:"li"},"text")," specifies the kind of dependency. Example: ",Object(o.b)("inlineCode",{parentName:"li"},"<<instance>>")," says that SRC is an instance (or: instantiates) TGT."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Multiplicities")," (or: ",Object(o.b)("strong",{parentName:"li"},"cardinalities"),") use the ","[n..m]"," notation. When a multiplicity is omitted, ","[0..n]"," is intended.")))}p.isMDXComponent=!0}}]);