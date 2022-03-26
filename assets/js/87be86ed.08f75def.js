"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2856],{4269:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),o=a(4345),s=["components"],c={id:"verifier",title:"Verifier",scopeid:"essifLab",type:"concept",typeid:"verifier",symphrase:"verifier%{ss}",stage:"draft",hoverText:"Verifier (functional component): the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",glossaryText:"the capability to request %%peer agents^peer-agent%% to present (provide) data from credentials (of a specified kind, issued by specified %%parties^party%%), and to verify such responses (check structure, signatures, dates), according to its %%principal^principal%%'s %%verifier policy^verifier-policy%%.",date:20210601},p=void 0,d={unversionedId:"terms/verifier",id:"terms/verifier",title:"Verifier",description:"In other SSI contexts, this term has a different meaning. We intend to rework the famework in such a way that we can use this term in various ways (e.g. as a party, a role name, or an actor that performs the role associated with the role name",source:"@site/docs/terms/verifier.md",sourceDirName:"terms",slug:"/terms/verifier",permalink:"/framework/docs/terms/verifier",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/verifier.md",tags:[],version:"current",frontMatter:{id:"verifier",title:"Verifier",scopeid:"essifLab",type:"concept",typeid:"verifier",symphrase:"verifier%{ss}",stage:"draft",hoverText:"Verifier (functional component): the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",glossaryText:"the capability to request %%peer agents^peer-agent%% to present (provide) data from credentials (of a specified kind, issued by specified %%parties^party%%), and to verify such responses (check structure, signatures, dates), according to its %%principal^principal%%'s %%verifier policy^verifier-policy%%.",date:20210601}},l={},h=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Functionality",id:"functionality",level:3}],m={toc:h};function f(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"In other SSI contexts, this term has a different meaning. We intend to rework the famework in such a way that we can use this term in various ways (e.g. as a ",(0,n.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", a ",(0,n.kt)(o.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"role name"),", or an ",(0,n.kt)(o.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that performs the ",(0,n.kt)(o.Z,{popup:"Role (of an Entity in some context): a set of characteristics that the Entity has, Actions (behaviours) that it may execute, or pieces of Knowledge that it is expected to have in that context, that can be referenced to by a specific (Role-)name.",reference:"/framework/docs/terms/role",mdxType:"Term"},"role")," associated with the ",(0,n.kt)(o.Z,{popup:"Role name: name (text) that refers to (and identifies) a Role in a a specific context.",reference:"/framework/docs/terms/role-name",mdxType:"Term"},"role name")))),(0,n.kt)("h3",{id:"short-description"},"Short Description"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Verifier")," is is an (architectural) function (a functional component in the ",(0,n.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture"),") that supports the ",(0,n.kt)(o.Z,{popup:"Transaction Data Collector: a functional component that collects sufficient and Validated Data for deciding whether or not a request (typically for a product or a service) is to be serviced.",reference:"/framework/docs/terms/transaction-data-collector",mdxType:"Term"},"Transaction Data Collector")," as it tries to acquire ",(0,n.kt)(o.Z,{popup:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",reference:"/framework/docs/terms/credential",mdxType:"Term"},"(verifiable) credentials")," from (an ",(0,n.kt)(o.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of) some other ",(0,n.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", for the purpose of negotiating a ",(0,n.kt)(o.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"business transaction"),"."),(0,n.kt)("p",null,"It does so by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"creating ",(0,n.kt)(o.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation r")," (or Presentation Definition as it is called in the ",(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/presentation-exchange"},"draft DIF specfication for Presentation Exchange"),") that ask for such credentials,"),(0,n.kt)("li",{parentName:"ul"},"sending them to an ",(0,n.kt)(o.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of that other ",(0,n.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that provides ",(0,n.kt)(o.Z,{popup:"Holder (functional component): the capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",reference:"/framework/docs/terms/holder",mdxType:"Term"},"holder")," functionality,"),(0,n.kt)("li",{parentName:"ul"},"receiving a response from that ",(0,n.kt)(o.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," to the ",(0,n.kt)(o.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation request")," (i.e. a '",(0,n.kt)(o.Z,{popup:"Presentation: a (signed) digital message that a Holder component may send to a Verifier component that contains data derived from one or more Verifiable Credentials (that (a Colleague component of) the Holder component has received from Issuer components of one or more Parties), as a response to a specific Presentation Request of a Verifier component.",reference:"/framework/docs/terms/presentation",mdxType:"Term"},"Presentation"),"'),"),(0,n.kt)("li",{parentName:"ul"},"verifying that ",(0,n.kt)(o.Z,{popup:"Presentation: a (signed) digital message that a Holder component may send to a Verifier component that contains data derived from one or more Verifiable Credentials (that (a Colleague component of) the Holder component has received from Issuer components of one or more Parties), as a response to a specific Presentation Request of a Verifier component.",reference:"/framework/docs/terms/presentation",mdxType:"Term"},"presentation"),", i.e. checking the signature and other proofs of the veracity of both the construction of the presentation and its contents"),(0,n.kt)("li",{parentName:"ul"},"returning the data that the ",(0,n.kt)(o.Z,{popup:"Transaction Data Collector: a functional component that collects sufficient and Validated Data for deciding whether or not a request (typically for a product or a service) is to be serviced.",reference:"/framework/docs/terms/transaction-data-collector",mdxType:"Term"},"Transaction Data Collector")," requested, optionally with a report about which verification checks succeeded and/or which failed.")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Additional content is needed here."))),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The purpose of the Verifier function is."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Verifier")," is a component in the ",(0,n.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture")," whose function is to ... (tbd)."),(0,n.kt)("h3",{id:"functionality"},"Functionality"),(0,n.kt)("p",null,"The purpose of the Verifier component is to support the Transaction Data Collector by providing it with a single, simple API that it can use to request and obtain data that it needs to produce a clean transaction form, as well as the results of checking verification proofs (this is also why it is called the 'verifier' component)."),(0,n.kt)("p",null,"Typically, the Transaction Data Collector would ask the Verifier to provide a credential that it can use to fill in a (coherent set of) field(s) in the transaction form. It is realistic to think that credentials from different issuers - trusted by the Verifier's Principal - can be used for this purpose. However, it is also realistic that such credentials will not use the same credential definition - they might well use different schemes to provide such data. Therefore, the Transaction Data Collector should specify a list of pairs (credential-type, issuer) instances of which could all be used to provide the data it needs - which it can obtain from the Transaction Data Collector policy."),(0,n.kt)("p",null,"Then, the Verifier needs to know the address and protocol that it can use to reach a Holder component owned by the ",(0,n.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that its Principal is trying to negotiate the transaction with. The Transaction Data Collector specifies this as part of the request - and it can do so because it has received the original request, and does all ",(0,n.kt)(o.Z,{popup:"Communication Channel: a (digital or non-digital) means by which two Actors can exchange messages with one another.",reference:"/framework/docs/terms/communication-channel",mdxType:"Term"},"communication channel")," handling."),(0,n.kt)("p",null,"Verifiers are not expected to handle every kind of credential (e.g. VC's, ABC's, etc.) that exists, but rather a specific subset. For (at least one of) the credential types, the Verifier can construct a so-called ",(0,n.kt)(o.Z,{popup:"Presentation Request: a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/framework/docs/terms/presentation-request",mdxType:"Term"},"presentation request"),", i.e. a message that is specific for the credential type and/or associated protocol, which it can then send to the Holder's address."),(0,n.kt)("p",null,"This request message should contain at least"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the transaction-id, so that when it is copied into the associated response message, the latter can be associated to the transaction it belongs to. Also, it should contain the"),(0,n.kt)("li",{parentName:"ul"},"the (credential type, issuer) pairs that may satisfy the request, and to each of these additional data, e.g. the URI of the endpoint where the issuer issues such credentials, the maximum age of the credential, etc."),(0,n.kt)("li",{parentName:"ul"},"meta-data that may be useful for the holder (or its Principal), e.g. texts stating the purpose(s) for which the data will be used (",(0,n.kt)("a",{parentName:"li",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN"},(0,n.kt)("em",{parentName:"a"},"GDPR"))," Art. 5.1.b), or requesting consent (",(0,n.kt)("a",{parentName:"li",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN"},(0,n.kt)("em",{parentName:"a"},"GDPR"))," Art. 7.2) \u201cin an intelligible and easily accessible form, using clear and plain language\u201d."),(0,n.kt)("li",{parentName:"ul"},"a signature of the Verifiers Principal, for the purpose of showing ",(0,n.kt)(o.Z,{popup:"Compliance (of a Party): the state of realization of a set of conformance criteria or normative framework of that Party.",reference:"/framework/docs/terms/compliance",mdxType:"Term"},"compliance")," with the ",(0,n.kt)("a",{parentName:"li",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN"},(0,n.kt)("em",{parentName:"a"},"GDPR"))," (e.g. Art 28.3.h), and enabling the Holder's Principal to obtain proof that the Verifiers Principal has violated the ",(0,n.kt)("a",{parentName:"li",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN"},(0,n.kt)("em",{parentName:"a"},"GDPR")),"'s minimization principle asked for data for a particular purpose, which can be used in an argument in disputes about data minimization (",(0,n.kt)("a",{parentName:"li",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN"},(0,n.kt)("em",{parentName:"a"},"GDPR"))," Art. 5.1.c).")),(0,n.kt)("p",null,"The request message must be designed in such a way that it is extendable as new features will be called for in the future."),(0,n.kt)("p",null,"In order to make the Verifier component work, a Verifier Policy/Preferences object is created by, or on behalf of the Principal, which specifies at least: ","[","to be elaborated","]"),(0,n.kt)("p",null,"A response to this request (called a Presentation) will be obtained from a Holder component of the Peer ",(0,n.kt)(o.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),". This response will contain a reference to the request, allowing the Verifier to combine them. The Verifier will then check that the data in the response is a credential that it has asked for (correct type/issuer), verify the proofs that are provided (predominantly the digital signature), and do some additional checks (e.g. whether or not the credential has expired, is revoked, and such)."),(0,n.kt)("p",null,"Then, the verifier will send a message to the Transaction Data Collector, containing the transaction-id, the data it has received, and the results of the various checks."))}f.isMDXComponent=!0}}]);