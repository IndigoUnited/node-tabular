# tabular

Create fluid lists in which the first column adapts to the content.


## Installation

`$ npm install tabular`


## Usage

Using this module is really simple. The example below should show you everything
you need to know about the module:

```js
var Tabular = require('tabular');

var tab = new Tabular({
    // allows you to control the padding between the two columns
    padding: 4, // default is 2
    // allows you to control the left margin of the first column
    marginLeft: 2 // default is 0
});

tab.push(['this is useful', 'if you do not know the size']);
tab.push(['of the', 'largest first column']);

console.log(tab.get());
```


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
