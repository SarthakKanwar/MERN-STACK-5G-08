let container = document.getElementById("container")


//API --> interface that connects to system

// Syntax 
// fetch('api',[methods]) 

// fetch('api','get','post','put','deleted')

let response = fetch("https://dummyjson.com/products")
        .then(function(res){
            // console.log(res)
            return res.json()
        }).then(function(data){
            console.log(data.products)//array of products
            // data.products --> array 
            // for(let i=0;i<Array.length) 
            // or 
            for(let item of data.products){
                console.log(item)
                container.innerHTML+=`
                         <div>
            <img src="${item.images[0]}"alt="">
            <h2>${item.title}</h2>
             <p>Brand :${item .brand}</p>
             <p>Price :${item.price}</p> 
        </div> `
            }
        })


// will get data in raw format and for that 
// you have to convert in javascript object 

let obj={"id":1,"name":"Tshirts"}