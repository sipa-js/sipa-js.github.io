<a name="String"></a>

## SipaComponent
Easy but powerful component class implementation to create your reusable components

* [SipaComponent](#SipaComponent)
    * [new SipaComponent(data, options)](#new_SipaComponent_new)
    * _instance_
        * [._data](#SipaComponent+_data) : <code>Object</code>
        * [._meta](#SipaComponent+_meta) : [<code>Meta</code>](#SipaComponent.Meta)
        * [._component_id_incrementer](#SipaComponent+_component_id_incrementer) : <code>number</code>
        * [._component_instances](#SipaComponent+_component_instances) : <code>function</code>
        * [._registered_components](#SipaComponent+_registered_components) : <code>function</code>
        * [.initTemplate()](#SipaComponent+initTemplate)
        * [.html(options)](#SipaComponent+html) &rarr; <code>string</code>
        * [.node(options)](#SipaComponent+node) &rarr; <code>Element</code>
        * [.append(query_selector)](#SipaComponent+append) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.prepend(query_selector)](#SipaComponent+prepend) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.replaceWith(query_selector)](#SipaComponent+replaceWith) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.alias()](#SipaComponent+alias) &rarr; <code>string</code>
        * [.cloneData()](#SipaComponent+cloneData) &rarr; <code>Object</code>
        * [.resetToData(data, options)](#SipaComponent+resetToData) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.value()](#SipaComponent+value)
        * [.element()](#SipaComponent+element) &rarr; <code>Element</code> \| <code>undefined</code>
        * [.elements()](#SipaComponent+elements) &rarr; <code>Array.&lt;Element&gt;</code>
        * [.selector()](#SipaComponent+selector) &rarr; <code>string</code>
        * [.destroy()](#SipaComponent+destroy) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.isDestroyed()](#SipaComponent+isDestroyed) &rarr; <code>boolean</code>
        * [.remove()](#SipaComponent+remove) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.update(data, options)](#SipaComponent+update) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.render(options)](#SipaComponent+render) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.addClass(class_name, options)](#SipaComponent+addClass) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.hasClass(class_name)](#SipaComponent+hasClass) &rarr; <code>boolean</code>
        * [.removeClass(class_name, options)](#SipaComponent+removeClass) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.show(options)](#SipaComponent+show) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.hide(options)](#SipaComponent+hide) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.isHidden()](#SipaComponent+isHidden) &rarr; <code>boolean</code>
        * [.isVisible()](#SipaComponent+isVisible) &rarr; <code>boolean</code>
        * [.children()](#SipaComponent+children) &rarr; <code>Object.&lt;string, SipaComponent&gt;</code>
        * [.childrenAliases()](#SipaComponent+childrenAliases) &rarr; <code>Array.&lt;string&gt;</code>
        * [.childrenValues()](#SipaComponent+childrenValues) &rarr; [<code>Array.&lt;SipaComponent&gt;</code>](#SipaComponent)
        * [.hasChildren()](#SipaComponent+hasChildren) &rarr; <code>boolean</code>
        * [.slots()](#SipaComponent+slots) &rarr; <code>Object.&lt;string, Element&gt;</code>
        * [.parent()](#SipaComponent+parent) &rarr; <code>undefined</code> \| [<code>SipaComponent</code>](#SipaComponent)
        * [.hasParent()](#SipaComponent+hasParent) &rarr; <code>boolean</code>
        * [.parentTop()](#SipaComponent+parentTop) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.syncNestedReferences(options)](#SipaComponent+syncNestedReferences)
        * [.events()](#SipaComponent+events) &rarr; <code>SipaEvents</code>
        * [._inheritedClass()](#SipaComponent+_inheritedClass) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [._applyTemplateId(html)](#SipaComponent+_applyTemplateId) &rarr; <code>string</code>
        * [._applySlots(parsed, html)](#SipaComponent+_applySlots) &rarr; <code>string</code>
        * [._applyTemplateClasses(args)](#SipaComponent+_applyTemplateClasses) &rarr; <code>string</code> \| <code>ChildNode</code>
        * [._applyTemplateHiddenState(args)](#SipaComponent+_applyTemplateHiddenState) &rarr; <code>string</code> \| <code>ChildNode</code>
        * [._applyTemplateChildrenComponents(args, options)](#SipaComponent+_applyTemplateChildrenComponents) &rarr; <code>string</code> \| <code>ChildNode</code>
        * [._applyTemplateSipaList(args, options)](#SipaComponent+_applyTemplateSipaList) &rarr; <code>string</code> \| <code>ChildNode</code>
        * [._applyTemplateCustomAttributes(args)](#SipaComponent+_applyTemplateCustomAttributes) &rarr; <code>string</code> \| <code>ChildNode</code>
        * [._synchronizeDataToChildren(options)](#SipaComponent+_synchronizeDataToChildren)
        * [._synchronizeDataToParent()](#SipaComponent+_synchronizeDataToParent)
        * [._addChild(child)](#SipaComponent+_addChild)
    * _static_
        * [.all(options)](#SipaComponent.all) &rarr; <code>\*</code> \| <code>function</code>
        * [.bySipaId(sipa_id)](#SipaComponent.bySipaId) &rarr; <code>undefined</code> \| [<code>SipaComponent</code>](#SipaComponent)
        * [.destroyAll()](#SipaComponent.destroyAll)
        * [.init(css_selector)](#SipaComponent.init) &rarr; [<code>Array.&lt;SipaComponent&gt;</code>](#SipaComponent)
        * [.initElement(element, options)](#SipaComponent.initElement) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.initChildComponents(component)](#SipaComponent.initChildComponents) &rarr; <code>Element</code>
        * [.tagName()](#SipaComponent.tagName) &rarr; <code>string</code>
        * [.instanceOfElement(element)](#SipaComponent.instanceOfElement) &rarr; [<code>SipaComponent</code>](#SipaComponent)
        * [.registerComponent(component)](#SipaComponent.registerComponent)
        * [._parseHtml(html)](#SipaComponent._parseHtml) &rarr; <code>ChildNode</code>
        * [._generateUniqueId()](#SipaComponent._generateUniqueId) &rarr; <code>number</code>
        * [.template()](#SipaComponent.template) &rarr; <code>string</code>
        * [.Meta](#SipaComponent.Meta) : <code>Object</code>
        * [.Data](#SipaComponent.Data) : <code>Object</code>
        * [.Options](#SipaComponent.Options) : <code>Object</code>

<a name="new_SipaComponent_new"></a>

### new SipaComponent(data, options)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object.&lt;String, \*&gt;</code> |  | object of properties |
| options | <code>Object</code> |  |  |
| options.sipa_hidden | <code>boolean</code> | <code>false</code> | initial visibility state |
| options.sipa_cache | <code>boolean</code> | <code>true</code> | use node caching for templates |
| options.sipa_classes | <code>string</code> |  | additional classes for component tag |
| options.sipa_alias | <code>string</code> |  | alias to access from parent by uniq accessor name |
| options.sipa_render_period | <code>number</code> | <code>100</code> | max once per period (ms), a component is rerendered again on data changed. Set to 0 for unlimited renderings at the same time. |
| options.sipa_custom_attributes | <code>Object.&lt;string, string&gt;</code> |  | additional custom attributes on the component tag |
| options.content | <code>string</code> |  | HTML content inside the component element, available for slots |


**Example**
```js
const component = new SipaComponent({
```
<a name="SipaComponent+_data"></a>

### sipaComponent.\_data : <code>Object</code>
The components data representation
<a name="SipaComponent+_meta"></a>

### sipaComponent.\_meta : [<code>Meta</code>](#SipaComponent.Meta)
The components meta data for internal management
<a name="SipaComponent+_component_id_incrementer"></a>

### sipaComponent.\_component\_id\_incrementer : <code>number</code>
**Kind**: instance property of [<code>SipaComponent</code>](#SipaComponent)  
<a name="SipaComponent+_component_instances"></a>

### sipaComponent.\_component\_instances : <code>function</code>
class
<a name="SipaComponent+_registered_components"></a>

### sipaComponent.\_registered\_components : <code>function</code>
class
<a name="SipaComponent+initTemplate"></a>

### sipaComponent.initTemplate()
Ensure that the template is initialized, so that all nested children are available.
<a name="SipaComponent+html"></a>

### sipaComponent.html(options) &rarr; <code>string</code>
**Kind**: instance method of [<code>SipaComponent</code>](#SipaComponent)  

**Returns**: <code>string</code> - rendered HTML template() with current values of data  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| options.cache | <code>boolean</code> | <code>true</code> | use node cache |

<a name="SipaComponent+node"></a>

### sipaComponent.node(options) &rarr; <code>Element</code>
**Kind**: instance method of [<code>SipaComponent</code>](#SipaComponent)  

**Returns**: <code>Element</code> - element representation of html()  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| options.cache | <code>boolean</code> | <code>true</code> | use node cache |

<a name="SipaComponent+append"></a>

### sipaComponent.append(query_selector) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Create a DOM node of the instance and append it to the given css query selector

| Param | Type |
| --- | --- |
| query_selector | <code>string</code> | 

<a name="SipaComponent+prepend"></a>

### sipaComponent.prepend(query_selector) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Create a DOM node of the instance and prepend it to the given css query selector

| Param | Type |
| --- | --- |
| query_selector | <code>string</code> | 

<a name="SipaComponent+replaceWith"></a>

### sipaComponent.replaceWith(query_selector) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Create a DOM node of the instance and replace it to the given css query selector

| Param | Type |
| --- | --- |
| query_selector | <code>string</code> | 

<a name="SipaComponent+alias"></a>

### sipaComponent.alias() &rarr; <code>string</code>
Get the sipa alias of the current instance
<a name="SipaComponent+cloneData"></a>

### sipaComponent.cloneData() &rarr; <code>Object</code>
Get cloned data of the current instance.
<a name="SipaComponent+resetToData"></a>

### sipaComponent.resetToData(data, options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Set cloned data of the current instance

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  |  |
| options | <code>Object</code> |  |  |
| options.render | <code>boolean</code> | <code>true</code> | render component after data update |

<a name="SipaComponent+value"></a>

### sipaComponent.value()
Value representation of the component. Should be usually overwritten by the inherited component class.
<a name="SipaComponent+element"></a>

### sipaComponent.element() &rarr; <code>Element</code> \| <code>undefined</code>
Get the (first) element of the current instance that is in the DOM
<a name="SipaComponent+elements"></a>

### sipaComponent.elements() &rarr; <code>Array.&lt;Element&gt;</code>
Get all elements of the current instance that is in the DOM.
<a name="SipaComponent+selector"></a>

### sipaComponent.selector() &rarr; <code>string</code>
Get the unique css selector of the current instance(s) element(s)

**Returns**: <code>string</code> - css selector  
<a name="SipaComponent+destroy"></a>

### sipaComponent.destroy() &rarr; [<code>SipaComponent</code>](#SipaComponent)
Destroy the components DOM representation and class data representation
<a name="SipaComponent+isDestroyed"></a>

### sipaComponent.isDestroyed() &rarr; <code>boolean</code>
Check if the current instance is destroyed

**Returns**: <code>boolean</code> - true if destroyed  
<a name="SipaComponent+remove"></a>

### sipaComponent.remove() &rarr; [<code>SipaComponent</code>](#SipaComponent)
Remove the DOM representation(s), but keep the class data representation
<a name="SipaComponent+update"></a>

### sipaComponent.update(data, options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Update the data of the instance and its children by alias if available. Then rerender its view.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | [<code>Data</code>](#SipaComponent.Data) |  |  |
| options | <code>Object</code> |  |  |
| options.render | <code>boolean</code> | <code>true</code> | rerender DOM elements after data update |
| options.reset | <code>boolean</code> | <code>false</code> | if false, merge given data with existing, otherwise reset component data to given data |
| options.cache | <code>boolean</code> | <code>true</code> | use node cache or not on component and all(!) children and their children |


**Example**
```js
<example-component enabled="false">
```
<a name="SipaComponent+render"></a>

### sipaComponent.render(options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Render component again

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| options.cache | <code>boolean</code> | <code>true</code> | use node cache or not on component and all(!) children and their children |
| options.render_period | <code>boolean</code> |  | overwrite default render period (_meta.sipa._render_period) only once |

<a name="SipaComponent+addClass"></a>

### sipaComponent.addClass(class_name, options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Add given class to the current instance tag element and store its state

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| class_name | <code>string</code> |  | one or more classes separated by space |
| options | <code>Object</code> |  |  |
| options.update | <code>boolean</code> | <code>true</code> | rerender current instance DOM with new class |

<a name="SipaComponent+hasClass"></a>

### sipaComponent.hasClass(class_name) &rarr; <code>boolean</code>
Check if current component instance has given class(es) in its class state

**Returns**: <code>boolean</code> - true if class is set  

| Param | Description |
| --- | --- |
| class_name | one or more classes that must be included |


**Example**
```js
<example-component class="test bingo">Example</example-component>
```
<a name="SipaComponent+removeClass"></a>

### sipaComponent.removeClass(class_name, options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Remove given class from the current instance tag element and its state

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| class_name | <code>string</code> |  | one or more classes separated by space |
| options | <code>Object</code> |  |  |
| options.update | <code>boolean</code> | <code>true</code> | rerender current instance DOM without removed class |

<a name="SipaComponent+show"></a>

### sipaComponent.show(options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Show current instance

| Param | Type | Default |
| --- | --- | --- |
| options | <code>Object</code> |  | 
| options.update | <code>boolean</code> | <code>true</code> | 

<a name="SipaComponent+hide"></a>

### sipaComponent.hide(options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Hide current instance

| Param | Type | Default |
| --- | --- | --- |
| options | <code>Object</code> |  | 
| options.update | <code>boolean</code> | <code>true</code> | 

<a name="SipaComponent+isHidden"></a>

### sipaComponent.isHidden() &rarr; <code>boolean</code>
Check if current instance is hidden
<a name="SipaComponent+isVisible"></a>

### sipaComponent.isVisible() &rarr; <code>boolean</code>
Check if current instance is visible
<a name="SipaComponent+children"></a>

### sipaComponent.children() &rarr; <code>Object.&lt;string, SipaComponent&gt;</code>
Return children components of the current component with its sipa-aliases as their keys.

**Returns**: <code>Object.&lt;string, SipaComponent&gt;</code> - Object<alias, component>  

**Example**
```js
<example-component>
```
<a name="SipaComponent+childrenAliases"></a>

### sipaComponent.childrenAliases() &rarr; <code>Array.&lt;string&gt;</code>
Return all keys for children aliases
<a name="SipaComponent+childrenValues"></a>

### sipaComponent.childrenValues() &rarr; [<code>Array.&lt;SipaComponent&gt;</code>](#SipaComponent)
Return all values of children
<a name="SipaComponent+hasChildren"></a>

### sipaComponent.hasChildren() &rarr; <code>boolean</code>
Check if the component has any children or not
<a name="SipaComponent+slots"></a>

### sipaComponent.slots() &rarr; <code>Object.&lt;string, Element&gt;</code>
Return all instantiated slot elements of the current instance by name.
<a name="SipaComponent+parent"></a>

### sipaComponent.parent() &rarr; <code>undefined</code> \| [<code>SipaComponent</code>](#SipaComponent)
Get parent component, if current component is a child component

**Returns**: <code>undefined</code> \| [<code>SipaComponent</code>](#SipaComponent) - component  
<a name="SipaComponent+hasParent"></a>

### sipaComponent.hasParent() &rarr; <code>boolean</code>
Check if the component has a parent or not
<a name="SipaComponent+parentTop"></a>

### sipaComponent.parentTop() &rarr; [<code>SipaComponent</code>](#SipaComponent)
Get the top level parent component, that has no parent component.

**Returns**: [<code>SipaComponent</code>](#SipaComponent) - component  

**Example**
```js
<example-component>
```
<a name="SipaComponent+syncNestedReferences"></a>

### sipaComponent.syncNestedReferences(options)
Refresh all data references from top parent to all nested children and children below.

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.update_data | <code>Object</code> | update data if given |

<a name="SipaComponent+events"></a>

### sipaComponent.events() &rarr; <code>SipaEvents</code>
Events of the component to subscribe, unsubscribe or trigger
<a name="SipaComponent+_inheritedClass"></a>

### sipaComponent.\_inheritedClass() &rarr; [<code>SipaComponent</code>](#SipaComponent)
Get inherited class
<a name="SipaComponent+_applyTemplateId"></a>

### sipaComponent.\_applyTemplateId(html) &rarr; <code>string</code>
Add sipa-id attribute to given template html

| Param | Type |
| --- | --- |
| html | <code>string</code> | 

<a name="SipaComponent+_applySlots"></a>

### sipaComponent.\_applySlots(parsed, html) &rarr; <code>string</code>
Replace slots to given parsed template

| Param | Type | Description |
| --- | --- | --- |
| parsed | <code>ChildNode</code> |  |
| html | <code>string</code> | raw for performance reasons |

<a name="SipaComponent+_applyTemplateClasses"></a>

### sipaComponent.\_applyTemplateClasses(args) &rarr; <code>string</code> \| <code>ChildNode</code>
Add class attribute to given template html.

| Param | Type |
| --- | --- |
| args | <code>Object</code> | 
| args.html | <code>string</code> | 
| args.parsed | <code>ChildNode</code> | 

<a name="SipaComponent+_applyTemplateHiddenState"></a>

### sipaComponent.\_applyTemplateHiddenState(args) &rarr; <code>string</code> \| <code>ChildNode</code>
Check and set display style to given template html

| Param | Type |
| --- | --- |
| args | <code>Object</code> | 
| args.html | <code>string</code> | 
| args.parsed | <code>ChildNode</code> | 

<a name="SipaComponent+_applyTemplateChildrenComponents"></a>

### sipaComponent.\_applyTemplateChildrenComponents(args, options) &rarr; <code>string</code> \| <code>ChildNode</code>
Replace children components to given template html

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| args | <code>Object</code> |  |  |
| args.html | <code>string</code> |  |  |
| args.parsed | <code>ChildNode</code> |  |  |
| options | <code>Object</code> |  |  |
| options.cache | <code>boolean</code> | <code>true</code> | use node cache |

<a name="SipaComponent+_applyTemplateSipaList"></a>

### sipaComponent.\_applyTemplateSipaList(args, options) &rarr; <code>string</code> \| <code>ChildNode</code>
Replace children components to given template html

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| args | <code>Object</code> |  |  |
| args.html | <code>string</code> |  |  |
| args.parsed | <code>ChildNode</code> |  |  |
| options | <code>Object</code> |  |  |
| options.cache | <code>boolean</code> | <code>true</code> | use node cache |

<a name="SipaComponent+_applyTemplateCustomAttributes"></a>

### sipaComponent.\_applyTemplateCustomAttributes(args) &rarr; <code>string</code> \| <code>ChildNode</code>
Apply custom attributes to given html template

| Param | Type |
| --- | --- |
| args | <code>Object</code> | 
| args.html | <code>string</code> | 
| args.parsed | <code>ChildNode</code> | 

<a name="SipaComponent+_synchronizeDataToChildren"></a>

### sipaComponent.\_synchronizeDataToChildren(options)
Synchronize children data from current instance to its children

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| options.recursive | <code>boolean</code> | <code>false</code> | synchronize through all children trees |
| options.update_data | <code>Object</code> |  | update data if given |

<a name="SipaComponent+_synchronizeDataToParent"></a>

### sipaComponent.\_synchronizeDataToParent()
Refresh data reference from current instance to its parent
<a name="SipaComponent+_addChild"></a>

### sipaComponent.\_addChild(child)
Add component child class instance to list of current instance children

| Param | Type |
| --- | --- |
| child | [<code>SipaComponent</code>](#SipaComponent) | 

<a name="SipaComponent.all"></a>

### SipaComponent.all(options) &rarr; <code>\*</code> \| <code>function</code>
Return all instances of the component

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  |  |
| options.include_children | <code>boolean</code> | <code>false</code> | include embedded children components |

<a name="SipaComponent.bySipaId"></a>

### SipaComponent.bySipaId(sipa_id) &rarr; <code>undefined</code> \| [<code>SipaComponent</code>](#SipaComponent)
Get instance of current component class by sipa-id

| Param | Type |
| --- | --- |
| sipa_id | <code>number</code> | 

<a name="SipaComponent.destroyAll"></a>

### SipaComponent.destroyAll()
Destroy all instances of current component class
<a name="SipaComponent.init"></a>

### SipaComponent.init(css_selector) &rarr; [<code>Array.&lt;SipaComponent&gt;</code>](#SipaComponent)
Initialize all uninitialized components of the current component class in the DOM inside the given css selector automatically.

| Param | Type | Default |
| --- | --- | --- |
| css_selector | <code>string</code> | <code>&quot;&#x27;body&#x27;&quot;</code> | 

<a name="SipaComponent.initElement"></a>

### SipaComponent.initElement(element, options) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Init given element as the current component class

**Returns**: [<code>SipaComponent</code>](#SipaComponent) - component instance  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> |  |
| options | <code>Object</code> |  |
| options.sipa_component | [<code>SipaComponent</code>](#SipaComponent) | if given, reinit given component instance |
| options.parent_data | <code>Object</code> | data of parent element, if this is a child |

<a name="SipaComponent.initChildComponents"></a>

### SipaComponent.initChildComponents(component) &rarr; <code>Element</code>
Init child components of the given component if available

| Param | Type |
| --- | --- |
| component | [<code>SipaComponent</code>](#SipaComponent) | 

<a name="SipaComponent.tagName"></a>

### SipaComponent.tagName() &rarr; <code>string</code>
Get tag name of current component class

**Example**
```js
<example-component>blub</example-component>
```
<a name="SipaComponent.instanceOfElement"></a>

### SipaComponent.instanceOfElement(element) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Get the component instance of the given element or one of its parent

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 


**Example**
```js
<example-component sipa-id="1">
```
<a name="SipaComponent.registerComponent"></a>

### SipaComponent.registerComponent(component)
Register given component class.

| Param | Type |
| --- | --- |
| component | [<code>SipaComponent</code>](#SipaComponent) | 


**Example**
```js
class MyComponent extends SipaComponent {
```
<a name="SipaComponent._parseHtml"></a>

### SipaComponent.\_parseHtml(html) &rarr; <code>ChildNode</code>
Parse Html string to element and return the first element of the string

| Param |
| --- |
| html | 

<a name="SipaComponent._generateUniqueId"></a>

### SipaComponent.\_generateUniqueId() &rarr; <code>number</code>
Generate unique component id (auto increment)
<a name="SipaComponent.template"></a>

### SipaComponent.template() &rarr; <code>string</code>
Returns the template. Can be with embedded with EJS.

**Example**
```js
class MyComponent extends SipaComponent {
```
<a name="SipaComponent.Meta"></a>

### SipaComponent.Meta : <code>Object</code>
**Kind**: static typedef of [<code>SipaComponent</code>](#SipaComponent)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sipa | <code>Object</code> |  | all sipa meta info |
| sipa.id | <code>number</code> |  | auto increment |
| sipa.classes | <code>string</code> |  | internal state representation for classes managed by components methods addClass() and removeClass() |
| sipa.hidden | <code>boolean</code> | <code>false</code> | state representation of hide() and show() methods |
| sipa.cache | <code>boolean</code> | <code>true</code> | use node caching for templates |
| sipa.alias | <code>string</code> |  | alias to access children by uniq accessor name |
| sipa.children | [<code>Array.&lt;SipaComponent&gt;</code>](#SipaComponent) |  | array of children sipa components |
| sipa.parent | [<code>SipaComponent</code>](#SipaComponent) |  | parent sipa component when using nested components |
| sipa.list | <code>string</code> |  | parent sipa components _data reference, if the component has been initialized by using sipa-list |
| sipa.original_display | <code>string</code> |  | store original display style when using hide() to restore on show() |
| sipa.changed_visibility | <code>boolean</code> |  | info if visibility has been changed at least once |
| sipa.custom_attributes | <code>Object.&lt;string, string&gt;</code> |  | state representation of declarative custom attributes defined with attr- prefix |
| sipa.body_nodes | <code>NodeList</code> |  | body as childNodes of original declarative element |
| sipa._destroyed | <code>boolean</code> | <code>false</code> | Flag to determine if object has been destroyed |
| sipa._data_changed | <code>boolean</code> | <code>true</code> | Flag for caching rendered nodes |
| sipa._cached_node | <code>Element</code> | <code></code> | Store cached node to reuse when rendering again without any data change or update() |
| sipa._render_period | <code>number</code> | <code>100</code> | Only one rendering per period in milliseconds for performance reasons. Disabled when option is 0. Caution: when rendering several times in this period, only the first and last rendering will happen at 0ms and 100ms |

<a name="SipaComponent.Data"></a>

### SipaComponent.Data : <code>Object</code>
**Kind**: static typedef of [<code>SipaComponent</code>](#SipaComponent)  
<a name="SipaComponent.Options"></a>

### SipaComponent.Options : <code>Object</code>
**Kind**: static typedef of [<code>SipaComponent</code>](#SipaComponent)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| update_view_only_when_visible | <code>boolean</code> | <code>false</code> | 

<a name="_sync_nested_references"></a>

## \_sync\_nested\_references : <code>boolean</code>
Sync nested references automatically after every render update
<a name="instance"></a>

## instance(element) &rarr; [<code>SipaComponent</code>](#SipaComponent)
Get instance of current component. For usage in component templates

| Param | Type |
| --- | --- |
| element | <code>Element</code> | 


**Example**
```js
class MyComponent extends SipaComponent {
```