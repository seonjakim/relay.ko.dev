(self.webpackChunk=self.webpackChunk||[]).push([[97150,8710,56435],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>s,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),m=function(e){return function(t){var r=c(t.components);return n.createElement(e,i({},t,{components:r}))}},c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=a,f=m["".concat(o,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var n=r(52263),a=r(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,p=void 0!==o&&o,l=i.absolute,d=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(p)return t+r;var m=r.startsWith(t)?r:t+r.replace(/^\//,"");return d?e+m:m}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},55723:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>d,toc:()=>m,default:()=>s});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=["components"],p={},l=void 0,d={unversionedId:"api-reference/types/CacheConfig",id:"version-v13.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/relay.ko.dev/docs/api-reference/types/CacheConfig",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654500983,formattedLastUpdatedAt:"6/6/2022",frontMatter:{}},m=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",children:[],level:4}],c={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"\ub2e4\uc74c \ud544\ub4dc\uac00 \uc788\ub294 \uac1d\uccb4:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. \ucc38\uc778 \uacbd\uc6b0 \uad6c\uc131\ub41c \uc751\ub2f5 \uce90\uc2dc\uc758 \uc0c1\ud0dc\uc5d0 \uad00\uacc4\uc5c6\uc774 \ucffc\ub9ac\uac00 \ubb34\uc870\uac74 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A number. \uc9c0\uc815\ub41c \uac04\uaca9(\ubc00\ub9ac\ucd08)\uc73c\ub85c \ud3f4\ub9c1(polling)\ud558\uc5ec \ucffc\ub9ac\uac00 \uc2e4\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4 (\uc774 \uac12\uc740 ",(0,i.mdx)("inlineCode",{parentName:"li"},"setTimeout"),"\uc5d0 \uc804\ub2ec\ub418\uac8c \ub429\ub2c8\ub2e4)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. GraphQLLiveQuery\ub97c \ud638\ucd9c\ud558\uc5ec \ucffc\ub9ac\uac00 \uc2e4\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub77c\uc774\ube0c \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \ub54c \uac8c\uc774\ud2b8\uc6e8\uc774\uc758 \uad6c\uc131\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," An object. \uc0ac\uc6a9\uc790 \uc81c\uacf5 \uba54\ud0c0\ub370\uc774\ud130."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. \uc8fc\uc5b4\uc9c4 \uc791\uc5c5 \uc2e4\ud589 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \uace0\uc720 ID\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uc0ac\uc6a9\uc790 \uc81c\uacf5 \uac12\uc785\ub2c8\ub2e4.")))))}s.isMDXComponent=!0},38085:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>d,contentTitle:()=>m,metadata:()=>c,toc:()=>s,default:()=>f});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=r(88842),p=r(55723),l=["components"],d={},m=void 0,c={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig",isDocsHomePage:!1,title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/relay.ko.dev/docs/api-reference/types/GraphQLSubscriptionConfig",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{}},s=[{value:"Type <code>GraphQLSubscriptionConfig&lt;TSubscriptionPayload&gt;</code>",id:"type-graphqlsubscriptionconfigtsubscriptionpayload",children:[],level:4}],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,i.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"subscription"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onNext"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,i.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),(0,i.mdx)(p.default,{mdxType:"CacheConfig"}),(0,i.mdx)(o.default,{mdxType:"SelectorStoreUpdater"}))}f.isMDXComponent=!0},88842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>m,toc:()=>c,default:()=>u});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=r(44996),p=["components"],l={},d=void 0,m={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v13.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/relay.ko.dev/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654500983,formattedLastUpdatedAt:"6/6/2022",frontMatter:{}},c=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",children:[],level:4}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.mdx)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A function with signature ",(0,i.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,i.mdx)("li",{parentName:"ul"},"\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 Relay store\uc5d0 ",(0,i.mdx)("em",{parentName:"li"},"\uc9c1\uc811")," \ub370\uc774\ud130\ub97c \uc4f0\uace0 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\ub3c5 \ud398\uc774\ub85c\ub4dc\uc5d0 \ub300\ud55c \uc751\ub2f5(response)\uc73c\ub85c store\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ubc29\ubc95\uc744 \uc644\uc804\ud788 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,i.mdx)("em",{parentName:"li"},"\uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 record\ub97c \uc0dd\uc131"),"\ud558\uac70\ub098 ",(0,i.mdx)("em",{parentName:"li"},"\uae30\uc874 record\ub97c \uc5c5\ub370\uc774\ud2b8 \ub610\ub294 \uc0ad\uc81c"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Relay store\ub97c \uc77d\uace0 \uc4f0\uae30 \uc704\ud55c \uc804\uccb4 API\ub294 ",(0,i.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"\uc5ec\uae30"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}u.isMDXComponent=!0}}]);