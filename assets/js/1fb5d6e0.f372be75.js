"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[4149],{634:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var n=a(3117),s=a(102),i=(a(7294),a(3905)),o=(a(4996),["components"]),r={id:"tev2-spec-gdf",title:"Glossary Definition File (GDF)",sidebar_label:"GDF (Glossary Definition File)",hide_table_of_contents:!0,scopetag:"tev2",date:20220503},l=void 0,d={unversionedId:"tev2/tev2-spec-gdf",id:"tev2/tev2-spec-gdf",title:"Glossary Definition File (GDF)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/tev2-spec-gdf.md",sourceDirName:"tev2",slug:"/tev2/tev2-spec-gdf",permalink:"/framework/docs/tev2/tev2-spec-gdf",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/tev2-spec-gdf.md",tags:[],version:"current",frontMatter:{id:"tev2-spec-gdf",title:"Glossary Definition File (GDF)",sidebar_label:"GDF (Glossary Definition File)",hide_table_of_contents:!0,scopetag:"tev2",date:20220503},sidebar:"tev2SideBar",previous:{title:"MRG (Machine Readable Glossary)",permalink:"/framework/docs/tev2/tev2-spec-mrg"},next:{title:"Terminology Construction",permalink:"/framework/docs/tev2/term-selection-criteria"}},p={},c=[{value:"Glossary Definitions",id:"glossary-definitions",level:2},{value:"HRG type <code>toip</code>",id:"hrg-type-toip",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,i.kt)("p",null,"This document specifies the contents of the Glossary Definition File (GDF)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The glossary definition file contains whatever the Glossary Generation Tool (GGT) needs to generate a (human readable) ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," from the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," machine readable glossary. Before documenting this, we do some experiments with SAFs to gain experience about the ways we should go about this stuff. The idea is to have a GGT that is capable of generation glossaries of various types, each of which has its own requirements regarding the specifications according to which it would be generated. A simple HTML glossary would typically only need some HTML code as a 'header' and as a 'footer', which can be specified as files containing tha stuff. Other, more complicated ways can then be created as needed. This file would typically specify the various kinds of glossary types."))),(0,i.kt)("h2",{id:"glossary-definitions"},"Glossary Definitions"),(0,i.kt)("p",null,"There are two ways in which a glossary definition can be specified:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"as part of the ",(0,i.kt)("a",{parentName:"li",href:"tev2-spec-saf"},"SAF"),". The SAF contains a section that specifies the ",(0,i.kt)("a",{parentName:"li",href:"@"},"glossaries")," that will be generated by default."),(0,i.kt)("li",{parentName:"ol"},"as part of a ",(0,i.kt)("a",{parentName:"li",href:"tev2-spec-gdf"},"GDF"),", i.e. a (stand-alone) file, the location of which is defined by the ",(0,i.kt)("a",{parentName:"li",href:"tev2-spec-saf"},"SAF")," as the URL of the glossaries.")),(0,i.kt)("p",null,"The structure of the actual glossary definition is always the same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"glossary": [\n  { "glossary-type": "<glossary type>"\n  , "dateformat": "(?P<year>\\\\d{4})-?(?P<month>\\\\d{2})-?(?P<day>\\\\d{2})(?:T?(?P<hour>\\\\d{2}):?(?P<minute>\\\\d{2}):?(?P<second>\\\\d{2})(?:\\\\.(?P<fraction>\\\\d+))?(?P<tzone>[+-]\\\\d{2}:\\\\d{2})?)?"\n"\n\n    ... argument list ...\n  }\n]\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  glossary: # Glossaries can be of any type supported by the Glossary Generation Tool\n  - glossary-type: <glossary type>\n    ... argument list ...\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"glossary type")," is a text string that identifies a type of glossary that the GGT is capable of generating, and ",(0,i.kt)("inlineCode",{parentName:"p"},"... argument list ...")," is a list of key-value pairs that serve as arguments for the GGT as it generates a glossary of that type. The various glossary-types and argument lists are defined in the subsequent sections"),(0,i.kt)("h2",{id:"hrg-type-toip"},"HRG type ",(0,i.kt)("inlineCode",{parentName:"h2"},"toip")),(0,i.kt)("p",null,"A Human Readable Glossary (HRG) of type ",(0,i.kt)("inlineCode",{parentName:"p"},"toip")," has the following structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"glossary": [\n  { "glossary-type": "toip",\n    "header": "toip-hrg-header.html",\n    "footer": "toip-hrg-footer.html"\n  }\n]\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  glossary: # Glossaries can be of any type supported by the Glossary Generation Tool\n  - glossary-type: toip\n    header: toip-hrg-header.html\n    footer: toip-hrg-footer.html\n")))}m.isMDXComponent=!0}}]);