(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7918],{1994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ht}});var a=n(7294),r=n(6010),l=n(1944),o=n(7524),i=n(5281),c=n(3117),s=n(5999),u=n(9960);function m(e){var t=e.permalink,n=e.title,l=e.subLabel,o=e.isNext;return a.createElement(u.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function d(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(m,(0,c.Z)({},t,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(m,(0,c.Z)({},n,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var p=n(2263),v=n(143),f=n(373),h=n(4477);var g={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=g[e.versionMetadata.banner];return a.createElement(t,e)}function E(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(u.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){var t,n=e.className,l=e.versionMetadata,o=(0,p.Z)().siteConfig.title,c=(0,v.gA)({failfast:!0}).pluginId,s=(0,f.J)(c).savePreferredVersionName,u=(0,v.Jo)(c),m=u.latestDocSuggestion,d=u.latestVersionSuggestion,h=null!=m?m:(t=d).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(b,{siteTitle:o,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:d.label,to:h.path,onClick:function(){return s(d.name)}})))}function k(e){var t=e.className,n=(0,h.E)();return n.banner?a.createElement(y,{className:t,versionMetadata:n}):null}function N(e){var t=e.className,n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function L(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function C(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:i.k.common.lastUpdated},a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(Z,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var _=n(102),T="iconEdit_eYIM",B=["className"];function x(e){var t=e.className,n=(0,_.Z)(e,B);return a.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(T,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},a.createElement(x,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var A="tag_zVej",H="tagRegular_sFm0",I="tagWithCount_h2kH";function S(e){var t=e.permalink,n=e.label,l=e.count;return a.createElement(u.Z,{href:t,className:(0,r.Z)(A,l?I:H)},n,l&&a.createElement("span",null,l))}var j="tags_jXut",O="tag_QGVx";function U(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(j,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:O},a.createElement(S,{label:t,permalink:n}))}))))}var M="lastUpdated_vbeJ";function P(e){return a.createElement("div",{className:(0,r.Z)(i.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(U,e)))}function V(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(i.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",M)},(n||l)&&a.createElement(C,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function D(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,s=t.tags,u=s.length>0,m=!!(n||l||c);return u||m?a.createElement("footer",{className:(0,r.Z)(i.k.docs.docFooter,"docusaurus-mt-lg")},u&&a.createElement(P,{tags:s}),m&&a.createElement(V,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:c,formattedLastUpdatedAt:o})):null}var z=n(6668),R=["parentIndex"];function W(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,_.Z)(e,R);n>=0?t[n].children.push(r):a.push(r)})),a}function F(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function q(e){var t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function G(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return q(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function J(){var e=(0,a.useRef)(0),t=(0,z.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){var t=(0,a.useRef)(void 0),n=J();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=G(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function $(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement($,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var K=a.memo($),Q=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function X(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,o=void 0===l?"table-of-contents__link":l,i=e.linkActiveClassName,s=void 0===i?void 0:i,u=e.minHeadingLevel,m=e.maxHeadingLevel,d=(0,_.Z)(e,Q),p=(0,z.L)(),v=null!=u?u:p.tableOfContents.minHeadingLevel,f=null!=m?m:p.tableOfContents.maxHeadingLevel,h=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return F({toc:W(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return Y((0,a.useMemo)((function(){if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:f}}),[o,s,v,f])),a.createElement(K,(0,c.Z)({toc:h,className:r,linkClassName:o},d))}var ee="tableOfContents_bqdL",te=["className"];function ne(e){var t=e.className,n=(0,_.Z)(e,te);return a.createElement("div",{className:(0,r.Z)(ee,"thin-scrollbar",t)},a.createElement(X,(0,c.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var ae=n(6043),re="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E",oe=["collapsed"];function ie(e){var t=e.collapsed,n=(0,_.Z)(e,oe);return a.createElement("button",(0,c.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",re,!t&&le,n.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var ce="tocCollapsible_ETCw",se="tocCollapsibleContent_vkbj",ue="tocCollapsibleExpanded_sAul";function me(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,o=e.maxHeadingLevel,i=(0,ae.u)({initialState:!0}),c=i.collapsed,s=i.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(ce,!c&&ue,n)},a.createElement(ie,{collapsed:c,onClick:s}),a.createElement(ae.z,{lazy:!0,className:se,collapsed:c},a.createElement(X,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}var de="anchorWithStickyNavbar_LWe7",pe="anchorWithHideOnScrollNavbar_WYt5",ve=["as","id"];function fe(e){var t=e.as,n=e.id,l=(0,_.Z)(e,ve),o=(0,z.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,c.Z)({},l,{className:(0,r.Z)("anchor",o?pe:de),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,c.Z)({},l,{id:void 0}))}var he=n(9543),ge=n(8596),be=n(4996);function Ee(e){return a.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var ye={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function ke(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(u.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Ne(e){var t=e.children,n=e.active,l=e.index,o=e.addMicrodata;return a.createElement("li",(0,c.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Le(){var e=(0,be.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(u.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",ye.breadcrumbsItemLink),href:e},a.createElement(Ee,{className:ye.breadcrumbHomeIcon})))}function Ze(){var e=(0,he.s1)(),t=(0,ge.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(i.k.docs.docBreadcrumbs,ye.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Le,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(Ne,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(ke,{href:t.href,isLast:r},t.label))})))):null}var Ce=n(3905),_e=n(5742),Te=["mdxType","originalType"];var Be=n(2389),xe=n(2949);function we(){var e=(0,z.L)().prism,t=(0,xe.I)().colorMode,n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var Ae=n(3435),He=n(7594),Ie=n.n(He),Se=(0,Ae.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),je=(0,Ae.Z)(/\{([\d,-]+)\}/,{range:1}),Oe={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Ue(e,t){var n=e.map((function(e){var n=Oe[e],a=n.start,r=n.end;return"(?:"+a+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function Me(e,t){var n=e.replace(/\n$/,""),a=t.language,r=t.magicComments,l=t.metastring;if(l&&je.test(l)){var o=l.match(je).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var i=r[0].className,c=Ie()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[i]]}));return{lineClassNames:Object.fromEntries(c),code:n}}if(void 0===a)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Ue(["js","jsBlock"],t);case"jsx":case"tsx":return Ue(["js","jsBlock","jsx"],t);case"html":return Ue(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Ue(["bash"],t);case"markdown":case"md":return Ue(["html","jsx","bash"],t);default:return Ue(Object.keys(Oe),t)}}(a,r),u=n.split("\n"),m=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),v=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),f=0;f<u.length;){var h=u[f].match(s);if(h){var g=h.slice(1).find((function(e){return void 0!==e}));d[g]?m[d[g]].range+=f+",":p[g]?m[p[g]].start=f:v[g]&&(m[v[g]].range+=m[v[g]].start+"-"+(f-1)+","),u.splice(f,1)}else f+=1}n=u.join("\n");var b={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;Ie()(n).forEach((function(e){null!=b[e]||(b[e]=[]),b[e].push(t)}))})),{lineClassNames:b,code:n}}var Pe="codeBlockContainer_Ckt0",Ve=["as"];function De(e){var t=e.as,n=(0,_.Z)(e,Ve),l=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var a=e[0],r=e[1],l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(we());return a.createElement(t,(0,c.Z)({},n,{style:l,className:(0,r.Z)(n.className,Pe,i.k.common.codeBlock)}))}var ze={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Re(e){var t=e.children,n=e.className;return a.createElement(De,{as:"pre",tabIndex:0,className:(0,r.Z)(ze.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:ze.codeBlockLines},t))}var We={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Fe={Prism:n(7410).Z,theme:We};function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ge(){return Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ge.apply(this,arguments)}var Je=/\r\n|\r|\n/,Ye=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},$e=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Ke=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Ge({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=Ge({},n,{backgroundColor:null}),r};function Qe(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var Xe=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),qe(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Ke(e.theme,e.language):void 0;return t.themeDict=n})),qe(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=Ge({},Qe(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?Ge({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),qe(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),qe(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=Ge({},Qe(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?Ge({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),qe(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,u=t[o],m=n[o][l];if("string"==typeof m?(u=o>0?u:["plain"],s=m):(u=$e(u,m.type),m.alias&&(u=$e(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(Je),p=d.length;i.push({types:u,content:d[0]});for(var v=1;v<p;v++)Ye(i),c.push(i=[]),i.push({types:u,content:d[v]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return Ye(i),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),et=Xe,tt="codeLine_lJS_",nt="codeLineNumber_Tfdd",at="codeLineContent_feaV";function rt(e){var t=e.line,n=e.classNames,l=e.showLineNumbers,o=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var s=o({line:t,className:(0,r.Z)(n,l&&tt)}),u=t.map((function(e,t){return a.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))}));return a.createElement("span",s,l?a.createElement(a.Fragment,null,a.createElement("span",{className:nt}),a.createElement("span",{className:at},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var lt={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function ot(e){var t=e.code,n=e.className,l=(0,a.useState)(!1),o=l[0],i=l[1],c=(0,a.useRef)(void 0),u=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(t),i(!0),c.current=window.setTimeout((function(){i(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,s.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,s.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,s.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,lt.copyButton,o&&lt.copyButtonCopied),onClick:u},a.createElement("span",{className:lt.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:lt.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:lt.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var it="wordWrapButtonIcon_Bwma",ct="wordWrapButtonEnabled_EoeP";function st(e){var t=e.className,n=e.onClick,l=e.isEnabled,o=(0,s.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,l&&ct),"aria-label":o,title:o},a.createElement("svg",{className:it,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function ut(e){var t,n,l,o,i,s,u,m,d,p,v,f=e.children,h=e.className,g=void 0===h?"":h,b=e.metastring,E=e.title,y=e.showLineNumbers,k=e.language,N=(0,z.L)().prism,L=N.defaultLanguage,Z=N.magicComments,C=null!=(t=null!=k?k:null==(n=g.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:L,_=we(),T=(l=(0,a.useState)(!1),o=l[0],i=l[1],s=(0,a.useState)(!1),u=s[0],m=s[1],d=(0,a.useRef)(null),p=(0,a.useCallback)((function(){var e=d.current.querySelector("code");o?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",i((function(e){return!e}))}),[d,o]),v=(0,a.useCallback)((function(){var e=d.current,t=e.scrollWidth>e.clientWidth||d.current.querySelector("code").hasAttribute("style");m(t)}),[d]),(0,a.useEffect)((function(){v()}),[o,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:d,isEnabled:o,isCodeScrollable:u,toggle:p}),B=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(Se))?void 0:n.groups.title)?t:""}(b)||E,x=Me(f,{metastring:b,language:C,magicComments:Z}),w=x.lineClassNames,A=x.code,H=null!=y?y:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(b);return a.createElement(De,{as:"div",className:(0,r.Z)(g,C&&!g.includes("language-"+C)&&"language-"+C)},B&&a.createElement("div",{className:ze.codeBlockTitle},B),a.createElement("div",{className:ze.codeBlockContent},a.createElement(et,(0,c.Z)({},Fe,{theme:_,code:A,language:null!=C?C:"text"}),(function(e){var t=e.className,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:T.codeBlockRef,className:(0,r.Z)(t,ze.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,r.Z)(ze.codeBlockLines,H&&ze.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(rt,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:w[t],showLineNumbers:H})}))))})),a.createElement("div",{className:ze.buttonGroup},(T.isEnabled||T.isCodeScrollable)&&a.createElement(st,{className:ze.codeButton,onClick:function(){return T.toggle()},isEnabled:T.isEnabled}),a.createElement(ot,{className:ze.codeButton,code:A}))))}var mt=["children"];function dt(e){var t=e.children,n=(0,_.Z)(e,mt),r=(0,Be.Z)(),l=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof l?ut:Re;return a.createElement(o,(0,c.Z)({key:String(r)},n),l)}var pt="details_lb9f",vt="isBrowser_bmU9",ft="collapsibleContent_i85q",ht=["summary","children"];function gt(e){return!!e&&("SUMMARY"===e.tagName||gt(e.parentElement))}function bt(e,t){return!!e&&(e===t||bt(e.parentElement,t))}function Et(e){var t=e.summary,n=e.children,l=(0,_.Z)(e,ht),o=(0,Be.Z)(),i=(0,a.useRef)(null),s=(0,ae.u)({initialState:!l.open}),u=s.collapsed,m=s.setCollapsed,d=(0,a.useState)(l.open),p=d[0],v=d[1];return a.createElement("details",(0,c.Z)({},l,{ref:i,open:p,"data-collapsed":u,className:(0,r.Z)(pt,o&&vt,l.className),onMouseDown:function(e){gt(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;gt(t)&&bt(t,i.current)&&(e.preventDefault(),u?(m(!1),v(!0)):m(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(ae.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),v(!e)}},a.createElement("div",{className:ft},n)))}var yt="details_b_Ee";function kt(e){var t=Object.assign({},e);return a.createElement(Et,(0,c.Z)({},t,{className:(0,r.Z)("alert alert--info",yt,t.className)}))}function Nt(e){return a.createElement(fe,e)}var Lt="containsTaskList_mC6p";var Zt="img_ev3q";var Ct={head:function(e){var t=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,_.Z)(n,Te));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(_e.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(dt,e)},a:function(e){return a.createElement(u.Z,e)},pre:function(e){var t;return a.createElement(dt,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(kt,(0,c.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,c.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Lt))}));var t},img:function(e){return a.createElement("img",(0,c.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,Zt))}));var t},h1:function(e){return a.createElement(Nt,(0,c.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Nt,(0,c.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Nt,(0,c.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Nt,(0,c.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Nt,(0,c.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Nt,(0,c.Z)({as:"h6"},e))}};function _t(e){var t=e.children;return a.createElement(Ce.Zo,{components:Ct},t)}var Tt="docItemContainer_Adtb",Bt="docItemCol_GujU",xt="tocMobile_aoJ5";function wt(e){var t,n=e.content,r=n.metadata,o=n.frontMatter,i=n.assets,c=o.keywords,s=r.description,u=r.title,m=null!=(t=i.image)?t:o.image;return a.createElement(l.d,{title:u,description:s,keywords:c,image:m})}function At(e){var t=e.content,n=t.metadata,l=t.frontMatter,c=l.hide_title,s=l.hide_table_of_contents,u=l.toc_min_heading_level,m=l.toc_max_heading_level,p=n.title,v=!c&&void 0===t.contentTitle,f=(0,o.i)(),h=!s&&t.toc&&t.toc.length>0,g=h&&("desktop"===f||"ssr"===f);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!s&&Bt)},a.createElement(k,null),a.createElement("div",{className:Tt},a.createElement("article",null,a.createElement(Ze,null),a.createElement(N,null),h&&a.createElement(me,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:m,className:(0,r.Z)(i.k.docs.docTocMobile,xt)}),a.createElement("div",{className:(0,r.Z)(i.k.docs.docMarkdown,"markdown")},v&&a.createElement("header",null,a.createElement(fe,{as:"h1"},p)),a.createElement(_t,null,a.createElement(t,null))),a.createElement(D,e)),a.createElement(d,{previous:n.previous,next:n.next}))),g&&a.createElement("div",{className:"col col--3"},a.createElement(ne,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:m,className:i.k.docs.docTocDesktop})))}function Ht(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(l.FG,{className:t},a.createElement(wt,e),a.createElement(At,e))}},4477:function(e,t,n){"use strict";n.d(t,{E:function(){return i},q:function(){return o}});var a=n(7294),r=n(7154),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);