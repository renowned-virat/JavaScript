//  datas are of two types on the basis of how it is stored in the memory and access
// 1. premitive (call by value)
//     string
//     number 
//     boolean
//     null
//     undefined
//     Symbol
//     BigInt

const scoreVal= 100.3  // this is same as number no float type in js
const isLoggedIn = false
const outsideTemp= null
let user;    //undefinded type till not passed any value
const id = Symbol('123')
const anotherid= Symbol('123')
// console.log(id==anotherid)           //it gives false as symbol is always unique
const bigNumber= 3494938948398499n


// 2. non permitive(reference type)
//     Arrays
//     Objects
//     Functions

const heros= ["shaktiman", "nagraj", "doga"]
let myObj={
    name: "shubham",
    age: 22,
}
// const myFunction = funtion() {
//     console.log("hello world");
// }

console.log(typeof outsideTemp)
// */



//+++++++++++++++++++++++++++++++++++++++++++++++++memory+++++++++++++++++++++++++
//stack(premitive) -> we get copy of data , 
// Heap(for Non-Premitive )-> we get direct reference of data