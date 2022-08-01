"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[3710],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),r=a(7294),i=a(6010),o=a(2389),l=a(7392),s=a(7094),d=a(2466),p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a,o=e.lazy,c=e.block,h=e.defaultValue,m=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),v=w.tabGroupChoices,x=w.setTabGroupChoices,T=(0,r.useState)(y),C=T[0],E=T[1],I=[],D=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=v[f];null!=_&&_!==C&&N.some((function(e){return e.value===_}))&&E(_)}var A=function(e){var t=e.currentTarget,a=I.indexOf(t),n=N[a].value;n!==C&&(D(t),E(n),null!=f&&x(f,String(n)))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var i,o=I.indexOf(e.currentTarget)-1;a=null!=(i=I[o])?i:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},k)},N.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:A,onClick:A},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},820:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return c},assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(5488),a(5162),["components"]),l={id:"ctext-pattern",title:"Curated Texts of type `Pattern`",sidebar_label:"Patterns"},s=void 0,d={unversionedId:"tev2/ctext-pattern",id:"tev2/ctext-pattern",title:"Curated Texts of type `Pattern`",description:"text to mark",source:"@site/docs/tev2/ctext-pattern.md",sourceDirName:"tev2",slug:"/tev2/ctext-pattern",permalink:"/framework/docs/tev2/ctext-pattern",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/ctext-pattern.md",tags:[],version:"current",frontMatter:{id:"ctext-pattern",title:"Curated Texts of type `Pattern`",sidebar_label:"Patterns"},sidebar:"tev2SideBar",previous:{title:"Concepts",permalink:"/framework/docs/tev2/ctext-concept"},next:{title:"Various Identifiers",permalink:"/framework/docs/tev2/various-identifiers"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Header",id:"header",level:2},{value:"Body",id:"body",level:2}],c=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},h={toc:u,Mark:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"This document specifies what specifics of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," that describe ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),". The reader is assumed to be familiar with the ",(0,i.kt)("a",{parentName:"p",href:"ctext"},"generic structure of a curated text"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"Pattern")," is a description, both casual and formal, of a set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," (ideas), ",(0,i.kt)("a",{parentName:"p",href:"@"},"relations")," between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic."),(0,i.kt)("p",null,"Typically, people may find such a 'way of thinking' not very easy to understand; it is very likely to require (some of) them to -literally- 'change their minds'."),(0,i.kt)("p",null,"A good description helps ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," to 'change their minds', at least within the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," within the ",(0,i.kt)("a",{parentName:"p",href:"@"},"pattern")," is defined. It is particularly helpful when such a description is supported with good descriptions and ",(0,i.kt)("a",{parentName:"p",href:"@"},"definitions")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," and ",(0,i.kt)("a",{parentName:"p",href:"@"},"relations")," that it uses."),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("p",null," In this section, we describe the header fields that are specific for ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present as a header field."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"term")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is the name of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"pattern")," in (human readable) texts. It is typically used to represent the ",(0,i.kt)("a",{parentName:"td",href:"@"},"pattern")," itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),".",(0,i.kt)("br",null),'Examples: "Party, Actor, Action pattern"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"@"},"Tag")," by which this pattern can be ",(0,i.kt)("a",{parentName:"td",href:"@"},"identified")," within the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," in which it is specified")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a complete Pattern Header"),(0,i.kt)(c,{mdxType:"Mark"},"Revise the YAML code below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n"))),(0,i.kt)("h2",{id:"body"},"Body"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown")," body consists of one or more sections that each have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"heading"),", optionally followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#heading-ids"},"heading id"),". We provide suggestions for a variety of sections, that we think help ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," get a good understanding of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," that is described."),(0,i.kt)("p",null,"We have placed the suggestions in an order that we think makes for good reading. However, if you think otherwise, you are free to change this order, leave out sections, and/or add your own."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend (and suggestions for using your own headings)"),(0,i.kt)("p",null,"The body is expected to consist of sections of text, for which we provide suggestions for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"section headings"),". A section consists of a header and further text, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"## <Heading> {#<trait>}\n\nfurther text goes here.\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," is important, as authors can use it in a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term ref")," to refer to this particular section. Therefore, you SHOULD stick to the suggestions for the ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," if you write such a section."),(0,i.kt)("p",null,"The table that contains the suggestions has the following columns:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Heading")," shows a name we suggest for a particular section. If you use this suggestion, you do not need to also provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"Heading ID")," (because it is automatically arranged for)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"trait")," specifies the text to be used as a ",(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/extended-syntax/#heading-id"},"heading id")," in the case that the author of the section decides to use a different heading as the one that is suggested."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Description")," describes the kinds of content you may want to put in the section, and what ",(0,i.kt)("a",{parentName:"li",href:"@"},"readers")," expect that they would know, or could do after having read the text."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Heading"),(0,i.kt)("th",{parentName:"tr",align:null},"trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes why the ",(0,i.kt)("a",{parentName:"td",href:"@"},"pattern")," is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What ",(0,i.kt)("a",{parentName:"td",href:"@essif-lab"},"objectives")," does it help realize? Why is this ",(0,i.kt)("a",{parentName:"td",href:"@"},"pattern")," relevant within its scope of definition?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Introduction"),(0,i.kt)("td",{parentName:"tr",align:null},"introduction"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that gently introduces the ",(0,i.kt)("a",{parentName:"td",href:"@"},"pattern")," and its context to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," - preferably in casual terms. You can state whatever you think your audience needs to keep on reading and, ultimately, change their minds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Informal Description"),(0,i.kt)("td",{parentName:"tr",align:null},"informal-description"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"pattern")," in a colloquial way, meant to ensure the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," will not face any surprises if she continues to read to the more formal parts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Formal Description"),(0,i.kt)("td",{parentName:"tr",align:null},"formal-description"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"pattern")," in a formal way, possibly with a figure and formal notations. This text would enable people to create formal models, e.g. in RDFS, OWL or other semantic languages.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notes"),(0,i.kt)("td",{parentName:"tr",align:null},"notes"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that may be of importance to ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers"),", but that doesn't fit anywhere else.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"References"),(0,i.kt)("td",{parentName:"tr",align:null},"references"),(0,i.kt)("td",{parentName:"tr",align:null},"List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate.")))))}m.isMDXComponent=!0}}]);