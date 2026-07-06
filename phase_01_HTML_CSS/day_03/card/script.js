var like = 0;
var dislike = 0;

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const likeCount = document.getElementById("likeCount");
const dislikeCount = document.getElementById("dislikeCount");

likeBtn.addEventListener("click", function(){
    alert("Button triggered")

    like++;

    likeCount.innerText = like;

});

dislikeBtn.addEventListener("click", function(){
    alert("Button triggered")


    dislike++;

    dislikeCount.innerText = dislike;

});