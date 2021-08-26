(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return h}));var s=a(2),i=a(6),r=(a(0),a(229)),o=a(230),n=a.n(o),c={id:"data-discloser",title:"Data Discloser",scopeid:"essifLab",type:"concept",typeid:"data-discloser",stage:"draft",hoverText:"Data Discloser: a functional component that is capable of disclosing data to (Agents of) other Parties, e.g. in the form of Credentials.",glossaryText:"a functional component that is capable of disclosing data to (Agents of) other %%parties^party%%, e.g. in the form of %%credentials^credential%%.",date:20210601},l={unversionedId:"terms/data-discloser",id:"terms/data-discloser",isDocsHomePage:!1,title:"Data Discloser",description:"Short Description",source:"@site/docs/terms/data-discloser.md",slug:"/terms/data-discloser",permalink:"/framework/docs/terms/data-discloser",editUrl:"https://gitlab.grnet.gr/essif-lab/framework/-/tree/master/docs/terms/data-discloser.md",version:"current"},d=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Functionality",id:"functionality",children:[]}],p={rightToc:d};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"short-description"},"Short Description"),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Data Discloser")," is an (architectural) function (a functional component in the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"../essifLab-fw-func-arch"}),"eSSIF-Lab functional architecture"),") that applications (that work for some ",Object(r.b)(n.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Party"),") can call to communicate things such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the results of a business transaction (e.g. statements to confirm that a transaction happened, thereby supplying appropriate details)"),Object(r.b)("li",{parentName:"ul"},"the status of a business transaction (e.g. that an order has been received in good order, that delivery of an order is dealyed or otherwise changed)"),Object(r.b)("li",{parentName:"ul"},"knowledge (including judgements) that this Party has about ",Object(r.b)(n.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"Entities")," (people, organizations, things, orders, deliveries, etc.)")),Object(r.b)("p",null,"The Data Discloser uses a ",Object(r.b)(n.a,{popup:"Data Collector Policy: a Digital Policy that enables an operational Data Collector component to function according to the rules of its Policy Governor.",reference:"/framework/docs/terms/data-collector-policy",mdxType:"Term"},"data-collector-policy")," to learn about the applicable (business) rules of its ",Object(r.b)(n.a,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal"),". Such a policy may specify e.g. which types of credentials its principal is willing to (have) issue(d), to whom such credentials may be issued and the kinds of assurances that must be obtained before doing so, etcetera."),Object(r.b)("p",null,"The Data Discloser uses the ",Object(r.b)(n.a,{popup:"eSSIF-Glue: interface layer that allows components with Transaction Data Collector and/or Transaction Data Discloser functionality to use the Wallet, Holder, Issuer and Verifier functionalities.",reference:"/framework/docs/terms/essif-glue",mdxType:"Term"},"eSSIF-Glue")," interface to access the ",Object(r.b)(n.a,{popup:"Wallet (functional component): the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in compliance with the rules of its Principal's Wallet Policy.",reference:"/framework/docs/terms/wallet",mdxType:"Term"},"Wallet"),", ",Object(r.b)(n.a,{popup:"Holder (functional component): the capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",reference:"/framework/docs/terms/holder",mdxType:"Term"},"Holder"),", ",Object(r.b)(n.a,{popup:"Issuer (functional component): the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",reference:"/framework/docs/terms/issuer",mdxType:"Term"},"Issuer")," and ",Object(r.b)(n.a,{popup:"Verifier (functional component): the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"Verifier")," functionalities."),Object(r.b)("h3",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"The purpose of the Data Discloser component is to state the (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other Parties. A special kind of result is the (provisioning of) a credential that its Principal already has created."),Object(r.b)("h3",{id:"criteria"},"Criteria"),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Data Discloser")," is a component in the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"../essifLab-fw-func-arch"}),"eSSIF-Lab functional architecture")," that is capable of stating (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other ",Object(r.b)(n.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties"),"."),Object(r.b)("h3",{id:"functionality"},"Functionality"),Object(r.b)("p",null,"Typically, and at any point in time, Parties are capable of expressing statements about entities that they know to exist. They could express statements about individuals, about themselves, the state of transactions, and so on. We will use the term '",Object(r.b)("strong",{parentName:"p"},"%subject% (of a statement of a Party)"),"' to refer to the entity that this Party knows to exist, and about whom/which the statement has been made."),Object(r.b)("p",null,"We will use the term '",Object(r.b)("strong",{parentName:"p"},"subject-id (of a statement of a Party)"),"' to refer to the representation that this Party has chosen to use for referring to the ",Object(r.b)(n.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," in said statement. A subject-id must have the property of being an identifier within every administrative context that this Party uses. It need not be humanly interpretable (and preferably is not)."),Object(r.b)("p",null,"Parties need to specify the kinds of credentials they are willing to issue, the class of entities (e.g. people, cars, Organizations) for which it will issue them, and the information schema (structure) that it will use in credentials of such kinds.",Object(r.b)("sup",Object(s.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(s.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," This allows the Data Discloser to construct data objects that conform to this information schema, and present it to the Issuer component for actual issuing."),Object(r.b)("p",null,"The Data Discloser Issuing Policy specifies the kinds of (linked-)data-objects that credentials may be created for. This allows the Data Discloser to construct such a (linked-)data-objects for every subject-id that identifies a ",Object(r.b)(n.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," of the class for which a credential can be issued, which can subsequently be sent to the Issuer component that can turn it into a credential of a specific sort."),Object(r.b)("p",null,"You can think of the Data Discloser as the component that pulls all data together that can be put in a credential (e.g. in a passport), and the Issuer as the component that puts the data in an (empty) passport, and signing it so as to create the actual credential."),Object(r.b)("p",null,"The Data Discloser may either push credential data to the Issuer component, so that the Issuer always has up-to-date credentials, or it can wait until the Issuer requests credential data for the creation of a credential of a specific type for a specific ",Object(r.b)(n.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"."),Object(r.b)("hr",null),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(s.a)({parentName:"ol"},{id:"fn-1"}),"We assume/stipulate that the Party maintains a credential catalogue that contains this, and other information about every kind of credential that it issues, and that such catalogues are available to other Parties that want or need to use such credentials.",Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}h.isMDXComponent=!0}}]);