---
sidebar_position: 1
---

# SipaComponent

With SipaComponent, Sipa provides a very easy to use, powerful basic component to encapsulate logic.

Compared to components in other frameworks, SipaComponent is much easier and simpler.

It is just HTML/Javascript without any transpiling, that runs directly in your browser.

The API documentation for [SipaComponent](/docs/api/SipaComponent) can be found [here](/docs/api/SipaComponent).

## Use case
The typical use cases to use SipaComponent are custom form elements as well as more complex gui logic, 
that you want to reuse more often or at least encapsulate into smaller, logical pieces.

## Features
SipaComponent has the following features:
* Templating with [EJS](https://ejs.co/) - so it's pure Javascript
* Component nesting - reuse components inside components
* Global Scope and access from its ComponentClass
* Integrated support for classes on the maine element (including its state management)
* Integrated support for hide/show (including its state management)
* Easy access to nested or parent components by aliases
* Auto support to render only if data changes or component is in view area (TODO)
* Declarative and programmatically use and initialization

## Create a new component
To create a new component, just run the Sipa generator by 
```
sipa g
```
and select `component`.

This will create a new component inside `app/assets/components` consisting of a prepared template of a Javascript and Stylesheet file.

```
├── app
│ └── assets
│   └──components
│     └── example-component
│       ├── example-component.js
│       └── example-component.(s)css
```

If you only want to use this component on a special page as page encapsulation, then create a subfolder `components` in your page directory and move the component directory inside it. E.g. `app/views/pages/my-page/components/example-component` and rerun `sipa i`.

## Component Structure

The new component template looks like this:

```javascript title="example-component.js"
class ExampleComponent extends SipaComponent {
    constructor(data = {}, opts = {}) {
        // define your defaults here
        data.example ??= "world";
        super(data, opts);
    }

    onInit() {
        // this is called after the view is added to the DOM
    }

    onDestroy() {
        // this is called, before the component is destroyed by destroy()
    }

    showAlert() {
        alert(`Bye, bye, ${this._data.example}!`);
    }
}

//--- TEMPLATE ---------------------------------------------------------------------------------------------------------

ExampleComponent.template = () => {
    return `
<example-component onclick="instance(this).showAlert();" class="template-class">
    <span>Hello <%= example =>!</span>
</example-component>
    `.trim();
}

SipaComponent.registerComponent(ExampleComponent);
``` 

```scss title="example-component.(s)css"
example-component {

}
```

### Explanation

* Component classes are usually named with the prefix `Component` and inherit from the `SipaComponent`. It's tag name is the same name in `dash-case`.
* Default values can be set in the constructor by `data.my_value ??= "default value"`.
* Data state is stored in the `_data` attribute of the class. It is not really private by purpose to give you the full control, if you need it.
* To access instance methods of your component inside your template, use `instance(this)` to get your instance class. It is a shortcut for `ExampleComponent.instanceOfElement(this)`
* The template is defined by a static `template` method. The template itself supports [EJS](https://ejs.co/) for templating. In EJS you have access to all children variables of `_data`. You can also access the `_meta` by `_meta.my_variable`.
* The component must be registered to the SipaComponent, to unleash its full power! (or to work at all)

## Using and initializing your component

You can either initialize your components declarative or programmatically, depending on your needs.

### Declarative initialization

For declarative initialization you can embed your component on any page inside the HTML.

Data parameters are given by attribute names. If you want to overwrite or add some real attribute to the initialized instance, use the prefix `attr-`.

Furthermore there are special attributes with the prefix `sipa-` to provide special features.

```html title="my-page.html"
<div id="some-container">
    <example-component example="'Pinky'" other="1+1" attr-style="color: red;" attr-class="declarative-class" sipa-hidden="true"></example-component>
</div>
```

In this example we pass the data `example` with the string value `Pinky`. Ensure to put the string in quotes, as the value inside the example attribute is pure javascript. You can also put in numbers or even run some code.
We also use the integrated hide/show feature and instance the component in hidden state.

The result of this example will be the following, rendered component:
```html title="rendered page DOM"
<div id="some-container">
    <example-component sipa-id="1" style="color: red;" class="template-class declarative-class">
        <span>Hello Pinky!</span>
    </example-component>
</div>
```

Classes on the components tag level are managed automatically, if their attribute is used twice, they will be merged.

Let's access the instance of the element on the console and retrieve its data:
```javascript 
c = ExampleComponent.all()[0]; // get first instance of ExampleComponent
console.log(c.data());
// => { example: "Pinky", other: 2 }
```

If we update the component, the state will be set and the view be rerendered.

```javascript
    c = ExampleComponent.bySipaId(1);
    c.update({ example: "Crocodile"});
    c.removeClass("declarative-class");
    c.addClass("super-class");
```
```html title="updated DOM"
<div id="some-container">
    <example-component sipa-id="1" style="color: red;" class="template-class super-class">
        <span>Hello Crocodile!</span>
    </example-component>
</div>
```

Be aware, never to manipulate classes externally on your own, as their state will not be stored. Always store your state in `_data` and respect the values with EJS inside your teamplate. When you use the `removeClass()` or `addClass()` provided by SipaComponent, it will take care of its state internally. So if you rerender your component, the state will remain. If you would manipulate the DOM externally, your changes will dissappear after the next render.


The initialization of declarative components can be done manually, especially when adding new components the declarative way dynamically.
Otherwise by default, they are initialized in the page init hook of your Sipa app:

```javascript title="app/config/hooks.js"
// ...
SipaHooks.beforeInitPage('on', () => {
    // This will initialize all registered SipaComponents and its inherited components in the DOM
    SipaComponent.init();
    // This would only initialize all ExampleComponents in the DOM
    // ExampleComponent.init();
});
// ...
```

### Initialize programatically

The same result as shown before the declarative way can be archived by the following HTML and Javascript code:
```html title="my-page.html"
<div id="some-container">
</div>
```

```javascript title="my-page.js"
class MyPage extends SipaBasicView {
    // ...
    onInit() {
        const c = new ExampleComponent({ 
            example: "Pinky", 
            other: 1 + 1, 
            sipa_hidden: true, 
            sipa_custom_attributes: { style: "color: red"}}
        );
        c.append("#some-container"); // append the instance to the container
        // We can also prepend the instance to the container:        
        // c.prepend("#some-container");
    }
    // ...
}
```

## Nesting components
You are able to nest components and make complex compositions for components in components.

To do so, you have to embed them in your `template()` method the declarative way.

```javascript title="car-component.js"
// ...
CarComponent.template = () => {
    return `
<car-component onclick="instance(this).steering_wheel.locked = false;">
    <h1><%= title %></h1>
    <steering-wheel-component sipa-alias="steering_wheel" locked="true">
    <wheel-component sipa-alias="wheel_front_left" state="'ok'">
    <wheel-component sipa-alias="wheel_front_right" state="'hot'">
    <wheel-component sipa-alias="wheel_back_left" state="'ok'">
    <wheel-component sipa-alias="wheel_back_right" state="'broken'">
    <brake-lights-component state="'<%= brake.put_on ? "on" : "off" %>'">
    <starter-component attr-onclick="instance(this).parentTop().wheel_front_left.state = 'hot';">
<car-component>    
    `.trim();
}
// ...
```