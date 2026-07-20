// Falsy values 
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(0n))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(false))

// Truthy Values 
console.log(Boolean(" "))
console.log(Boolean("123abc"))

//Practice
console.log(Boolean(true+6)) //7
console.log(false+5) //5

//Type Casting(Implicit)
console.log("5"+5) //55
console.log(5+'2') //52
console.log('5'-2) //3
console.log("7"-2) //5
console.log("7"*2) //14
console.log(7*'2') //14

//Type Casting(Explicit)

let num=10;
let strNumber=String(num)
console.log(typeof(num)) 
console.log(typeof(strNumber))

let str="123"
let number=Number(str)
console.log(typeof(number))

let x="10"
console.log(typeof(x))
console.log(typeof(+x))

let s="true"
console.log(typeof(s))
console.log(typeof(Boolean(s))) //boolean

// parseInt 

let currency ='400 Rs.'
console.log(typeof(currency))
console.log(currency)
console.log(parseInt(currency))
console.log(parseInt('Rs. 400'))

// let m=false
// let n=0
// let o=null
// let z= m || n || o

// console.log(z)

// Or Operator(||)
// return the first truthy value if not found return the last falsy value   


let e=false
let f='Vivek'
let g='Rishi'
let h= e || f || g

console.log(h)


// let defaultUser ="Vivek"
// let user = "Akash"
// console.log(defaultUser || user)

// AND Operator(&&)
// returns first falsy value if not found then it will return the last value 

// let m="false"
// let n="Vivek"
// let o="Rishi"
// let z= m && n && o
// console.log(z)

// let m=0
// let n="Vivek"
// let o="Rishi"
// let z= m && n && o
// console.log(z)

let m=0
let n=""
let o=undefined
let z= m && n && o
console.log(z) //0

// Coalescing Operator 
// it will return right hand value if the value is not defined 

// let user;

// console.log(user ?? "Anonymous"); // Anonymous

// // Ternary Operator 

// let user="Hello";
// console.log(user=="Hello" ? "Present": "Anonymus");

// let obj ={
//     name:"Aman",
//     age: 20,
//     address: "Shimla"
// }
// for(let key in obj){
//     console.log("Key :",key)
//     console.log("Value :",obj[key])
// }

// console.log(key)//ReferenceError 

const subjects = ['javascript','html','css'];

for(let subject of subjects){
    console.log(subject);
}
for(let subject of subjects){
    console.log(subjects);
}







