"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2899],{2247:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),o=i(4345),s=i(4996),d=["components"],c={id:"pattern-identifier",title:"Identifier Pattern",scopeid:"essifLab",displayed_sidebar:"essifLabSideBar",type:"pattern",typeid:"identifier",symphrase:"identifier",stage:"draft",hoverText:"The eSSIF-Lab Identifier Pattern describes how Identifiers are defined and used for Identification purposes.",date:20210830},f=void 0,p={unversionedId:"terms/pattern-identifier",id:"terms/pattern-identifier",title:"Identifier Pattern",description:"This is work in progress and needs discussion.",source:"@site/docs/terms/pattern-identifier.md",sourceDirName:"terms",slug:"/terms/pattern-identifier",permalink:"/framework/docs/terms/pattern-identifier",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/pattern-identifier.md",tags:[],version:"current",frontMatter:{id:"pattern-identifier",title:"Identifier Pattern",scopeid:"essifLab",displayed_sidebar:"essifLabSideBar",type:"pattern",typeid:"identifier",symphrase:"identifier",stage:"draft",hoverText:"The eSSIF-Lab Identifier Pattern describes how Identifiers are defined and used for Identification purposes.",date:20210830},sidebar:"essifLabSideBar",previous:{title:"Identification Pattern",permalink:"/framework/docs/terms/pattern-identification"},next:{title:"Trust Pattern",permalink:"/framework/docs/terms/pattern-trust"}},m={},h=[{value:"Purpose",id:"purpose",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Formalized model",id:"formalized-model",level:3},{value:"References",id:"references",level:3}],l={toc:h};function u(e){var t=e.components,i=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This is work in progress and needs discussion."))),(0,a.kt)("h3",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Identifier pattern")," captures the concepts and relations that help to explain how ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifiers")," are defined and used for ",(0,a.kt)(o.Z,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identification")," purposes."),(0,a.kt)("p",null,"Related topics can be found in the ",(0,a.kt)(o.Z,{popup:"The eSSIF-Lab Identity Pattern shows how digital identities work, how this relates to (attributes in) credentials, and how all this can be made to work in SSI contexts.",reference:"/framework/docs/terms/pattern-identity",mdxType:"Term"},"identity pattern")," and the ",(0,a.kt)(o.Z,{popup:"The eSSIF-Lab Identification Pattern describes mechanisms that a Party uses to Identify Entities, and mechanisms for communicating with another Party such that both Parties can identify an entity and know whether or not they identify the same entity.",reference:"/framework/docs/terms/pattern-identification",mdxType:"Term"},"identification pattern"),"."),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"formalized-model"},"Formalized model"),(0,a.kt)("p",null,"Here is a visual representation of this pattern, using the following ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../notations-and-conventions#pattern-diagram-notations"},"notations and conventions")),":"),(0,a.kt)("img",{alt:"Conceptual model of the 'Identifier' pattern",src:(0,s.Z)("images/patterns/pattern-identifier.png")}),(0,a.kt)("p",null,"The figure shows a context, in which an ",(0,a.kt)(o.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of a ",(0,a.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that perceives the context (and its contents) uses ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifiers")," for the purpose of ",(0,a.kt)(o.Z,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identifying")," ",(0,a.kt)(o.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," within that context. Typical contexts are those in which a computer system/application acts as such an ",(0,a.kt)(o.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent"),", but any other situation where (an ",(0,a.kt)(o.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of) a ",(0,a.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," is ",(0,a.kt)(o.Z,{popup:"Action: something that is actually done (a 'unit of work' that is executed) by a single Actor (on behalf of a given Party), as a single operation, in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"acting")," has its own particular context. The context is significant, because within that context, not every ",(0,a.kt)(o.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that a ",(0,a.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," knows to exist will be (expected to be) present, or needed to be ",(0,a.kt)(o.Z,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identified"),"."),(0,a.kt)("p",null,"It is assumed that ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifiers")," are associated with specific classes of ",(0,a.kt)(o.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities"),". Such associations may differ between contexts. For example, in the context of discussing war planes, the ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifier")," ",(0,a.kt)("inlineCode",{parentName:"p"},"B52")," refers to a class of bomber planes, whereas in the context of Schiphol Amsterdam airport, ",(0,a.kt)("inlineCode",{parentName:"p"},"B52")," would refer to a (boarding) gate, and in the context of drinks, it would refer to a specific ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/B-52_(cocktail)"},"cocktail"),". Examples in the IT include ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifiers")," in the syntax of e-mail addresses, which may be used as an email address, as a username for logging in, as a SIP address (for making calls over the Internet), etc."),(0,a.kt)("p",null,"Typically, ",(0,a.kt)(o.Z,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identifications")," for which ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifiers")," are used are limited to specific contexts where the ",(0,a.kt)(o.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that executes the ",(0,a.kt)(o.Z,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identification-act")," knows the kind of ",(0,a.kt)(o.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that needs to be ",(0,a.kt)(o.Z,{popup:"Identify: an Act, by or on behalf of a Party, that results in the selection of either (a) a single Partial identity that the party Owns, given some (observed or received) data, or (b) a single Entity from a given set of entities that is the Subject of a specified Partial identity that the party Owns.",reference:"/framework/docs/terms/identify",mdxType:"Term"},"identified"),", and when using some ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifier"),", it would expect it to be useable for instances of such a kind."),(0,a.kt)("p",null,"The figure introduces the concept ",(0,a.kt)("inlineCode",{parentName:"p"},"ID"),", the idea of which is that it is a composition of whatever it takes in terms of ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifiers")," to be able to identify an ",(0,a.kt)(o.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," of a specific type in a specific context. In the simplest case (in a small context, without many ",(0,a.kt)(o.Z,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," to choose from), a single ",(0,a.kt)(o.Z,{popup:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used).",reference:"/framework/docs/terms/identifier",mdxType:"Term"},"identifier")," may suffice - specifying the entity type may not even be necessary. In other cases, a single identifier m ay not suffice, and multiple identifiers are necessary"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Text to be added from here on. Thoughts revolve around changing 'entity type' to 'attribute type' or such. That might result in a mapping (Entity, Attribute Type, Identifier) in the current figure to (subject, predicate, object) or pehaps better: (subject, key, value), i.e. (key, value) pairs for an implied subject. That could form the basis of doing identification in the data realm (which is currently still lacking)"))),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("p",null,'Earlier ideas for this can be found in "',(0,a.kt)("a",{parentName:"p",href:"https://link.springer.com/content/pdf/10.1007/978-0-387-79026-8_27.pdf"},"Putting Identifiers in the Context of eHealth"),'"'))}u.isMDXComponent=!0}}]);