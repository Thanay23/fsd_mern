# JavaScript Basics — Fundamental Notes

## 1. What is JavaScript
- High-level, dynamic, prototype-based language.
- Runs in browsers and on servers (Node.js).
- Multi-paradigm: imperative, functional, and object-oriented.

## 2. Syntax & structure
- Statements end with `;` (optional but recommended).
- Comments: `// single-line`, `/* multi-line */`.

## 3. Values & Types
- Primitives: `undefined`, `null`, `boolean`, `number`, `bigint`, `string`, `symbol`.
- Objects: plain objects, arrays, functions, Dates, Maps, Sets, etc.
- `typeof` and `instanceof` for basic checks.

## 4. Variables
- `var` — function-scoped, hoisted (avoid).
- `let` — block-scoped, reassignment allowed.
- `const` — block-scoped, no reassignment (object contents can change).

Example:
```js
let x = 10;
const y = { n: 1 };
y.n = 2; // allowed
```

## 5. Operators
- Arithmetic: `+ - * / % **`
- Comparison: `==` vs `===` (use `===`), `!=` vs `!==`
- Logical: `&& || !`
- Nullish coalescing: `??`, optional chaining: `?.`

## 6. Control flow
- `if`, `else`, `switch`
- Loops: `for`, `while`, `do...while`, `for...of`, `for...in`

## 7. Functions
- Declarations:
```js
function add(a, b) { return a + b; }
```
- Expressions & arrow functions:
```js
const mul = (a, b) => a * b;
```
- Parameters: default, rest `...args`, destructuring.
- Functions are first-class (can be passed/returned).

## 8. Scope & Hoisting
- Global vs function vs block scope.
- Declarations are hoisted: `var` (value `undefined`), `let/const` in temporal dead zone.

## 9. Closures
- Functions remember the scope where they were created.
```js
function makeCounter() {
    let count = 0;
    return () => ++count;
}
```

## 10. Objects & Prototypes
- Object literal: `{ a: 1, b() {} }`
- Prototypal inheritance: objects delegate to `[[Prototype]]` (`__proto__`).
- `class` syntax is syntactic sugar over prototypes.

## 11. Arrays & Common Methods
- `push`, `pop`, `shift`, `unshift`.
- Iteration: `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`.

## 12. Asynchronous JS
- Callbacks (can cause "callback hell").
- Promises:
```js
fetch(url).then(res => res.json()).catch(err => console.error(err));
```
- `async/await`:
```js
async function getData() {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (e) { /* handle */ }
}
```

## 13. Error Handling
- `try { } catch (e) { } finally { }`
- Throw with `throw new Error('msg')`.

## 14. Modules
- ES Modules: `export` / `import`.
- CommonJS (Node): `module.exports` / `require`.

## 15. DOM (Browser basics)
- Select: `document.querySelector`, `getElementById`.
- Manipulate: `.textContent`, `.innerHTML`, `.classList`.
- Events: `addEventListener('click', handler)`.

## 16. Debugging & Tools
- Console: `console.log`, `console.error`, `console.table`.
- DevTools: breakpoints, watch variables.
- Linters (ESLint) and formatters (Prettier).

## 17. Good Practices
- Use `===`, prefer `let/const`.
- Keep functions small and pure when possible.
- Avoid global variables.
- Handle async errors, validate inputs.
- Write tests for critical code.

## 18. Next steps / Resources
- MDN JavaScript Guide
- "You Don't Know JS" (book series)
- Practice: small projects, algorithm problems, DOM exercises.

Keep this file as your quick reference and update with examples you write while practicing.