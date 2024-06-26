"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[9658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},l="SipaComponent",r={unversionedId:"guides/guides-extras/sipa-component",id:"guides/guides-extras/sipa-component",title:"SipaComponent",description:"With SipaComponent, Sipa provides a very easy to use, powerful basic component to encapsulate logic.",source:"@site/docs/guides/guides-extras/sipa-component.md",sourceDirName:"guides/guides-extras",slug:"/guides/guides-extras/sipa-component",permalink:"/docs/guides/guides-extras/sipa-component",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/guides/guides-extras/sipa-component.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/category/advanced"},next:{title:"Using translations",permalink:"/docs/guides/guides-extras/using-translations"}},s={},p=[{value:"Use case",id:"use-case",level:2},{value:"Features",id:"features",level:2},{value:"Create a new component",id:"create-a-new-component",level:2},{value:"Component Structure",id:"component-structure",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Using and initializing your component",id:"using-and-initializing-your-component",level:2},{value:"Declarative initialization",id:"declarative-initialization",level:3},{value:"Initialize programatically",id:"initialize-programatically",level:3},{value:"Nesting components",id:"nesting-components",level:2},{value:"Declarative nesting",id:"declarative-nesting",level:3},{value:"Nesting programmatically",id:"nesting-programmatically",level:3},{value:"Full customized nesting",id:"full-customized-nesting",level:4},{value:"Using sipa-list for generic lists",id:"using-sipa-list-for-generic-lists",level:4},{value:"Updating data",id:"updating-data",level:2},{value:"Manually modifying the <code>_data</code> attribute",id:"manually-modifying-the-_data-attribute",level:3},{value:"Events",id:"events",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sipacomponent"},"SipaComponent"),(0,i.kt)("p",null,"With SipaComponent, Sipa provides a very easy to use, powerful basic component to encapsulate logic."),(0,i.kt)("p",null,"Compared to components in other frameworks, SipaComponent is much easier and simpler."),(0,i.kt)("p",null,"It is just HTML/Javascript without any transpiling, that runs directly in your browser."),(0,i.kt)("p",null,"The API documentation for ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/SipaComponent"},"SipaComponent")," can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/SipaComponent"},"here"),"."),(0,i.kt)("h2",{id:"use-case"},"Use case"),(0,i.kt)("p",null,"The typical use cases to use SipaComponent are custom form elements as well as more complex gui logic,\nthat you want to reuse more often or at least encapsulate into smaller, logical pieces."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"SipaComponent has the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Templating with ",(0,i.kt)("a",{parentName:"li",href:"https://ejs.co/"},"EJS")," - so it's pure Javascript"),(0,i.kt)("li",{parentName:"ul"},"Component nesting - reuse components inside components"),(0,i.kt)("li",{parentName:"ul"},"Global Scope and access from its ComponentClass"),(0,i.kt)("li",{parentName:"ul"},"Integrated support for classes on the maine element (including its state management)"),(0,i.kt)("li",{parentName:"ul"},"Integrated support for hide/show (including its state management)"),(0,i.kt)("li",{parentName:"ul"},"Easy access to nested or parent components by aliases"),(0,i.kt)("li",{parentName:"ul"},"Auto support to render only if data changes or component is in view area (TODO)"),(0,i.kt)("li",{parentName:"ul"},"Declarative and programmatically use and initialization")),(0,i.kt)("h2",{id:"create-a-new-component"},"Create a new component"),(0,i.kt)("p",null,"To create a new component, just run the Sipa generator by "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sipa g\n")),(0,i.kt)("p",null,"and select ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),"."),(0,i.kt)("p",null,"This will create a new component inside ",(0,i.kt)("inlineCode",{parentName:"p"},"app/assets/components")," consisting of a prepared template of a Javascript and Stylesheet file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 app\n\u2502 \u2514\u2500\u2500 assets\n\u2502   \u2514\u2500\u2500components\n\u2502     \u2514\u2500\u2500 example-component\n\u2502       \u251c\u2500\u2500 example-component.js\n\u2502       \u2514\u2500\u2500 example-component.(s)css\n")),(0,i.kt)("p",null,"If you only want to use this component on a special page as page encapsulation, then create a subfolder ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," in your page directory and move the component directory inside it. E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"app/views/pages/my-page/components/example-component")," and rerun ",(0,i.kt)("inlineCode",{parentName:"p"},"sipa i"),"."),(0,i.kt)("h2",{id:"component-structure"},"Component Structure"),(0,i.kt)("p",null,"The new component template looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="example-component.js"',title:'"example-component.js"'},'class ExampleComponent extends SipaComponent {\n    constructor(data = {}, opts = {}) {\n        // define your defaults here\n        data.example ??= "world";\n        super(data, opts);\n        this.events().subscribe("before_destroy", this.onDestroy);\n    }\n\n    onDestroy() {\n        // this is called, before the component is destroyed by destroy()\n    }\n\n    showAlert() {\n        alert(`Bye, bye, ${this._data.example}!`);\n    }\n}\n\n//--- TEMPLATE ---------------------------------------------------------------------------------------------------------\n\nExampleComponent.template = () => {\n    return `\n<example-component onclick="instance(this).showAlert();" class="template-class">\n    <span>Hello <%= example =>!</span>\n</example-component>\n    `.trim();\n}\n\nSipaComponent.registerComponent(ExampleComponent);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="example-component.(s)css"',title:'"example-component.(s)css"'},"example-component {\n\n}\n")),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Component classes are usually named with the prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"Component")," and inherit from the ",(0,i.kt)("inlineCode",{parentName:"li"},"SipaComponent"),". It's tag name is the same name in ",(0,i.kt)("inlineCode",{parentName:"li"},"dash-case"),"."),(0,i.kt)("li",{parentName:"ul"},"Default values can be set in the constructor by ",(0,i.kt)("inlineCode",{parentName:"li"},'data.my_value ??= "default value"'),"."),(0,i.kt)("li",{parentName:"ul"},"Data state is stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"_data")," attribute of the class. It is not really private by purpose to give you the full control, if you need it."),(0,i.kt)("li",{parentName:"ul"},"To access instance methods of your component inside your template, use ",(0,i.kt)("inlineCode",{parentName:"li"},"instance(this)")," to get your instance class. It is a shortcut for ",(0,i.kt)("inlineCode",{parentName:"li"},"ExampleComponent.instanceOfElement(this)")),(0,i.kt)("li",{parentName:"ul"},"The template is defined by a static ",(0,i.kt)("inlineCode",{parentName:"li"},"template")," method. The template itself supports ",(0,i.kt)("a",{parentName:"li",href:"https://ejs.co/"},"EJS")," for templating. In EJS you have access to all children variables of ",(0,i.kt)("inlineCode",{parentName:"li"},"_data"),". You can also access the ",(0,i.kt)("inlineCode",{parentName:"li"},"_meta")," by ",(0,i.kt)("inlineCode",{parentName:"li"},"_meta.my_variable"),"."),(0,i.kt)("li",{parentName:"ul"},"The component must be registered to the SipaComponent, to unleash its full power! (or to work at all)")),(0,i.kt)("h2",{id:"using-and-initializing-your-component"},"Using and initializing your component"),(0,i.kt)("p",null,"You can either initialize your components declarative or programmatically, depending on your needs."),(0,i.kt)("h3",{id:"declarative-initialization"},"Declarative initialization"),(0,i.kt)("p",null,"For declarative initialization you can embed your component on any page inside the HTML."),(0,i.kt)("p",null,"Data parameters are given by attribute names. If you want to overwrite or add some real attribute to the initialized instance, use the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"attr-"),"."),(0,i.kt)("p",null,"Furthermore there are special attributes with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"sipa-")," to provide special features."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-page.html"',title:'"my-page.html"'},'<div id="some-container">\n    <example-component example="\'Pinky\'" other="1+1" attr-style="color: red;" attr-class="declarative-class" sipa-hidden="true"></example-component>\n</div>\n')),(0,i.kt)("p",null,"In this example we pass the data ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," with the string value ",(0,i.kt)("inlineCode",{parentName:"p"},"Pinky"),". Ensure to put the string in quotes, as the value inside the example attribute is pure javascript. You can also put in numbers or even run some code.\nWe also use the integrated hide/show feature and instance the component in hidden state."),(0,i.kt)("p",null,"The result of this example will be the following, rendered component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="rendered page DOM"',title:'"rendered',page:!0,'DOM"':!0},'<div id="some-container">\n    <example-component sipa-id="1" style="color: red;" class="template-class declarative-class">\n        <span>Hello Pinky!</span>\n    </example-component>\n</div>\n')),(0,i.kt)("p",null,"Classes on the components tag level are managed automatically, if their attribute is used twice, they will be merged."),(0,i.kt)("p",null,"Let's access the instance of the element on the console and retrieve its data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'c = ExampleComponent.all()[0]; // get first instance of ExampleComponent\nconsole.log(c.data());\n// => { example: "Pinky", other: 2 }\n')),(0,i.kt)("p",null,"If we update the component, the state will be set and the view be rerendered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'    c = ExampleComponent.bySipaId(1);\n    c.update({ example: "Crocodile"});\n    c.removeClass("declarative-class");\n    c.addClass("super-class");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="updated DOM"',title:'"updated','DOM"':!0},'<div id="some-container">\n    <example-component sipa-id="1" style="color: red;" class="template-class super-class">\n        <span>Hello Crocodile!</span>\n    </example-component>\n</div>\n')),(0,i.kt)("p",null,"Be aware, never to manipulate classes externally on your own, as their state will not be stored. Always store your state in ",(0,i.kt)("inlineCode",{parentName:"p"},"_data")," and respect the values with EJS inside your teamplate. When you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"removeClass()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"addClass()")," provided by SipaComponent, it will take care of its state internally. So if you rerender your component, the state will remain. If you would manipulate the DOM externally, your changes will dissappear after the next render."),(0,i.kt)("p",null,"The initialization of declarative components can be done manually, especially when adding new components the declarative way dynamically.\nOtherwise by default, they are initialized in the page init hook of your Sipa app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/config/hooks.js"',title:'"app/config/hooks.js"'},"// ...\nSipaHooks.beforeInitPage('on', () => {\n    // This will initialize all registered SipaComponents and its inherited components in the DOM\n    SipaComponent.init();\n    // This would only initialize all ExampleComponents in the DOM\n    // ExampleComponent.init();\n});\n// ...\n")),(0,i.kt)("h3",{id:"initialize-programatically"},"Initialize programatically"),(0,i.kt)("p",null,"The same result as shown before the declarative way can be archived by the following HTML and Javascript code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-page.html"',title:'"my-page.html"'},'<div id="some-container">\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="my-page.js"',title:'"my-page.js"'},'class MyPage extends SipaBasicView {\n    // ...\n    onInit() {\n        const c = new ExampleComponent({ \n            example: "Pinky", \n            other: 1 + 1, \n            sipa_hidden: true, \n            sipa_custom_attributes: { style: "color: red"}}\n        );\n        c.append("#some-container"); // append the instance to the container\n        // We can also prepend the instance to the container:        \n        // c.prepend("#some-container");\n    }\n    // ...\n}\n')),(0,i.kt)("h2",{id:"nesting-components"},"Nesting components"),(0,i.kt)("p",null,"You are able to nest components and make complex compositions for components in components."),(0,i.kt)("h3",{id:"declarative-nesting"},"Declarative nesting"),(0,i.kt)("p",null,"To do so, you have to embed them in your ",(0,i.kt)("inlineCode",{parentName:"p"},"template()")," method the declarative way."),(0,i.kt)("p",null,"All embedded components must have declared by a ",(0,i.kt)("inlineCode",{parentName:"p"},"sipa-alias")," attribute, to give them a name to access them by their parent instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="car-component.js"',title:'"car-component.js"'},'// ...\nCarComponent.template = () => {\n    return `\n<car-component onclick="instance(this).children().steering_wheel.update({locked: false });">\n    <h1><%= title %></h1>\n    <span>Locked state of steering wheel: <%= steering_wheel.locked %></span>\n    <steering-wheel-component sipa-alias="steering_wheel" locked="true"></steering-wheel-component>\n    <wheel-component sipa-alias="wheel_front_left" state="\'ok\'"></wheel-component>\n    <wheel-component sipa-alias="wheel_front_right" state="\'hot\'"></wheel-component>\n    <wheel-component sipa-alias="wheel_back_left" state="\'ok\'"></wheel-component>\n    <wheel-component sipa-alias="wheel_back_right" state="\'broken\'"></wheel-component>\n    <brake-lights-component state="\'<%= brake.put_on ? \'on\' : \'off\' %>\'"></brake-lights-component>\n    <starter-component attr-onclick="instance(this).parentTop().update({ title: \'NewCarTitle\' });"></starter-component>\n    <% if(wheel_front_left.state === \'broken\' && wheel_front_right.state === \'broken) { %>\n        <span class="warn-message">Both frond wheels are broken!</span>\n    <% } %>\n<car-component>    \n    `.trim();\n}\n// ...\n')),(0,i.kt)("p",null,"In nested components, you can access children instances by ",(0,i.kt)("inlineCode",{parentName:"p"},"children()"),", the parent top with ",(0,i.kt)("inlineCode",{parentName:"p"},"parent()")," and the top level parent by ",(0,i.kt)("inlineCode",{parentName:"p"},"parentTop()")," if nested over several levels.\nOf course you can access these methods not only in the template, but also in the class instance or everywhere in your code."),(0,i.kt)("p",null,"But children data for EJS is accessible in the parent class at the attribute defined with ",(0,i.kt)("inlineCode",{parentName:"p"},"sipa-alias"),"."),(0,i.kt)("h3",{id:"nesting-programmatically"},"Nesting programmatically"),(0,i.kt)("h4",{id:"full-customized-nesting"},"Full customized nesting"),(0,i.kt)("p",null,"In this example we will insert the wheel-components programmatically the very custom way."),(0,i.kt)("p",null,"The next section you will find a example using a more easy and automated way to solve this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="car-component.js"',title:'"car-component.js"'},'// ...\nCarComponent.template = () => {\n    return `\n<car-component onclick="instance(this).children().steering_wheel.update({locked: false });">\n    <h1><%= title %></h1>\n    <span>Locked state of steering wheel: <%= steering_wheel.locked %></span>\n    <steering-wheel-component sipa-alias="steering_wheel" locked="true"></steering-wheel-component>\n    <div class="wheel_container"></div>\n    <brake-lights-component state="\'<%= brake.put_on ? \'on\' : \'off\' %>\'"></brake-lights-component>\n    <starter-component attr-onclick="instance(this).parentTop().update({ title: \'NewCarTitle\' });"></starter-component>\n    <% if(wheel_front_left.state === \'broken\' && wheel_front_right.state === \'broken) { %>\n        <span class="warn-message">Both frond wheels are broken!</span>\n    <% } %>\n<car-component>    \n    `.trim();\n}\n// ...\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="car-component.js"',title:'"car-component.js"'},'class CarComponent extends SipaComponent {\n    // ...\n    \n    // we instance our elements in the constructor\n    constructor(data = {}, opts = {}) {\n        // define your defaults here\n        data.example ??= "world";\n        data.wheels = [\n            new WheelComponent({ sipa_alias: "wheel_front_left", state: "ok", locked: true }),\n            new WheelComponent({ sipa_alias: "wheel_front_right", state: "hot" }),\n            new WheelComponent({ sipa_alias: "wheel_back_left", state: "ok" }),\n            new WheelComponent({ sipa_alias: "wheel_back_right", state: "broken" }),\n        ]; \n        super(data, opts);\n    }    \n    \n    \n    // we overwrite the render method and render the elements after \n    // the original rendering has been finished\n    render(options = {}) {\n        const result = super.render(options);\n        this._data.wheels.eachWithIndex((wheel, i) => {\n            wheel.append(`${this.selector()} > .container`);\n        });\n        return result;\n    }\n    \n    // ...\n}\n')),(0,i.kt)("h4",{id:"using-sipa-list-for-generic-lists"},"Using sipa-list for generic lists"),(0,i.kt)("p",null,"As dynamic lists are a common use case, Sipa provides a feature to make the programmatically use of them very easy."),(0,i.kt)("p",null,"When defining a ",(0,i.kt)("inlineCode",{parentName:"p"},"sipa-list")," attribute on an element of your choice, we can reference it to a variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"_data"),"."),(0,i.kt)("p",null,"This array can contain any ",(0,i.kt)("inlineCode",{parentName:"p"},"SipaComponents"),", even a mixed list of different ones!"),(0,i.kt)("p",null,"In case if you want even to define only one component programmatically, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"sipa-list")," and only add one item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="car-component.js"',title:'"car-component.js"'},'class MyListingComponent {\n// ...\n    constructor(data = {}, opts = {}) {\n        // define your defaults here\n        data.items = [];\n        super(data, opts);\n    }\n// ...\n    add() {\n        this._counter ??= 1;\n        this._data.items.push(new ListItemComponent({ name: randomName() }, { sipa_alias: "item_" + this._counter }));\n        this.update();\n    }\n// ...    \n}\n// ...\nMyListingComponent.template = () => {\n    return `\n<my-listing-component>\n    <h1><%= title %></h1>\n    <button onclick="instance(this).add();">Add item</button>\n    <div sipa-list="items"></div>\n<my-listing-component>    \n    `.trim();\n}\n// ...\n')),(0,i.kt)("p",null,"To remove an item from a ",(0,i.kt)("inlineCode",{parentName:"p"},"sipa-list"),", just call its ",(0,i.kt)("inlineCode",{parentName:"p"},"destroy()")," method, that will automatically remove it from the list and all its references automatically!"),(0,i.kt)("h2",{id:"updating-data"},"Updating data"),(0,i.kt)("p",null,"Usually you should only use the ",(0,i.kt)("inlineCode",{parentName:"p"},"update()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"resetToData()")," method to update your data."),(0,i.kt)("h3",{id:"manually-modifying-the-_data-attribute"},"Manually modifying the ",(0,i.kt)("inlineCode",{parentName:"h3"},"_data")," attribute"),(0,i.kt)("p",null,"If you have a very special case, where you modify _data manually, ensure that you call the ",(0,i.kt)("inlineCode",{parentName:"p"},"syncNestedReferences()")," method to update ",(0,i.kt)("inlineCode",{parentName:"p"},"_data")," references to parent and children components."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"SipaComponent")," ships with the following events: ",(0,i.kt)("inlineCode",{parentName:"p"},"before_update"),",",(0,i.kt)("inlineCode",{parentName:"p"},"after_update"),",",(0,i.kt)("inlineCode",{parentName:"p"},"before_destroy"),",",(0,i.kt)("inlineCode",{parentName:"p"},"after_destroy"),"."),(0,i.kt)("p",null,"These events are of type ",(0,i.kt)("inlineCode",{parentName:"p"},"SipaEvents")," and can be subscribed to. A typical use case is listening to updates of children components by a parent component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'class MyParentComponent {\n// ...\n    constructor(data = {}, opts = {}) {\n        // define your defaults here\n        data.items = [];\n        super(data, opts);\n        this.initTemplate(); // ensure the template and its children are initialized, otherwise this.children() will be empty\n        this.children().childy.events().subscribe("before_update", this.onBeforeChildrenUpdate);\n        this.children().childy.events().subscribe("after_update", this.onAfterChildrenUpdate);\n        this.events().createEvents("before_open","after_open"); // create new events on the fly\n    }\n// ...\n    onBeforeChildrenUpdate(child, data, options) {\n        // here we can react or even modify the \'data\' and \'options\' parameters of update(data, options), as they are passed by reference\n        if(data.some_data === true) {\n            data.additional_data ??= "foo";   \n        }\n        // check if some data property is beeing updated/changed\n        if(typeof data?.foo?.hasOwnProperty("bar") !== "undefined") {\n            // data.foo.bar is beeing updated\n        }\n    }\n// ...\n    onAfterChildrenUpdate(child, data, options) {\n        // here we can do some stuff, after the childrens update() method had been called\n        if(child._data.some_attribute === "bar") {\n            this.doSomeOtherUpdateOrAction();\n        }\n        // be aware, that child._data contains the latest data and \'data\' is the original parameter data!\n        // check if some data property has been updated/changed\n        if(typeof data?.other?.hasOwnProperty("example") !== "undefined") {\n            // data.other.example has been updated\n        }        \n    }\n// ...\n    open() {\n        this.events().trigger("before_open");\n        // some opening stuff ...   \n        const foo = "bar";\n        this.events().trigger("after_open");\n    }\n}\n// ...\nMyParentComponent.template = () => {\n    return `\n<my-parent-component>\n    <h1><%= title %></h1>\n    <my-children-component sipa-alias="childy"></my-children-component>\n<my-parent-component>    \n    `.trim();\n}\n')))}m.isMDXComponent=!0}}]);