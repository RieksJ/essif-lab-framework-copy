"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2178],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(3117),n=a(7294),i=a(6010),o=a(2389),s=a(7392),p=a(7094),l=a(2466),f="tabList__CuJ",h="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,c=e.defaultValue,u=e.values,m=e.groupId,k=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=u?u:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,p.U)(),w=g.tabGroupChoices,x=g.setTabGroupChoices,T=(0,n.useState)(y),E=T[0],C=T[1],I=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=w[m];null!=A&&A!==E&&N.some((function(e){return e.value===A}))&&C(A)}var Z=function(e){var t=e.currentTarget,a=I.indexOf(t),r=N[a].value;r!==E&&(S(t),C(r),null!=m&&x(m,String(r)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=I.indexOf(e.currentTarget)+1;a=null!=(r=I[n])?r:I[0];break;case"ArrowLeft":var i,o=I.indexOf(e.currentTarget)-1;a=null!=(i=I[o])?i:I[I.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",f)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},N.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},2434:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return c},assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return d}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),o=a(4996),s=(a(5488),a(5162),["components"]),p={id:"various-identifiers",title:"Various Identifiers"},l=void 0,f={unversionedId:"tev2/various-identifiers",id:"tev2/various-identifiers",title:"Various Identifiers",description:"text to mark",source:"@site/docs/tev2/various-identifiers.md",sourceDirName:"tev2",slug:"/tev2/various-identifiers",permalink:"/framework/docs/tev2/various-identifiers",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/various-identifiers.md",tags:[],version:"current",frontMatter:{id:"various-identifiers",title:"Various Identifiers"},sidebar:"tev2SideBar",previous:{title:"Patterns",permalink:"/framework/docs/tev2/ctext-pattern"},next:{title:"Term References",permalink:"/framework/docs/tev2/tev2-spec-term-ref"}},h={},d=[{value:"Kinds of Identifiable Entities",id:"kinds-of-identifiable-entities",level:2},{value:"Knowledge Artifacts (e.g. Concepts, or mental models)",id:"knowledge-artifacts-eg-concepts-or-mental-models",level:3},{value:"Scopes",id:"scopes",level:3},{value:"Curated Texts",id:"curated-texts",level:3},{value:"Definitions",id:"definitions",level:3},{value:"Scopes",id:"scopes-1",level:3},{value:"Scopes",id:"scopes-2",level:3}],c=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},u={toc:d,Mark:c};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"TEv2")," uses various ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifiers")," for a variety of purposes. As noted in its ",(0,i.kt)("a",{parentName:"p",href:"identifier#short-description@"},"description"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifiers")," do not necessarily ",(0,i.kt)("a",{parentName:"p",href:"@"},"identify")," anything. Whether or not they do depends on the context in which they are interpreted, and the so-called 'identifiability set' (",(0,i.kt)("a",{parentName:"p",href:"https://dud.inf.tu-dresden.de/literatur/Anon_Terminology_v0.34.pdf"},"Pfitzmann and Hansen (2010)"),") or 'scope of identification' (",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3986"},"RFC3986"),"), i.e. the set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"entities")," that they supposedly ",(0,i.kt)("a",{parentName:"p",href:"@"},"identify"),"."),(0,i.kt)("p",null,"Here, we will provide a list of contexts that are relevant for ",(0,i.kt)("a",{parentName:"p",href:"@"},"TEv2"),", the ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifiers")," that are used in these contexts, and the associated 'identifiability sets'."),(0,i.kt)("p",null,"Here is a visual representation of these contexts ",(0,i.kt)(c,{mdxType:"Mark"},"futher elaboration text needed here, and the picture below has to be created as well"),"."),(0,i.kt)("img",{alt:"TEv2 Contexts and Identifiers",src:(0,o.Z)("images/tev2-overview-enhanced-term.png")}),(0,i.kt)("h2",{id:"kinds-of-identifiable-entities"},"Kinds of Identifiable Entities"),(0,i.kt)("p",null,"We distinguish between the following kinds of ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifiable")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"entities"),":"),(0,i.kt)("h3",{id:"knowledge-artifacts-eg-concepts-or-mental-models"},(0,i.kt)("a",{parentName:"h3",href:"@"},"Knowledge Artifacts")," (e.g. ",(0,i.kt)("a",{parentName:"h3",href:"@"},"Concepts"),", or ",(0,i.kt)("a",{parentName:"h3",href:"@"},"mental models"),")"),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," resides in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"party")," (e.g. a ",(0,i.kt)("a",{parentName:"p",href:"@"},"community"),"), which typically has defined a ",(0,i.kt)("a",{parentName:"p",href:"@"},"semantics"),", i.e. a mapping between such ",(0,i.kt)("a",{parentName:"p",href:"knowledge-artifact@"},"artifacts")," and the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," that represent them (see the ",(0,i.kt)(c,{mdxType:"Mark"},"specify the pattern that explains this further"),"). ",(0,i.kt)("a",{parentName:"p",href:"@"},"Communities")," may have a so-called ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms-community")," that will ",(0,i.kt)("a",{parentName:"p",href:"@"},"curate")," these ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms"),", and establish the associated ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"community")," (or ",(0,i.kt)("a",{parentName:"p",href:"@"},"party"),") that is committed to use a certain ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," can use the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," contained therein to represent (and ",(0,i.kt)("a",{parentName:"p",href:"@"},"identify"),") the various ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," in its ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge"),"."),(0,i.kt)("p",null,"Other ",(0,i.kt)("a",{parentName:"p",href:"@"},"parties")," must use tuples { ",(0,i.kt)("inlineCode",{parentName:"p"},"<scopeidentifier>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<versionidentifier>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"term")," } to refer to such artifacts, where ",(0,i.kt)("inlineCode",{parentName:"p"},"<scopeidentifier>")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," that contains the version (as ",(0,i.kt)("a",{parentName:"p",href:"@"},"identified")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"<versionidentifier>"),") of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," that contains the ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),", which represents a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),"."),(0,i.kt)("h3",{id:"scopes"},(0,i.kt)("a",{parentName:"h3",href:"@"},"Scopes")),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," contains a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"(scoped) terms"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts"),", various kinds of ",(0,i.kt)("a",{parentName:"p",href:"@"},"tags"),", and more. Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," has defined a ",(0,i.kt)("a",{parentName:"p",href:"@"},"(scope)tag")," by which it refers to itself (which is defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://essif-lab.github.io/framework/docs/tev2/tev2-spec-saf#terminology"},(0,i.kt)("inlineCode",{parentName:"a"},"scope"),"-section")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". The ",(0,i.kt)("a",{parentName:"p",href:"https://essif-lab.github.io/framework/docs/tev2/tev2-spec-saf#scopes"},(0,i.kt)("inlineCode",{parentName:"a"},"scopes"),"-section")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," defines the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetags")," that are used to refer to other ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes")," from within this ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("p",null,"Since every ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes")," must have precisely one ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," (that contains the tangible artifacts associated with that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"), one can also use the URI of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," to refer to that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("h3",{id:"curated-texts"},(0,i.kt)("a",{parentName:"h3",href:"@"},"Curated Texts")),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," is stored as a file in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," of a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". Thus, it can be identified through a ","[URI]"," that points to this file. The drawback here is that while all ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," in a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," must reside in a specific directory (as ",(0,i.kt)("a",{parentName:"p",href:"https://essif-lab.github.io/framework/docs/tev2/tev2-spec-saf#terminology"},"specified in the ",(0,i.kt)("inlineCode",{parentName:"a"},"curatedir")," field")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),")), it might also reside in one of its (sub)subdirectories. They  way in which the files that contain ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," may be organized (grouped) may differ from ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," to ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," consists of a header (and a body); the header includes ",(0,i.kt)("a",{parentName:"p",href:"ctext#generic-header-fields"},"generic 'header-fields'"),", one of which is the ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"-field. The contents of this field ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text"),"; there is no other ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," in (a file in) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," that has the same value in its ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"-field."),(0,i.kt)("p",null,"Alternatively, and the way of choice for ",(0,i.kt)("a",{parentName:"p",href:"tev2-toolbox"},"TEv2 tools"),", is to refer to curated texts by means of what we have come to call a ",(0,i.kt)("a",{parentName:"p",href:"@"},"termid")),(0,i.kt)("h3",{id:"definitions"},(0,i.kt)("a",{parentName:"h3",href:"@"},"Definitions")),(0,i.kt)("p",null,"By means of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scoped term")),(0,i.kt)("h3",{id:"scopes-1"},(0,i.kt)("a",{parentName:"h3",href:"@"},"Scopes")),(0,i.kt)("p",null,"By means of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopetag")),(0,i.kt)("h3",{id:"scopes-2"},(0,i.kt)("a",{parentName:"h3",href:"@"},"Scopes")),(0,i.kt)("p",null,"By means of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"versiontag")))}m.isMDXComponent=!0}}]);