let arr = [
    "https://i.pinimg.com/736x/c1/f8/e4/c1f8e47ebb83756567df508fb8e515ba.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Hz4_dHEfnhl3DJbIbRwyIUI5ozndGE1U5G30iXByxL1O8V0ElCw6C2k&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_65OUJ4G8TsVx9dGFCqSgfqNpeafZ-3JYxx2IXfbnX1rHHrhAk_o7uc&s=10",
    "https://i.pinimg.com/474x/d7/f0/a4/d7f0a4c8dc8ca0101f85e292946bf9c0.jpg",
    "https://i.pinimg.com/474x/e5/bf/52/e5bf5277897a22fd41f37aee8f145250.jpg",
    "https://m.media-amazon.com/images/M/MV5BZWVhNjI1ZGYtYmUxNC00MzI4LTk0MDctNmUxMTFjMjcyOGM2XkEyXkFqcGc@._V1_.jpg"
];

let container = document.getElementById("container"); //Selects the div having id="container"

let img = document.createElement("img"); //Creates an <img> element in JavaScript (not yet visible on the webpage)

let index = 0; //Keeps track of which image is currently being displayed

function handleImage() {
    img.src = arr[index]; //Sets the src of the <img> tag to the current image URL

    container.appendChild(img); //Adds the <img> element inside the container (only the first time). Later it simply updates the existing image.

    index++; //Moves to the next image for the next function call

    if (index == arr.length) {
        index = 0; //When the last image is reached, start again from the first image
    }
}

handleImage(); //Displays the first image immediately when the page loads

setInterval(handleImage, 2000); //Calls handleImage() every 2000 ms (2 seconds), creating an automatic image slider