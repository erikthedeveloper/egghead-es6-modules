**This is the source for the [Egghead.io](https://egghead.io/) ES6 lesson [ES6 Modules - Import and Export (ES2015)](https://egghead.io/)**

### To Run/Develop

**npm global dependencies**
- BrowserSync
- Webpack

```
npm install
npm start
```

This should open your web browser with the BrowserSync server running and watching for changes.

Open up the console in your dev tools!

See `package.json` for `npm start` details.

## ES6 Modules

ES6 (ES2015) introduces a [standardized module format](http://babeljs.io/docs/learn-es2015/#modules) to Javascript. We'll take a look at the various forms of defining and importing modules. Using [Webpack](http://webpack.github.io/) to bundle up our modules and [Babel](http://babeljs.io/) to transpile our ES6 into ES5, we'll put this new module syntax to work within our project. Then we'll examine how to import 3rd party packages from npm, importing [lodash](https://lodash.com/) with the `_` underscore alias using the ES6 module syntax.

**Some Common Import/Export Variations**
```js
import {someFunction} from 'someModule';

import {someFunction as someAlias} from 'someModule';

import * as someModule from 'someModule';

export function someFunction() {/* */};

function someFunction() {/* */}; export {someFunction};

function someFunction() {/* */}; export {someFunction as someAlias};
```