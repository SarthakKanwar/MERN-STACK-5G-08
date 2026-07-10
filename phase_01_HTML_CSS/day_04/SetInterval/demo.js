let t=document.getElementById("title")
setTimeout(function(){
    // console.log("Executed after 2")
    t.innerText="Who's there..."
},4000)

let count=0
let hCount=document.getElementById("counter")

setInterval(function(){
    count++
    hCount.innerText=count
},1000)

