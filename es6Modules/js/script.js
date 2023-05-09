import {one as first, two} from './main.js';

console.log(first);
// console.log(`${one} and ${two}`);


// import all
import * as data from './main.js';

console.log(`${data.one} and ${data.two}`);
data.sayHi();

// default import
import sayHi from './main.js';
sayHi();