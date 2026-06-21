// GitHub Copilot
// Basic JavaScript fundamentals demonstrated in one file.
// Run with: node array.js

// 1. Variables and scoping
var a = 10; // function-scoped, avoid in modern code
let b = 20; // block-scoped, mutable
const c = 30; // block-scoped, immutable binding

console.log('vars:', a, b, c);

// 2. Data types and typeof
console.log('types:', typeof a, typeof 'hello', typeof true, typeof null, typeof undefined, typeof Symbol('s'));

// 3. Template literals
const name = 'Alice';
console.log(`Hello, ${name}. a + b = ${a + b}`);

// 4. Functions (declaration, expression, arrow)
function add(x, y) {
    return x + y;
}
const sub = function (x, y) {
    return x - y;
};
const mul = (x, y) => x * y;

console.log('fn:', add(2, 3), sub(5, 2), mul(3, 4));

// 5. Arrays and common methods
const nums = [1, 2, 3, 4, 5];
console.log('array:', nums);
console.log('map x2:', nums.map(n => n * 2));
console.log('filter >2:', nums.filter(n => n > 2));
console.log('reduce sum:', nums.reduce((acc, n) => acc + n, 0));

// 6. Objects and destructuring
const person = {
    first: 'Bob',
    last: 'Smith',
    age: 28,
    hobbies: ['reading', 'gaming']
};
const { first, last, age } = person;
console.log('person:', first, last, age);
const personCopy = { ...person, age: 29 }; // spread to copy/override
console.log('copy:', personCopy);

// 7. Array of objects and find
const users = [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Ben' },
    { id: 3, name: 'Cara' }
];
const u = users.find(u => u.id === 2);
console.log('found user:', u);

// 8. Loops
for (let i = 0; i < nums.length; i++) {
    // classic for
}
for (const n of nums) {
    // for-of
}
Object.keys(person).forEach(k => {
    // iterate object keys
});

// 9. Rest and default params
function greet(greeting = 'Hi', ...names) {
    return `${greeting} ${names.join(', ')}`;
}
console.log(greet('Hello', 'A', 'B'));

// 10. Promises and async/await (simulate async)
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function asyncDemo() {
    console.log('waiting 500ms...');
    await wait(500);
    return 'done';
}
asyncDemo().then(res => console.log('async result:', res)).catch(err => console.error(err));

// 11. Try/catch
try {
    JSON.parse('not json'); // will throw
} catch (e) {
    console.log('caught error:', e.message);
}

// 12. Classes (basic)
class Counter {
    #value = 0; // private field
    constructor(start = 0) {
        this.#value = start;
    }
    increment() {
        this.#value++;
        return this.#value;
    }
    get value() {
        return this.#value;
    }
}
const ctr = new Counter(5);
console.log('counter:', ctr.increment(), ctr.value);

// 13. Short examples: truthy/falsy, equality
console.log('truthy:', !!'text', !!0, !![], !!null);
console.log('equality:', 0 == '0', 0 === '0'); // == vs ===

// 14. Small utility: unique array, flatten
const dup = [1, 2, 2, 3];
const unique = [...new Set(dup)];
console.log('unique:', unique);

const nested = [1, [2, 3], [4, [5]]];
const flat1 = nested.flat(2); // depth 2
console.log('flat:', flat1);

// End of fundamentals demo