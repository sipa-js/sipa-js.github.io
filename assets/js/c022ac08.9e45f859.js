"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[4666],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var l=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,i=function(e,a){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=l.createContext({}),u=function(e){var a=l.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},d=function(e){var a=u(e.components);return l.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(t),k=i,S=s["".concat(p,".").concat(k)]||s[k]||c[k]||r;return t?l.createElement(S,n(n({ref:a},d),{},{components:t})):l.createElement(S,n({ref:a},d))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var u=2;u<r;u++)n[u]=t[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},734:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=t(7462),i=(t(7294),t(3905));const r={},n=void 0,o={unversionedId:"api/SipaSerializer",id:"api/SipaSerializer",title:"SipaSerializer",description:"SipaSerializer",source:"@site/docs/api/SipaSerializer.md",sourceDirName:"api",slug:"/api/SipaSerializer",permalink:"/docs/api/SipaSerializer",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/api/SipaSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SipaPage",permalink:"/docs/api/SipaPage"},next:{title:"SipaState",permalink:"/docs/api/SipaState"}},p={},u=[{value:"SipaSerializer",id:"sipaserializer",level:2},{value:"SipaSerializer.serialize(value) \u2192 <code>string</code> | <code>null</code>",id:"sipaserializerserializevalue--string--null",level:3},{value:"SipaSerializer.deserialize(value) \u2192 <code>Boolean</code> | <code>String</code> | <code>Number</code> | <code>Array</code> | <code>Object</code> | <code>RegExp</code> | <code>Date</code> | <code>undefined</code> | <code>NaN</code> | <code>Infinity</code> | <code>null</code> | <code>*</code>",id:"sipaserializerdeserializevalue--boolean--string--number--array--object--regexp--date--undefined--nan--infinity--null--",level:3},{value:"SipaSerializer.isFunctionString(value) \u2192 <code>boolean</code>",id:"sipaserializerisfunctionstringvalue--boolean",level:3},{value:"SipaSerializer.isArrayString(value) \u2192 <code>boolean</code>",id:"sipaserializerisarraystringvalue--boolean",level:3},{value:"SipaSerializer.isObjectString(value) \u2192 <code>boolean</code>",id:"sipaserializerisobjectstringvalue--boolean",level:3},{value:"SipaSerializer.deserializeFunctionString(value) \u2192 <code>function</code>",id:"sipaserializerdeserializefunctionstringvalue--function",level:3},{value:"SipaSerializer.deepSerializeSpecialTypes(obj) \u2192 <code>Array</code> | <code>Object</code>",id:"sipaserializerdeepserializespecialtypesobj--array--object",level:3},{value:"SipaSerializer.deepDeserializeSpecialTypes(obj) \u2192 <code>Array</code> | <code>Object</code>",id:"sipaserializerdeepdeserializespecialtypesobj--array--object",level:3}],d={toc:u};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"SipaSerializer"}),(0,i.kt)("h2",{id:"sipaserializer"},"SipaSerializer"),(0,i.kt)("p",null,"Serializer to serialize data of primitive types or even complex Objects,\nto ensure to be stored as valid JSON and can be deserialized back without data loss."),(0,i.kt)("p",null,"Includes support for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Boolean, Number, String, Array, Object, null (native JS","[SON]"," support)\nAnd special type handling to support the following types"),(0,i.kt)("li",{parentName:"ul"},"Functions"),(0,i.kt)("li",{parentName:"ul"},"RegExp, Date"),(0,i.kt)("li",{parentName:"ul"},"NaN, Infinity, undefined"),(0,i.kt)("li",{parentName:"ul"},"empty (special type when deleting an item of an array)")),(0,i.kt)("p",null,"The special types are escaped by an internal escaping when serialized.\nSee SipaSerializer.STORAGE_PLACEHOLDERS for the escapes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer"},"SipaSerializer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.serialize"},".serialize(value)")," ","\u2192"," ",(0,i.kt)("code",null,"string")," ","|"," ",(0,i.kt)("code",null,"null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.deserialize"},".deserialize(value)")," ","\u2192"," ",(0,i.kt)("code",null,"Boolean")," ","|"," ",(0,i.kt)("code",null,"String")," ","|"," ",(0,i.kt)("code",null,"Number")," ","|"," ",(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object")," ","|"," ",(0,i.kt)("code",null,"RegExp")," ","|"," ",(0,i.kt)("code",null,"Date")," ","|"," ",(0,i.kt)("code",null,"undefined")," ","|"," ",(0,i.kt)("code",null,"NaN")," ","|"," ",(0,i.kt)("code",null,"Infinity")," ","|"," ",(0,i.kt)("code",null,"null")," ","|"," ",(0,i.kt)("code",null,"*")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.isFunctionString"},".isFunctionString(value)")," ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.isArrayString"},".isArrayString(value)")," ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.isObjectString"},".isObjectString(value)")," ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.deserializeFunctionString"},".deserializeFunctionString(value)")," ","\u2192"," ",(0,i.kt)("code",null,"function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.deepSerializeSpecialTypes"},".deepSerializeSpecialTypes(obj)")," ","\u2192"," ",(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaSerializer.deepDeserializeSpecialTypes"},".deepDeserializeSpecialTypes(obj)")," ","\u2192"," ",(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object"))))),(0,i.kt)("a",{name:"SipaSerializer.serialize"}),(0,i.kt)("h3",{id:"sipaserializerserializevalue--string--null"},"SipaSerializer.serialize(value) ","\u2192"," ",(0,i.kt)("code",null,"string")," ","|"," ",(0,i.kt)("code",null,"null")),(0,i.kt)("p",null,"Serialize given value to be stored in JSON without loosing its original value"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("code",null,"string")," ","|"," ",(0,i.kt)("code",null,"null")," - returns string or null if value is null  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"any"))))),(0,i.kt)("a",{name:"SipaSerializer.deserialize"}),(0,i.kt)("h3",{id:"sipaserializerdeserializevalue--boolean--string--number--array--object--regexp--date--undefined--nan--infinity--null--"},"SipaSerializer.deserialize(value) ","\u2192"," ",(0,i.kt)("code",null,"Boolean")," ","|"," ",(0,i.kt)("code",null,"String")," ","|"," ",(0,i.kt)("code",null,"Number")," ","|"," ",(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object")," ","|"," ",(0,i.kt)("code",null,"RegExp")," ","|"," ",(0,i.kt)("code",null,"Date")," ","|"," ",(0,i.kt)("code",null,"undefined")," ","|"," ",(0,i.kt)("code",null,"NaN")," ","|"," ",(0,i.kt)("code",null,"Infinity")," ","|"," ",(0,i.kt)("code",null,"null")," ","|"," ",(0,i.kt)("code",null,"*")),(0,i.kt)("p",null,"Serialize given value to be stored in JSON without loosing its original value"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"String")," ","|"," ",(0,i.kt)("code",null,"null"))))),(0,i.kt)("a",{name:"SipaSerializer.isFunctionString"}),(0,i.kt)("h3",{id:"sipaserializerisfunctionstringvalue--boolean"},"SipaSerializer.isFunctionString(value) ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("p",null,"Check if given string is a valid javascript function"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"String"))))),(0,i.kt)("a",{name:"SipaSerializer.isArrayString"}),(0,i.kt)("h3",{id:"sipaserializerisarraystringvalue--boolean"},"SipaSerializer.isArrayString(value) ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("p",null,"Check if given string is a valid javascript array"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"String"))))),(0,i.kt)("a",{name:"SipaSerializer.isObjectString"}),(0,i.kt)("h3",{id:"sipaserializerisobjectstringvalue--boolean"},"SipaSerializer.isObjectString(value) ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("p",null,"Check if given string is a valid javascript object"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"String"))))),(0,i.kt)("a",{name:"SipaSerializer.deserializeFunctionString"}),(0,i.kt)("h3",{id:"sipaserializerdeserializefunctionstringvalue--function"},"SipaSerializer.deserializeFunctionString(value) ","\u2192"," ",(0,i.kt)("code",null,"function")),(0,i.kt)("p",null,"Deserialize a valid javascript string into a callable function"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"String"))))),(0,i.kt)("a",{name:"SipaSerializer.deepSerializeSpecialTypes"}),(0,i.kt)("h3",{id:"sipaserializerdeepserializespecialtypesobj--array--object"},"SipaSerializer.deepSerializeSpecialTypes(obj) ","\u2192"," ",(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object")),(0,i.kt)("p",null,"Serializes (escapes) all special types within an Array or Object\nto be stored in JSON without data loss."),(0,i.kt)("p",null,"Original Array or Object is cloned and will not be manipulated."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"obj"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object"))))),(0,i.kt)("a",{name:"SipaSerializer.deepDeserializeSpecialTypes"}),(0,i.kt)("h3",{id:"sipaserializerdeepdeserializespecialtypesobj--array--object"},"SipaSerializer.deepDeserializeSpecialTypes(obj) ","\u2192"," ",(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object")),(0,i.kt)("p",null,"Deserializes (unescapes) all special types of the given Array or Object"),(0,i.kt)("p",null,"Original Array or Object is cloned and will not be manipulated."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"obj"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Array")," ","|"," ",(0,i.kt)("code",null,"Object"))))))}c.isMDXComponent=!0}}]);