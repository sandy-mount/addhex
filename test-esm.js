import { addHex } from './lib/index.js';

// Test a few cases
console.log('a + b =', addHex('a', 'b'));
console.log('ff + 1 =', addHex('ff', '1'));
console.log('deadbeef + c0ffee =', addHex('deadbeef', 'c0ffee')); 