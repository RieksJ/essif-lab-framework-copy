"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5525],{9681:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=a(3117),s=a(102),n=(a(7294),a(3905)),i=["components"],o={id:"scopetag",scope:"tev2",termtype:"concept",termid:"scopetag",formphrases:"scopetag{ss}, scope-tag{ss}",grouptags:null,status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-07-28T00:00:00.000Z"),vsntag:"v0.1",contributors:"RieksJ",isa:"tag",term:"scopetag",fullterm:"Scopetag (of/within a Scope)",shorterm:null,synonyms:null,glossaryText:"a [tag](@) that is used to [identify](@) [scopes](@) from within a specific [scope](@)",title:"Scopetag",hoverText:"Scopetag: a Tag (alphanumeric string) that is used to identify Scopes from within a specific Scope"},p=void 0,c={unversionedId:"tev2/terms/scopetag",id:"tev2/terms/scopetag",title:"Scopetag",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/terms/scopetag.md",sourceDirName:"tev2/terms",slug:"/tev2/terms/scopetag",permalink:"/framework/docs/tev2/terms/scopetag",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/terms/scopetag.md",tags:[],version:"current",frontMatter:{id:"scopetag",scope:"tev2",termtype:"concept",termid:"scopetag",formphrases:"scopetag{ss}, scope-tag{ss}",grouptags:null,status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-07-28T00:00:00.000Z",vsntag:"v0.1",contributors:"RieksJ",isa:"tag",term:"scopetag",fullterm:"Scopetag (of/within a Scope)",shorterm:null,synonyms:null,glossaryText:"a [tag](@) that is used to [identify](@) [scopes](@) from within a specific [scope](@)",title:"Scopetag",hoverText:"Scopetag: a Tag (alphanumeric string) that is used to identify Scopes from within a specific Scope"},sidebar:"tev2SideBar",previous:{title:"Term (Scoped)",permalink:"/framework/docs/tev2/terms/scoped-term"},next:{title:"Semantics",permalink:"/framework/docs/tev2/terms/semantics"}},m={},l=[{value:"Summary",id:"summary",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3},{value:"Notes",id:"notes",level:3}],h={toc:l};function u(e){var t=e.components,a=(0,s.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,n.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Scopetag")," is a ",(0,n.kt)("a",{parentName:"p",href:"@"},"tag")," that is used to ",(0,n.kt)("a",{parentName:"p",href:"@"},"identify")," ",(0,n.kt)("a",{parentName:"p",href:"@"},"scopes"),", e.g. in ",(0,n.kt)("a",{parentName:"p",href:"@"},"term refs"),"."),(0,n.kt)("p",null,"Scopetags ",(0,n.kt)("a",{parentName:"p",href:"@"},"identify")," a ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope")," (from within a given ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),"), and hence can be used (within that given ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),") to disambiguate ",(0,n.kt)("a",{parentName:"p",href:"@"},"terms"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this concept fits in with related concepts."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Scopetag")," (of/within a ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),") is a ",(0,n.kt)("a",{parentName:"p",href:"@"},"tag")," that is used within that ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope")," to ",(0,n.kt)("a",{parentName:"p",href:"@"},"identify")," itself or other ",(0,n.kt)("a",{parentName:"p",href:"@"},"scopes"),". It satisfies the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of scopetags are ",(0,n.kt)("inlineCode",{parentName:"p"},"essif-lab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"essiflab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toip"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"ctwg"),"."),(0,n.kt)("h3",{id:"notes"},"Notes"),(0,n.kt)("p",null,"Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the ",(0,n.kt)("inlineCode",{parentName:"p"},".")," character for ",(0,n.kt)("a",{parentName:"p",href:"@"},"versiontags")," might be beneficial. However, allowing a ",(0,n.kt)("inlineCode",{parentName:"p"},".")," character in a ",(0,n.kt)("a",{parentName:"p",href:"@"},"scopetag")," may cause problems with (the alternative syntax) of ",(0,n.kt)("a",{parentName:"p",href:"@"},"term refs"),", as email address in square brackets might then qualify as a ",(0,n.kt)("a",{parentName:"p",href:"@"},"term ref")," while that is very likely not the author's intention."))}u.isMDXComponent=!0}}]);