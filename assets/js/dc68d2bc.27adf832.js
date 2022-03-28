"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6383],{8938:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return d}});var o=a(7462),r=a(3366),i=(a(7294),a(3905)),n=a(4345),s=["components"],c={id:"data-collector",title:"Data Collector",scopeid:"essifLab",displayed_sidebar:"essifLabSideBar",type:"concept",typeid:"data-collector",symphrase:"data-collector%{ss}",stage:"draft",hoverText:"Data Collector: a functional component that is capable of collecting data from various Parties in the context of some Business Transaction, and Validating this data for the purpose of making one (or more) decision(s).",glossaryText:"a functional component that is capable of collecting data from various %%parties^party%% in the context of some %%business transaction^transaction%%, and %%validating^validate%% this data for the purpose of making one (or more) decision(s).",date:20210601},l=void 0,h={unversionedId:"terms/data-collector",id:"terms/data-collector",title:"Data Collector",description:"Short Description",source:"@site/docs/terms/data-collector.md",sourceDirName:"terms",slug:"/terms/data-collector",permalink:"/framework/docs/terms/data-collector",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/data-collector.md",tags:[],version:"current",frontMatter:{id:"data-collector",title:"Data Collector",scopeid:"essifLab",displayed_sidebar:"essifLabSideBar",type:"concept",typeid:"data-collector",symphrase:"data-collector%{ss}",stage:"draft",hoverText:"Data Collector: a functional component that is capable of collecting data from various Parties in the context of some Business Transaction, and Validating this data for the purpose of making one (or more) decision(s).",glossaryText:"a functional component that is capable of collecting data from various %%parties^party%% in the context of some %%business transaction^transaction%%, and %%validating^validate%% this data for the purpose of making one (or more) decision(s).",date:20210601},sidebar:"essifLabSideBar"},p={},d=[{value:"Short Description",id:"short-description",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Functionality",id:"functionality",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Deprecated - TVE Functionality",id:"deprecated---tve-functionality",level:3},{value:"Notes:",id:"notes",level:3}],f={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"short-description"},"Short Description"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Data Collector")," is an (architectural) function (a functional component in the ",(0,i.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture"),") that a ",(0,i.kt)(n.Z,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," may use to collect sufficient and ",(0,i.kt)(n.Z,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"validated")," data for deciding whether or not a request (typically for a product or a service) is to be serviced."),(0,i.kt)("h3",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"The purpose of a Data Collector is to collect sufficient and ",(0,i.kt)(n.Z,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"validated")," data that eneables (an ",(0,i.kt)(n.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of) its ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal")," to decide whether or not some request (typically for a product or a service) is to be serviced."),(0,i.kt)("h3",{id:"functionality"},"Functionality"),(0,i.kt)("p",null,"A data collector typically starts to collect data when it receives a request (e.g. to provide a product or service). The reception of such a request triggers the creation of a new ",(0,i.kt)(n.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"business transaction"),". The task of the data collector is to collect ",(0,i.kt)(n.Z,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"validated")," data that is sufficient for making a commitment decision (or, as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Design_%26_Engineering_Methodology_for_Organizations"},"DEMO")," calls it: a 'promise' or 'quit' decision.)"),(0,i.kt)("p",null,"Starting the data collection for a transaction does NOT imply that the identity of the ",(0,i.kt)(n.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," from whom/which the request originated, is established (or authenticated). It also does NOT imply that the identity of the ",(0,i.kt)(n.Z,{popup:"Peer Party (of another Party that is a participant in a Business Transaction): a Party that also participates in that Business Transaction.",reference:"/framework/docs/terms/peer-party",mdxType:"Term"},"peer party")," is established (or authenticated). The data collector simply proceeds to collect a sufficient amount of data such that the associated decision can be made, according to the rules, working-instructions and other guidance provided by its ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal's")," ",(0,i.kt)(n.Z,{popup:"Data Collector Policy: a Digital Policy that enables an operational Data Collector component to function in accordance with the Objectives of its Principal",reference:"/framework/docs/terms/data-collector-policy",mdxType:"Term"},"data collector policy"),". Such data may include identity data, but it also may not."),(0,i.kt)("p",null,"Starting the data collection for a transaction implies that the data collector informs the ",(0,i.kt)(n.Z,{popup:"Data Discloser: a functional component that is capable of disclosing data to (Agents of) other Parties, e.g. in the form of Credentials.",reference:"/framework/docs/terms/data-discloser",mdxType:"Term"},"data discloser component")," about the ",(0,i.kt)(n.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"transaction")," that has just started, and the kind of that transaction. This allows the ",(0,i.kt)(n.Z,{popup:"Data Discloser: a functional component that is capable of disclosing data to (Agents of) other Parties, e.g. in the form of Credentials.",reference:"/framework/docs/terms/data-discloser",mdxType:"Term"},"data discloser component")," to process requests for data from ",(0,i.kt)(n.Z,{popup:"Peer Agent (of some other Agent in a Communication Session): the Agent with whom/which this other Agent is communicating in that Communication Session.",reference:"/framework/docs/terms/peer-agent",mdxType:"Term"},"peer agents"),(0,i.kt)("sup",{parentName:"p",id:"fnref-1x"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1x",className:"footnote-ref"},"1x"))),(0,i.kt)("p",null,"All guidance that the data collector needs to collect the necessary and ",(0,i.kt)(n.Z,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"validated")," data to make that decision is provided by the ",(0,i.kt)(n.Z,{popup:"Data Collector Policy: a Digital Policy that enables an operational Data Collector component to function in accordance with the Objectives of its Principal",reference:"/framework/docs/terms/data-collector-policy",mdxType:"Term"},"data collector policy")," that has been established by the data collector's ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal"),". Such a policy includes e.g. the kinds of data (and meta-data) required to make these kinds of decisions, criteria to distinguish between data that is ",(0,i.kt)(n.Z,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"valid")," and data that is not, any data conversions that may be needed, etc."),(0,i.kt)("p",null,"A data collector may multi-task, i.e. simultaneously/asynchronously collect data for multiple ",(0,i.kt)(n.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"transactions"),". To organize this, messages that are exchanged with ",(0,i.kt)(n.Z,{popup:"Peer Agent (of some other Agent in a Communication Session): the Agent with whom/which this other Agent is communicating in that Communication Session.",reference:"/framework/docs/terms/peer-agent",mdxType:"Term"},"peer agents")," must contain an identifier that allows the data collector and its peer agents to identify the transaction to which each message belongs."),(0,i.kt)("p",null,"During the time in which a data collector is collecting data for a specific ",(0,i.kt)(n.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"transaction"),", it may choose to setup, accept, and tear down ",(0,i.kt)(n.Z,{popup:"Communication Session: a time interval during which two Actors have an established Communication Channel that does not exist outside of that time interval.",reference:"/framework/docs/terms/communication-session",mdxType:"Term"},"communication sessions")," with any ",(0,i.kt)(n.Z,{popup:"Actor: Entity that can act (do things/execute Actions), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors"),", if that is appropriate. This allows requests for data to be sent to different kinds of ",(0,i.kt)(n.Z,{popup:"Peer Party (of another Party that is a participant in a Business Transaction): a Party that also participates in that Business Transaction.",reference:"/framework/docs/terms/peer-party",mdxType:"Term"},"peer party"),"-",(0,i.kt)(n.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents"),", e.g. human or ",(0,i.kt)(n.Z,{popup:"Digital Agent: an Agent in the digital world (e.g. a running app, or a web-server that is executing an Action for a specific Party (its Principal)).",reference:"/framework/docs/terms/digital-agent",mdxType:"Term"},"digital")," agents. However, the data collector then must ensure that every of these ",(0,i.kt)(n.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents")," are all ",(0,i.kt)(n.Z,{popup:"Colleagues: two or more (digital or non-digital) Agents that have the same Principal (i.e. Party on whose behalf they exeucte Actions).",reference:"/framework/docs/terms/colleague",mdxType:"Term"},"colleagues"),", i.e. have the ",(0,i.kt)(n.Z,{popup:"Peer Party (of another Party that is a participant in a Business Transaction): a Party that also participates in that Business Transaction.",reference:"/framework/docs/terms/peer-party",mdxType:"Term"},"peer party")," as their ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal"),"."),(0,i.kt)("p",null,"A data collector benefits from generic APIs or (G)UIs that allow it to simply ask for the data that it requires. Specifically for SSI, the data collector uses the ",(0,i.kt)(n.Z,{popup:"eSSIF-Glue: interface layer that allows components with Transaction Data Collector and/or Transaction Data Discloser functionality to use the Wallet, Holder, Issuer and Verifier functionalities.",reference:"/framework/docs/terms/essif-glue",mdxType:"Term"},"eSSIF-Glue")," interface to access the ",(0,i.kt)(n.Z,{popup:"Verifier (functional component): the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/framework/docs/terms/verifier",mdxType:"Term"},"Verifier")," functionalities."),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Data Collector")," is a functional component in the ",(0,i.kt)("a",{parentName:"p",href:"../essifLab-fw-func-arch"},"eSSIF-Lab functional architecture")," that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"services requests by ",(0,i.kt)(n.Z,{popup:"Digital Agent: an Agent in the digital world (e.g. a running app, or a web-server that is executing an Action for a specific Party (its Principal)).",reference:"/framework/docs/terms/digital-agent",mdxType:"Term"},"digital")," and non-digital ",(0,i.kt)(n.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents"),", for providing a product or service, thereby starting a ",(0,i.kt)(n.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"transaction"),";"),(0,i.kt)("li",{parentName:"ul"},"can setup, accept and tear-down communication channels of various kinds, with ",(0,i.kt)(n.Z,{popup:"Digital Colleagues: two or more Digital Agents that all have the same Principal (i.e. Party on whose behalf they exeucte Actions).",reference:"/framework/docs/terms/digital-colleague",mdxType:"Term"},"digital")," and/or non-digital ",(0,i.kt)(n.Z,{popup:"Colleagues: two or more (digital or non-digital) Agents that have the same Principal (i.e. Party on whose behalf they exeucte Actions).",reference:"/framework/docs/terms/colleague",mdxType:"Term"},"colleagues")," of that ",(0,i.kt)(n.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"requesting agent"),",",(0,i.kt)("sup",{parentName:"li",id:"fnref-peer-agents"},(0,i.kt)("a",{parentName:"sup",href:"#fn-peer-agents",className:"footnote-ref"},"peer-agents"))," as appropriate for the data exchanges that are needed to conduct the transactions;"),(0,i.kt)("li",{parentName:"ul"},"can use any appropriate communication channel with a ",(0,i.kt)(n.Z,{popup:"Peer Agent (of some other Agent in a Communication Session): the Agent with whom/which this other Agent is communicating in that Communication Session.",reference:"/framework/docs/terms/peer-agent",mdxType:"Term"},"peer-agent")," to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"request for data that, according to the ",(0,i.kt)(n.Z,{popup:"Data Collector Policy: a Digital Policy that enables an operational Data Collector component to function in accordance with the Objectives of its Principal",reference:"/framework/docs/terms/data-collector-policy",mdxType:"Term"},"Data Collector Policy")," is needed to decide whether or not to commit to the transaction;"),(0,i.kt)("li",{parentName:"ul"},"process the responses to such requests, in an orchestrated way, thereby complying with the rules of its  ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal's")," ",(0,i.kt)(n.Z,{popup:"Data Collector Policy: a Digital Policy that enables an operational Data Collector component to function in accordance with the Objectives of its Principal",reference:"/framework/docs/terms/data-collector-policy",mdxType:"Term"},"Data Collector Policy"),", the result of which (in the end) is a set of ",(0,i.kt)(n.Z,{popup:"Validate/validation of data: the act, by or on behalf of a Party, of determining whether or not that data is valid to be used for some specific purpose(s) of that Party.",reference:"/framework/docs/terms/validate",mdxType:"Term"},"validated")," data that can serve the purpose of deciding whether or not to commit to the transaction;"),(0,i.kt)("li",{parentName:"ul"},"receive similar requests from its ",(0,i.kt)(n.Z,{popup:"Peer Party (of another Party that is a participant in a Business Transaction): a Party that also participates in that Business Transaction.",reference:"/framework/docs/terms/peer-party",mdxType:"Term"},"peer-party"),", and respond to such requests in compliance with the rules of its  ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal's")," ",(0,i.kt)(n.Z,{popup:"Data Collector Policy: a Digital Policy that enables an operational Data Collector component to function in accordance with the Objectives of its Principal",reference:"/framework/docs/terms/data-collector-policy",mdxType:"Term"},"Data Collector Policy"),";"))),(0,i.kt)("li",{parentName:"ul"},"has a mechanism to ensure that within a ",(0,i.kt)(n.Z,{popup:"Transaction: the exchange of goods, services, funds, or data between some Parties (called Participants of the Transaction).",reference:"/framework/docs/terms/transaction",mdxType:"Term"},"transaction"),", it uses the latest (most receent) ",(0,i.kt)(n.Z,{popup:"Data Collector Policy: a Digital Policy that enables an operational Data Collector component to function in accordance with the Objectives of its Principal",reference:"/framework/docs/terms/data-collector-policy",mdxType:"Term"},"Data Collector Policy")," of its ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal"),".")),(0,i.kt)("h3",{id:"deprecated---tve-functionality"},"Deprecated - TVE Functionality"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The text below needs to be revised.\nThis section is the old text of what was called the Transaction Validation Engine.\nIt will be deleted in the (near?) future."))),(0,i.kt)("p",null,"Typically, the Data Collector would start a transaction either"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when it receives a request from some Agent of another Party for engaging in a transaction of a specific kind."),(0,i.kt)("li",{parentName:"ul"},"when it is instructed by, or on behalf of its Principal, to request a specific kind of transaction to some Agent of another Party.",(0,i.kt)("sup",{parentName:"li",id:"fnref-one"},(0,i.kt)("a",{parentName:"sup",href:"#fn-one",className:"footnote-ref"},"one")))),(0,i.kt)("p",null,"In either case, a transaction form (object, context) has to be created that matches the kind of transaction, and a '",(0,i.kt)("strong",{parentName:"p"},"transaction-id"),"' must be generated that identifies this form/object/context. It will be used for binding incoming or outgoing messages to this transaction, enabling communications to remain congruent, not only with the Agent that requested the transaction, but also with other Agents from the same Principal and/or using different communication channels."),(0,i.kt)("p",null,"Handling/managing the various communication channels through which data can be exchanged is also a task of the Data Collector",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". One reason for this is that negotiating a transaction not only requires data to be acquired, but also to be provided to the peer participant. Another reason is that the peer participant may use multiple Agents to provide such data, e.g. human Agents (that might use web-browsers, social-media apps, phones, or physical visits), SSI Agents (that use the SSI infrastructure), or other electronic Agents (e.g. services that can provide data when appropriate permissions are submitted - e.g. user consent tokens)."),(0,i.kt)("p",null,"Thus, the Data Collector is generally considered capable of obtaining data through different communication channels. However, the technical tracks of eSSIF-Lab will exclusively focus on the communication channel through which credentials can be requested and obtained. Any extensions or business productization of Data Collector designs may be considered in the business tracks of eSSIF-Lab. The latter is not considered any further in this section."),(0,i.kt)("p",null,"In order to acquire data through SSI mechanisms for filling in a form for a specific kind of transaction, the Data Collector needs to know what kinds of credentials it should ask for, which Parties its Principal trusts to issue such credentials, what kinds of verification proofs for such credentials must hold and which may be disregarded.",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," Also, when the Data Collector gets a credential that satisfies the necessary verification proofs, it needs a way to map the contents of that credential to the structure of the transaction context that is used internally by (other systems of) its Principal.",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," Also, as the Data Collector gets more and more data - which it may get through multiple, different channels - it needs to determine whether or not the resulting set is sufficiently consistent and coherent.",(0,i.kt)("sup",{parentName:"p",id:"fnref-5"},(0,i.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))),(0,i.kt)("p",null,"In order to make the Data Collector work, a Validation Policy (or Data Collector Policy) is created by, or on behalf of its Principal, which specifies at least:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the kinds of transactions the Principal is willing to (electronically) engage in, from both the requester and the provider perspectives;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for each such transaction type:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the criteria (business rules) that should be used to determine that the form is 'clean', i.e. that the necessary and sufficient data have been obtained and that they are consistent, coherent, and suitable for making a transaction commitment decision.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the kinds of credentials and issuers that the Principal is willing to accept as sources for valid data; (optionally?), the endpoint URI at which issuing Parties do the actual credential issuing may be specified",(0,i.kt)("sup",{parentName:"p",id:"fnref-6"},(0,i.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for each kind of credential: the verification proofs that must hold to be accepted as a source for valid data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the mapping between fields in such credentials and fields in the form to be filled in."))))),(0,i.kt)("p",null,"The Policy must be designed in such a way that it is extendable as new features will be called for in the future."),(0,i.kt)("p",null,"The ability to create new transaction contexts and the availability of the Data Collector Policy enable the Data Collector to request the Verifier component of its Principal to obtain credentials of the types that it can use to fill in the transaction form when they satisfy the verification and validation requirements of its Principal.",(0,i.kt)("sup",{parentName:"p",id:"fnref-7"},(0,i.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7"))),(0,i.kt)("p",null,"When the Verifier returns such data (which comes with a list of proofs that the Verifier has checked), the Data Collector must then validate that data, i.e. determine whether or not it is valid for the specific transaction it is assembling the data for. The validation rules are Party-specific and hence come from the Data Collector policy. For simple cases, validation can simply consist of checking whether or not all verification proofs succeeded. At the other end of the validation spectrum, the Data Collector itself must make validation decisions, either electronically (according to the Data Collector policy) or by 'outsourcing' such decisions to human Agents of its Principal by providing an appropriate validation user interface."),(0,i.kt)("p",null,"As long as data is needed, the Data Collector can intermittently request the verifier to produce it (or it can use other communication channels, which is outside scope for now). It does so until it times out, or the form has become 'clean'."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"notes"},"Notes:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Footnote markers need to be revised"))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1x"},"In the same way that the data collector needs to collect data in order to be able to decide whether or not to commit, ",(0,i.kt)(n.Z,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents")," of the ",(0,i.kt)(n.Z,{popup:"Peer Party (of another Party that is a participant in a Business Transaction): a Party that also participates in that Business Transaction.",reference:"/framework/docs/terms/peer-party",mdxType:"Term"},"peer party")," need to collect data for making a similar commitment decision. Requests for such data are to be processed by the ",(0,i.kt)(n.Z,{popup:"Data Discloser: a functional component that is capable of disclosing data to (Agents of) other Parties, e.g. in the form of Credentials.",reference:"/framework/docs/terms/data-discloser",mdxType:"Term"},"data discloser component")," under guidance of its ",(0,i.kt)(n.Z,{popup:"Data Discloser Policy: a Digital Policy that enables an operational Data Discloser component to function in accordance with the Objectives of its Principal.",reference:"/framework/docs/terms/data-discloser-policy",mdxType:"Term"},"data-discloser-policy"),".",(0,i.kt)("a",{parentName:"li",href:"#fnref-1x",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-peer-agents"},"Note that such agents have then become so-called ",(0,i.kt)(n.Z,{popup:"Peer Agent (of some other Agent in a Communication Session): the Agent with whom/which this other Agent is communicating in that Communication Session.",reference:"/framework/docs/terms/peer-agent",mdxType:"Term"},"peer-agents")," (of the Data Collector) for that specific transaction. Also, the (single!) ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal")," of these ",(0,i.kt)(n.Z,{popup:"Peer Agent (of some other Agent in a Communication Session): the Agent with whom/which this other Agent is communicating in that Communication Session.",reference:"/framework/docs/terms/peer-agent",mdxType:"Term"},"peer-agents")," is the ",(0,i.kt)(n.Z,{popup:"Peer Party (of another Party that is a participant in a Business Transaction): a Party that also participates in that Business Transaction.",reference:"/framework/docs/terms/peer-party",mdxType:"Term"},"peer-party")," of the ",(0,i.kt)(n.Z,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principal")," of the Data Collector (again, for that specific transaction).",(0,i.kt)("a",{parentName:"li",href:"#fnref-peer-agents",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"It may well be that this functionality can somehow be split off in the (near) future.",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"For high-value transactions, verification proofs are more important than for low-value transactions. This is to be decided by the Principal of the Data Collector. An example from the physical world: in order to obtain a visa for China, it is required that your passport (credential) remains valid for 3 months after the end of your visit. But in order to identify yourself at the reception desk of a hotel, your passport may have expired several years.",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"For example, a credential that contains an address uses a specific schema to specify addresses, e.g. the 'PostalAddress' as defined by schema.org. This schema differs quite a bit from that of Dutch addresses as ",(0,i.kt)("a",{parentName:"li",href:"https://bag.basisregistraties.overheid.nl/def/bag"},(0,i.kt)("em",{parentName:"a"},"defined"))," by the official (authentic) Dutch Registration of Addresses and Buildings (BAG). It may also well differ from the structure of addresses that databases of the Principal have implemented. Mapping allows such cases to be accommodated for.",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-5"},"Inconsistent or incoherent data is necessary for various purposes. First, it allows for correct further processing of the transaction. A non-existent postal code, or one that doesn't match the delivery address, may hinder a fluent transaction processing, resulting in additional costs and processing times. Another purpose is the early warning or detection of possible fraud/abuse. Remember that part of the data is being asked for reducing transaction risk, and checking consistency/coherence of such data is part of the risk mitigation process.",(0,i.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-6"},"This enables the Data Collector to pass the endpoint URI on to the Verifier when it requests for such a credential, which in turn can send it to the holder of other Parties enabling them to obtain the credential from that issuer endpoint if that other Party does not have that credential in its wallet. The endpoint URI can in fact be put in the policy, because the (human) Agent that creates/maintains the policy would need to know that the issuing Party is actually issuing such credentials, what their contents means, etc., and hence is capable of tracking down the URI where that Party issues the credentials.",(0,i.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-7"},"A reference to this specification will be added when it becomes available (draft or otherwise).",(0,i.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);