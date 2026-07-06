var btn = document.getElementById("submit");

btn.addEventListener("click", handleClick);

function handleClick(event) {

    event.preventDefault();

    var image = document.getElementById("url");
    var title = document.getElementById("title");
    var rating = document.getElementById("rating");

    var inpImage = image.value;
    var inpTitle = title.value;
    var inpRating = rating.value;

    // Validate first
    if (inpImage === "" || inpTitle === "" || inpRating === "") {
        alert("Please fill all the fields.");
        return;
    }

    var movieDiv = document.getElementById("movieCards");

    movieDiv.innerHTML += `
        <div class="card">
            <img src="${inpImage}">
            <p><strong>Movie:</strong> ${inpTitle}</p>
            <p><strong>Rating:</strong> ${inpRating}</p>
        </div>
    `;

    // Clear the form
    image.value = "";
    title.value = "";
    rating.value = "";
}

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWenKdjHxc93-W3YxpWw9bgQn7bbsTMfcUnkBuMYOJA&s=10