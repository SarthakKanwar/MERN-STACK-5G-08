let numbers=[2,3,4,5,6,7,8]
let res=numbers.filter((ele)=>ele%2==0)
// filter will be used in react to delete elements 
console.log(res)
let res2=numbers.map((ele)=>ele%2==0)
console.log(res2)

// reduce 
// it will return single value after doing some matematical operarion 
let ages=[10,20,30,40,50]
let calcSum=ages.reduce((acc,ele)=>{
    return acc+ele
})
// accumulator  --> starting value 
console.log("Sum",calcSum)
let age=[10,20,30,40,50]
let calcProd=age.reduce((acc,ele)=>{
    return acc*ele
},4)
// accumulator  --> starting value 
console.log("Product",calcProd)

//SORT 
let val=[4,7,6,5,3,10,2,2]
val.sort()
console.log("Sorted Va",val)

let ascval=val.sort((a,b)=>a-b)
console.log("Sorted Va",ascval)

let descval=val.sort((a,b)=>b-a)
console.log("Sorted Va",descval)


let arr1=[1,2,3,4]
let arr2=[...arr1]
arr2.push(5)
console.log(arr1)
console.log(arr2)

// npm -node package manager  

 