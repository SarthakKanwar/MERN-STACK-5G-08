const form = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
    `;

    tableBody.appendChild(newRow);

    form.reset();

});