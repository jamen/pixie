## Classes

<dl>
<dt><a href="#Template">Template</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#compile">compile([template], opts)</a> ⇒ <code>Buffer</code> | <code>String</code> | <code>Array</code></dt>
<dd><p>Compile a <code>Template</code> object with the given data and engines.</p>
</dd>
<dt><a href="#create">create(json)</a> ⇒ <code><a href="#Template">Template</a></code></dt>
<dd><p>Create a <code>Template</code> object from JSON.</p>
</dd>
<dt><a href="#parse">parse([source], opts)</a> ⇒ <code><a href="#Template">Template</a></code></dt>
<dd><p>Parse a source into a <code>Template</code> object.</p>
</dd>
<dt><a href="#render">render([source], opts)</a> ⇒ <code>Buffer</code> | <code>String</code> | <code>Array</code></dt>
<dd><p>Parse and compile a source in one action.</p>
</dd>
</dl>

<a name="Template"></a>
## Template
**Kind**: global class  

* [Template](#Template)
    * [new Template(source, points, meta)](#new_Template_new)
    * [.clone([meta])](#Template+clone) ⇒ <code>[Template](#Template)</code>
    * [.serialize([replace], [space])](#Template+serialize) ⇒ <code>String</code>

<a name="new_Template_new"></a>
### new Template(source, points, meta)
An object that holds expressions and locations against a source.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code> |  | The source of the template. |
| points | <code>Array</code> |  | Expressions and their locations. |
| meta | <code>Object</code> |  | Metadata of the template. |
| [meta.noOrder] | <code>Boolean</code> | <code>false</code> | Prevent reordering of data right-to-left. |

<a name="Template+clone"></a>
### template.clone([meta]) ⇒ <code>[Template](#Template)</code>
Clone current `Template` into a new `Template`.

**Kind**: instance method of <code>[Template](#Template)</code>  
**Returns**: <code>[Template](#Template)</code> - Clone of the current template.  

| Param | Type | Description |
| --- | --- | --- |
| [meta] | <code>Object</code> | Metadata of new template. |

<a name="Template+serialize"></a>
### template.serialize([replace], [space]) ⇒ <code>String</code>
Serialize the template to JSON.

**Kind**: instance method of <code>[Template](#Template)</code>  
**Returns**: <code>String</code> - JSON representation of the `Template`.  

| Param | Type | Description |
| --- | --- | --- |
| [replace] | <code>replace</code> | Replacer method for JSON.stringify. |
| [space] | <code>space</code> | Spacing for JSON.stringify. |

<a name="compile"></a>
## compile([template], opts) ⇒ <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code>
Compile a `Template` object with the given data and engines.

**Kind**: global function  
**Returns**: <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code> - Same type the template uses.  

| Param | Type | Description |
| --- | --- | --- |
| [template] | <code>[Template](#Template)</code> | Alias of opts.template. |
| opts | <code>Object</code> | Options for the compiler. |
| opts.template | <code>[Template](#Template)</code> | Template to compile. |
| opts.data | <code>Object</code> | Data to use in template. |
| [opts.engines] | <code>Array</code> | Engines to use when compiling. |
| [opts.serialize] | <code>function</code> | Data serialization method. |

<a name="create"></a>
## create(json) ⇒ <code>[Template](#Template)</code>
Create a `Template` object from JSON.

**Kind**: global function  
**Returns**: <code>[Template](#Template)</code> - Unserialized template.  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Buffer</code> &#124; <code>String</code> | JSON of a serialized template. |

<a name="parse"></a>
## parse([source], opts) ⇒ <code>[Template](#Template)</code>
Parse a source into a `Template` object.

**Kind**: global function  
**Returns**: <code>[Template](#Template)</code> - A `Template` object of the source.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [source] | <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code> |  | Alias of opts.source. |
| opts | <code>Object</code> |  | Options for the parser. |
| opts.source | <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code> |  | Source to parse into a template. |
| [opts.prefix] | <code>String</code> | <code>&quot;#{&quot;</code> | Expression opening tag. |
| [opts.suffix] | <code>String</code> | <code>&quot;}&quot;</code> | Expression closing tag. |
| [opts.meta] | <code>Object</code> |  | Metadata info passed into template. |

<a name="render"></a>
## render([source], opts) ⇒ <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code>
Parse and compile a source in one action.

**Kind**: global function  
**Returns**: <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code> - The compiled template of the source.  

| Param | Type | Description |
| --- | --- | --- |
| [source] | <code>Buffer</code> &#124; <code>String</code> &#124; <code>Array</code> | Alias of opts.source. |
| opts | <code>Object</code> | Options passed to both parser and compiler. |

