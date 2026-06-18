
// var a ;declaration
// a=10;assignment
// var a ;re-declaration
// a=20;re-assignment
// console.log(a);//re-declaration and re-assignment is possible with var


// let a;/declarat
// // a=20;/re-assignment
// console.log(a);//re-declaration is not possible with let but re-assignment is possible with let


// const c=10;
//Const c=20;/reassignment is not possible with const
// console.log(c);//re-declaration and re-assignment is not possible with const

// var a=10;


// function test(){
//     var a=20;
//     console.log(a);
// }
// test();
// console.log(a);  

// function a(x){
//     x();
//     console.log("Inside A");
// }//a is a higher order function because it takes a function as an argument

// function b(){
//     console.log("Inside B");
//b is a callback function because it is passed as an argument to another function

//a(b);//b is passed as an argument to a

// const thanay=()=>{
//     console.log("ASDF");
// }

////// Asynchronous JAVA Script  (june 5,2026)
// SetTimeout (),SetInterval(), fetch() Are APIsthat are provided by the browser to handle asynchronous operations in JavaScript.
//they aew not known to JavaScript but they are provided by the browser to handle asynchronous operations in JavaScript.

// console.log("Start");

// setTimeout(()=>{
//     console.log("Inside setTimeout");
// },2000);

// console.log("End");

//In the above code, setTimeout is an asynchronous function that will execute the callback function after 2 seconds. 
// The output of the above code will be: Start End Inside setTimeout

// function step1(camera, next) {
//     console.log("Image Captured");
//     let image = camera + 10;
//     next(image, step3);
// }

// function step2(image, next) {
//     console.log("Image Processed");
//     let processedImage = image * 2;
//     next(processedImage, step4);
// }

// function step3(processedImage, next) {
//     console.log("Image Uploaded");
//     let captioned = processedImage + 15;
//     next(captioned);
// }

// function step4(captioned) {
//     console.log("Image ready to be shared", captioned);
// }

// step1(10, step2);


const user = {
    name: "Thanay",
    age: 22,
    city: "Bangalore",
    greet: function(){
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
    },
}

const greeting = user.greet.bind(user);
greeting(); // Output: Hello, I am Thanay and I am 22 years old.

// In the above code, when we assign user.greet to the variable greeting, we lose the context of this. 
// When we call greeting(), it does not have access to the user object and therefore this.name and this.age are undefined. 
// To fix this issue, we can use the bind() method to bind the context of this to the user object.

// react Job Interview Questions

// 1. What is React?    
// React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.
//  React uses a virtual DOM to optimize rendering and improve performance.

// 2. What are the main features of React?  
// - Component-Based Architecture: React allows developers to build encapsulated components that manage their own state and can be composed to create complex UIs.
// - Virtual DOM: React uses a virtual DOM to optimize rendering by only updating the parts of the DOM that have changed.
// - Unidirectional Data Flow: React follows a unidirectional data flow, which makes it easier to understand and debug applications.
// - JSX: React uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript, making it easier to create and manage UI components.