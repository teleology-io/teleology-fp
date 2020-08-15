# @teleology/fp

A collection of functional utilities supporting pipes


## pipe 

Accepts a variadic list of functions and passes one argument to the next from top-to-bottom.

Example:
```javascript
const { pipe } = require('@teleology/fp');

const a = (s) => s - 12;
const b = (s) => s * 3;

pipe(
    a, 
    b, 
    console.log
)(10); // -6
```


## compose 

Accepts a variadic list of functions and passes one argument to the next from bottom-to-top. 

Example:
```javascript
const { compose } = require('@teleology/fp');

const a = (s) => s - 12;
const b = (s) => s * 3;

compose(
    console.log,
    a, 
    b
)(10); // 18
```


## parallel

Accepts a variadic list of functions and returns a curried function. The curried function can then be invoked and will delegate its arguments in parallel across the functions. 

Example:
```javascript
const { parallel } = require('@teleology/fp');
const logDb = require('./apis/logs');

// Writes to both local logs as well as to our external api
const logger = parallel(
    logDb,
    console.log
);

logger({
    source: 'app',
    action: 'clicked login',
    time: Date.now(),
});
```


## toss

Curries an error message returning an invocable function to throw. The invocable function can accept params 
to assign additional data to the Error.

Example:
```javascript
const { toss } = require('@teleology/fp');

toss('An error occured')({ code: 403, reason: 'Entity already exists' });
// Error: An error occured
//     ...
//     at internal/main/run_main_module.js:17:47 {
//   code: 403, 
//   reason: 'Entity already exists'
// }
```


## pick

Curry a dot notation path and default value, returns an invocable function requiring a target object.

Example:
```javascript
const { pick } = require('@teleology/fp');

pick('[0].a.b')([
  {
    a: {
      b: 'hello',
    },
  },
]); // hello
```


## map

A curried map function to be invoked within an Array.

Example:
```javascript
const { map } = require('@teleology/fp');

map((a) => a.id)([
  {
    id: '1',
  },
  {
    id: '2',
  },
]); // [ '1', '2' ]
```


## filter

A curried filter function to be invoked within an Array. 

Example:
```javascript
const { filter } = require('@teleology/fp');

filter((a) => a.id === '1')([
  {
    id: '1',
  },
  {
    id: '2',
  },
]); // [ { id: '1' } ]
```


## find

A curried find function to be invoked within an Array. 

Example:
```javascript
const { find } = require('@teleology/fp');

find((a) => a.id === '1')([
  {
    id: '1',
  },
  {
    id: '2',
  },
]); // { id: '1' }
```


## clean

Recursively removes empty values. An empty value is: `null, empty string, undefined, an empty array or object`.

Example:
```javascript
const { clean } = require('@teleology/fp');

clean({
  a: null,
  b: '',
  c: undefined,
  d: {},
  e: [],
  f: 'hello',

  nested: { will: { be: { removed: {} } } },
}); // { f: 'hello' }
```


----

## Changelog 
**1.0.4**
- Adding a clean function to remove empty values

**1.0.1**

- Renaming broadcast to parallel
- Added find, filter functions
- Updated README with examples
- Updated `toss` to be invoked later to capture param