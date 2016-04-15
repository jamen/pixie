## Functions

<dl>
<dt><a href="#compile">compile(template, [data], [options])</a> ⇒ <code>String</code></dt>
<dd><p>Compile a template object into an output source.</p>
</dd>
<dt><a href="#parse">parse(source, [options])</a> ⇒ <code>Object</code></dt>
<dd><p>Parse a template source into a template object.</p>
</dd>
<dt><a href="#render">render(source, [data], [options])</a> ⇒ <code>String</code></dt>
<dd><p>Render a template source into an output source.</p>
</dd>
</dl>

<a name="compile"></a>
## compile(template, [data], [options]) ⇒ <code>String</code>
Compile a template object into an output source.

**Kind**: global function  
**Returns**: <code>String</code> - Compiled source.  

| Param | Type | Description |
| --- | --- | --- |
| template | <code>Object</code> | A template object. |
| [data] | <code>Object</code> | Data to compile against the template. |
| [options] | <code>Object</code> | Options for compiling. |

<a name="parse"></a>
## parse(source, [options]) ⇒ <code>Object</code>
Parse a template source into a template object.

**Kind**: global function  
**Returns**: <code>Object</code> - A template object used for compiling.  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | Template source to parse. |
| [options] | <code>Object</code> | Options for parsing. |

<a name="render"></a>
## render(source, [data], [options]) ⇒ <code>String</code>
Render a template source into an output source.

**Kind**: global function  
**Returns**: <code>String</code> - Compiled template.  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | Template source to parse. |
| [data] | <code>data</code> | Data to compile against the template. |
| [options] | <code>Object</code> | Options for parsing and compiling. |

