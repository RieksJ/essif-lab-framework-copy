"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[8963],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),i=a(6010),o=a(2389),l=a(7392),s=a(7094),d=a(2466),p="tabList__CuJ",u="tabItem_LNqP";function h(e){var t,a,o=e.lazy,h=e.block,m=e.defaultValue,c=e.values,k=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(N,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),w=b.tabGroupChoices,x=b.setTabGroupChoices,T=(0,r.useState)(y),A=T[0],M=T[1],E=[],C=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=w[k];null!=D&&D!==A&&N.some((function(e){return e.value===D}))&&M(D)}var H=function(e){var t=e.currentTarget,a=E.indexOf(t),n=N[a].value;n!==A&&(C(t),M(n),null!=k&&x(k,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=E.indexOf(e.currentTarget)+1;a=null!=(n=E[r])?n:E[0];break;case"ArrowLeft":var i,o=E.indexOf(e.currentTarget)-1;a=null!=(i=E[o])?i:E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":h},f)},N.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return E.push(e)},onKeyDown:_,onFocus:H,onClick:H},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function m(e){var t=(0,o.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},2045:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return h},assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(5488),a(5162),["components"]),l={id:"artifact-id-placeholder",scope:"tev2",termtype:null,termid:null,formphrases:null,grouptags:null,status:null,created:null,updated:null,vsntag:null,contributors:null,title:"Title that shows on the Docusaurus page"},s=void 0,d={unversionedId:"tev2/artifact-id-placeholder",id:"tev2/artifact-id-placeholder",title:"Title that shows on the Docusaurus page",description:"text to mark",source:"@site/docs/tev2/ctext-artifact-template.md",sourceDirName:"tev2",slug:"/tev2/artifact-id-placeholder",permalink:"/framework/docs/tev2/artifact-id-placeholder",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/ctext-artifact-template.md",tags:[],version:"current",frontMatter:{id:"artifact-id-placeholder",scope:"tev2",termtype:null,termid:null,formphrases:null,grouptags:null,status:null,created:null,updated:null,vsntag:null,contributors:null,title:"Title that shows on the Docusaurus page"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Header",id:"header",level:2},{value:"Body",id:"body",level:2}],h=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},m={toc:u,Mark:h};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,i.kt)("p",null,"This document specifies what specifics of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," that describe ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," of type ",(0,i.kt)(h,{mdxType:"Mark"},(0,i.kt)("inlineCode",{parentName:"p"},"Artifact")),". The reader is assumed to be familiar with the ",(0,i.kt)("a",{parentName:"p",href:"ctext"},"generic structure of a curated text"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"Artifact")," is a ",(0,i.kt)(h,{mdxType:"Mark"},"[describe what the specific Artifact is]"),"."),(0,i.kt)("p",null,"A good description allows ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," to ",(0,i.kt)(h,{mdxType:"Mark"},"[describe what a good description does]"),"."),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("p",null," In this section, we describe the header fields that are specific for ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," of type ",(0,i.kt)(h,{mdxType:"Mark"},(0,i.kt)("inlineCode",{parentName:"p"},"Artifact")),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present as a header field."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"term")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is the name of the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," in (human readable) texts. It is typically used to represent the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),".",(0,i.kt)("br",null),"Examples: ",(0,i.kt)(h,{mdxType:"Mark"},"[Provide examples]"))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a complete ",(0,i.kt)(h,{mdxType:"Mark"},"Artifact")," Header"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"content for the YAML header needed here below"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n#\n# Heading entries that serve multiple purposes (i.e. both TEv2 and e.g. Docusaurus):\n#\nid: <Mark>Artifact</Mark>-example\n\n---\n"))),(0,i.kt)("h2",{id:"body"},"Body"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown")," body consists of one or more sections that each have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"heading"),", optionally followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#heading-ids"},"heading id"),". We provide suggestions for a variety of sections, that we think help ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," get a good understanding of the ",(0,i.kt)("a",{parentName:"p",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," that is described."),(0,i.kt)("p",null,"We have placed the suggestions in an order that we think makes for good reading. However, if you think otherwise, you are free to change this order, leave out sections, and/or add your own."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend (and suggestions for using your own headings)"),(0,i.kt)("p",null,"The body is expected to consist of sections of text, for which we provide suggestions for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"section headings"),". A section consists of a header and further text, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"## <Heading> {#<trait>}\n\nfurther text goes here.\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," is important, as authors can use it in a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term ref")," to refer to this particular section. Therefore, you SHOULD stick to the suggestions for the ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," if you write such a section."),(0,i.kt)("p",null,"The table that contains the suggestions has the following columns:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Heading")," shows a name we suggest for a particular section. If you use this suggestion, you do not need to also provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"Heading ID")," (because it is automatically arranged for)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"trait")," specifies the text to be used as a ",(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/extended-syntax/#heading-id"},"heading id")," in the case that the author of the section decides to use a different heading as the one that is suggested."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Description")," describes the kinds of content you may want to put in the section, and what ",(0,i.kt)("a",{parentName:"li",href:"@"},"readers")," expect that they would know, or could do after having read the text."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Heading"),(0,i.kt)("th",{parentName:"tr",align:null},"trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Summary"),(0,i.kt)("td",{parentName:"tr",align:null},"summary"),(0,i.kt)("td",{parentName:"tr",align:null},"A short description of the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," that explains it to a layperson with reasonable accuracy, so that ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers")," stand a good chance of determining what qualifies, and what does not qualify as in instance (example) of that ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact")),". The first complete sentence in the description SHOULD be able to serve as an informal ",(0,i.kt)("a",{parentName:"td",href:"@"},"definition"),". The first complete paragraph SHOULD be a text that is usable to describe the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," as an entry in a ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),". Additional sentences and paragraphs might expand or clarify.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes why the ",(0,i.kt)(h,{mdxType:"Mark"},"Artifact")," is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What ",(0,i.kt)("a",{parentName:"td",href:"@essif-lab"},"objectives")," does it help realize? Why is this ",(0,i.kt)(h,{mdxType:"Mark"},"Artifact")," relevant within its scope of definition?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Patterns"),(0,i.kt)("td",{parentName:"tr",align:null},"patterns"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that uses ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," to refer the interested ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," to ",(0,i.kt)("a",{parentName:"td",href:"@"},"mental models")," for this this ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," is relevant, or that provide more context for the proper use of this ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact")),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Criteria"),(0,i.kt)("td",{parentName:"tr",align:null},"criteria"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that enables a ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," to make the precise same distinction as you (the author of this text) do, as to what is, and what is not an instance (example) of this ",(0,i.kt)(h,{mdxType:"Mark"},"Artifact"),". This text SHOULD serve as the ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions"},"intensional definition")," of the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact")),", i.e. the necessary and sufficient conditions for when the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term")," associated with this ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," should be used. Writing such a text is not easy when it is done meticulously. However, if done properly, it makes that the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," becomes crystal clear, not only for the ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers"),", but for you (the author) as well.",(0,i.kt)("br",null)," In the case a ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," is referred to with a noun, writing this section becomes equivalent to specifying the properties that an object needs to have in order to be counted as a referent of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"term"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Examples"),(0,i.kt)("td",{parentName:"tr",align:null},"examples"),(0,i.kt)("td",{parentName:"tr",align:null},"Text in which in which you give examples that obviously qualify as instances of the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact")),", as well as examples that do NOT obviously qualify. Also, provide examples that are not (so) obvious, but help ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers")," to better understand its ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions"},"intension"),". You may also provide texts in which you use ",(0,i.kt)("a",{parentName:"td",href:"@"},"term refs")," to refer to ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-cases")," that are provided in this (or any other) ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Background"),(0,i.kt)("td",{parentName:"tr",align:null},"background"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that (refers to text that) contains background information about the term, insofar that is relevant for the purposes that are to be served by the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope")," in which the ",(0,i.kt)("a",{parentName:"td",href:"@"},(0,i.kt)(h,{mdxType:"Mark"},"Artifact"))," has been defined.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notes"),(0,i.kt)("td",{parentName:"tr",align:null},"notes"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that may be of importance to ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers"),", but that doesn't fit anywhere else.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"References"),(0,i.kt)("td",{parentName:"tr",align:null},"references"),(0,i.kt)("td",{parentName:"tr",align:null},"List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate.")))))}c.isMDXComponent=!0}}]);