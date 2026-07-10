// Callback Function
// A function which is passed as an argument is called Callback Function 


//Normal Function
// function greetMessage(){
//     console.log("Welcome to Chitkara")
// }
// greetMessage()


// function greetMessage(callback){
//     console.log("Welcome to Chitkara")
//     callback()
// }

// function callback(){
//     console.log("Good Morning")
// }
// greetMessage(callback)


// blinkit--> payment,order pack ,deliver


function makePayment(packOrder){
    console.log("Payment is getting started.....")

    setTimeout(function(){
        console.log("Payment is completed")
        packOrder()
    },3000)
}
function packOrder(deliverOrder){
    console.log("Order is getting packed")

    setTimeout(function(){
        console.log("Order is packed")
        deliverOrder()
    },3000)
}

// makePayment(packOrder)
// setTimeout also accepts callback function 
function deliverOrder(openBox){
    console.log("Delievery partner is getting assigned....")

    setTimeout(function(){
        console.log("Order is dispatched....")
        openBox()
    },3000)
}
function openBox(){
    console.log("Sending Otp to User..")
    setTimeout(function(){
        console.log("Otp Matched")
    },3000)
}
// callback hell/pyramid of doom
makePayment(function(){
    packOrder(function(){
        deliverOrder(function(){
            openBox()
        })
    })
})
// promises 

// makePayment()
//     .then(packOrder)
//     .then(deliverOrder)
//     .then(openBox)

// What are Promises?
// A Promise is an object that represents the future result of an asynchronous operation.
// Think of it like this:
// "I promise I'll tell you the result when I'm done."
// Instead of passing callbacks everywhere, JavaScript gives you a Promise.


// client 
// request
// to the server 
// in response it will return Promise object 