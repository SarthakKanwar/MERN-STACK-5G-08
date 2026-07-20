let container = document.getElementById("container");
let input = document.getElementById("search");
let button = document.getElementById("btn");

let url = "https://dummyjson.com/recipes";
let allRecipes = [];

let fetchData = async (value="") => {

    let response = await fetch(url);

    let data = await response.json();

    allRecipes = data.recipes;

    displayRecipes(allRecipes);

}

fetchData();

function displayRecipes(arr) {

    container.innerHTML = "";

    arr.forEach((element, i) => {

        container.innerHTML += `
            <div id="d-${i}">
                <img src="${element.image}">
                <h3>${element.name}</h3>
                <p>Cuisine : ${element.cuisine}</p>
                <p>Prep Time : ${element.prepTimeMinutes}</p>
                <button onclick="handleDelete(${i})">Delete</button>
            </div>
        `;

    });

}

button.addEventListener("click", function () {

    let recipeName = input.value.trim().toLowerCase();

    let filteredRecipes = allRecipes.filter(function (item) {
        return item.name.toLowerCase().includes(recipeName);
    });

    displayRecipes(filteredRecipes);
    input.value=""

});

function handleDelete(divId) {

    alert(`Triggered ${divId}`);

    let div = document.getElementById(`d-${divId}`);

    div.remove();

}