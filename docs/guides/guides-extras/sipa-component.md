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
        this.events().subscribe("before_destroy", this.onDestroy);
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

Let's access the instance of the element on the console and retrieve a clone of its data:
```javascript 
c = ExampleComponent.all()[0]; // get first instance of ExampleComponent
console.log(c.cloneData());
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

### Declarative nesting
To do so, you have to embed them in your `template()` method the declarative way.

All embedded components must have declared by a `sipa-alias` attribute, to give them a name to access them by their parent instance.

```html title="car-component.js"
// ...
CarComponent.template = () => {
    return `
<car-component onclick="instance(this).children().steering_wheel.update({locked: false });">
    <h1><%= title %></h1>
    <span>Locked state of steering wheel: <%= steering_wheel.locked %></span>
    <steering-wheel-component sipa-alias="steering_wheel" locked="true"></steering-wheel-component>
    <wheel-component sipa-alias="wheel_front_left" state="'ok'"></wheel-component>
    <wheel-component sipa-alias="wheel_front_right" state="'hot'"></wheel-component>
    <wheel-component sipa-alias="wheel_back_left" state="'ok'"></wheel-component>
    <wheel-component sipa-alias="wheel_back_right" state="'broken'"></wheel-component>
    <brake-lights-component state="'<%= brake.put_on ? 'on' : 'off' %>'"></brake-lights-component>
    <starter-component attr-onclick="instance(this).parentTop().update({ title: 'NewCarTitle' });"></starter-component>
    <% if(wheel_front_left.state === 'broken' && wheel_front_right.state === 'broken) { %>
        <span class="warn-message">Both frond wheels are broken!</span>
    <% } %>
<car-component>    
    `.trim();
}
// ...
```

In nested components, you can access children instances by `children()`, the parent top with `parent()` and the top level parent by `parentTop()` if nested over several levels.
Of course you can access these methods not only in the template, but also in the class instance or everywhere in your code.

But children data for EJS is accessible in the parent class at the attribute defined with `sipa-alias`.

### Nesting programmatically

#### Full customized nesting
In this example we will insert the wheel-components programmatically the very custom way.

The next section you will find a example using a more easy and automated way to solve this.

```html title="car-component.js"
// ...
CarComponent.template = () => {
    return `
<car-component onclick="instance(this).children().steering_wheel.update({locked: false });">
    <h1><%= title %></h1>
    <span>Locked state of steering wheel: <%= steering_wheel.locked %></span>
    <steering-wheel-component sipa-alias="steering_wheel" locked="true"></steering-wheel-component>
    <div class="wheel_container"></div>
    <brake-lights-component state="'<%= brake.put_on ? 'on' : 'off' %>'"></brake-lights-component>
    <starter-component attr-onclick="instance(this).parentTop().update({ title: 'NewCarTitle' });"></starter-component>
    <% if(wheel_front_left.state === 'broken' && wheel_front_right.state === 'broken) { %>
        <span class="warn-message">Both frond wheels are broken!</span>
    <% } %>
<car-component>    
    `.trim();
}
// ...
```

```javascript title="car-component.js"
class CarComponent extends SipaComponent {
    // ...
    
    // we instance our elements in the constructor
    constructor(data = {}, opts = {}) {
        // define your defaults here
        data.example ??= "world";
        data.wheels = [
            new WheelComponent({ sipa_alias: "wheel_front_left", state: "ok", locked: true }),
            new WheelComponent({ sipa_alias: "wheel_front_right", state: "hot" }),
            new WheelComponent({ sipa_alias: "wheel_back_left", state: "ok" }),
            new WheelComponent({ sipa_alias: "wheel_back_right", state: "broken" }),
        ]; 
        super(data, opts);
    }    
    
    
    // we overwrite the render method and render the elements after 
    // the original rendering has been finished
    render(options = {}) {
        const result = super.render(options);
        this._data.wheels.eachWithIndex((wheel, i) => {
            wheel.append(`${this.selector()} > .container`);
        });
        return result;
    }
    
    // ...
}
```

#### Using sipa-list for generic lists

As dynamic lists are a common use case, Sipa provides a feature to make the programmatically use of them very easy.

When defining a `sipa-list` attribute on an element of your choice, we can reference it to a variable of type `Array` inside of `_data`.

This array can contain any `SipaComponents`, even a mixed list of different ones!

In case if you want even to define only one component programmatically, you can use `sipa-list` and only add one item.

```js title="car-component.js"
class MyListingComponent {
// ...
    constructor(data = {}, opts = {}) {
        // define your defaults here
        data.items = [];
        super(data, opts);
    }
// ...
    add() {
        this._counter ??= 1;
        this._data.items.push(new ListItemComponent({ name: randomName() }, { sipa_alias: "item_" + this._counter }));
        this.update();
    }
// ...    
}
// ...
MyListingComponent.template = () => {
    return `
<my-listing-component>
    <h1><%= title %></h1>
    <button onclick="instance(this).add();">Add item</button>
    <div sipa-list="items"></div>
<my-listing-component>    
    `.trim();
}
// ...
```

To remove an item from a `sipa-list`, just call its `destroy()` method, that will automatically remove it from the list and all its references automatically!

## Updating data

Usually you should only use the `update()` or `resetToData()` method to update your data.

### Manually modifying the `_data` attribute
If you have a very special case, where you modify _data manually, ensure that you call the `syncNestedReferences()` method to update `_data` references to parent and children components.

## Events
By default, `SipaComponent` ships with the following events: `before_update`,`after_update`,`before_destroy`,`after_destroy`.

These events are of type `SipaEvents` and can be subscribed to. A typical use case is listening to updates of children components by a parent component.

```js
class MyParentComponent {
// ...
    constructor(data = {}, opts = {}) {
        // define your defaults here
        data.items = [];
        super(data, opts);
        this.initTemplate(); // ensure the template and its children are initialized, otherwise this.children() will be empty
        this.children().childy.events().subscribe("before_update", this.onBeforeChildrenUpdate);
        this.children().childy.events().subscribe("after_update", this.onAfterChildrenUpdate);
        this.events().createEvents("before_open","after_open"); // create new events on the fly
    }
// ...
    onBeforeChildrenUpdate(child, data, options) {
        // here we can react or even modify the 'data' and 'options' parameters of update(data, options), as they are passed by reference
        if(data.some_data === true) {
            data.additional_data ??= "foo";   
        }
        // check if some data property is beeing updated/changed
        if(data?.foo?.hasOwnProperty("bar")) {
            // data.foo.bar is beeing updated
        }
    }
// ...
    onAfterChildrenUpdate(child, data, options) {
        // here we can do some stuff, after the childrens update() method had been called
        if(child._data.some_attribute === "bar") {
            this.doSomeOtherUpdateOrAction();
        }
        // be aware, that child._data contains the latest data and 'data' is the original parameter data!
        // check if some data property has been updated/changed
        if(data?.other?.hasOwnProperty("example")) {
            // data.other.example has been updated
        }        
    }
// ...
    open() {
        this.events().trigger("before_open");
        // some opening stuff ...   
        const foo = "bar";
        this.events().trigger("after_open");
    }
}
// ...
MyParentComponent.template = () => {
    return `
<my-parent-component>
    <h1><%= title %></h1>
    <my-children-component sipa-alias="childy"></my-children-component>
<my-parent-component>    
    `.trim();
}
```