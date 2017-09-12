PRETTY JSON 
== 

Simple library to render/format a JS obj to an HTML view.

I forked 
[this-repo](http://warfares.github.io/pretty-json).

* I removed dependency except jquery. (I will remove jquery too.)
* Enable module import via npm.
* Change code to es6
* Remove mouse event and fold 

Dependecies
--
* JQuery 1.11.1 (DOM manipulation)

Download
--
```
npm install pretty-json-string

let prettyJson = require('pretty-json-string')
or
import prettyJson from 'pretty-json-string'
``
`
Usage
--
<pre>

//obj to render.
var obj = {
  name:'John Doe',
  age: 20,
  children:[{name:'Jack', age:5}, {name:'Ann', age:8}],
  wife:{name:'Jane Doe', age:28 }
}

var node = prettyJson(obj, {
  el:$('#elem'),
});


</pre>

Properties.
--
<b>el</b>: DOM elem to append the JSON-HTML view.
<br/>
<b>data</b>: the JSON data.
<br/>
<b>dateFormat</b>: <em>(optional)</em> format date, ex: "DD/MM/YYYY HH24:MI:SS". 
  - YYYY : year
  - YY : year
  - MM : month
  - DD : day
  - HH24 : hour 24-format
  - HH : hours
  - MI : minutes
  - SS : seconds


