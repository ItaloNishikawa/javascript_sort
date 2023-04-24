// SEARCH FUNCTION

const searchInput = document.getElementById("search");
const rows_body = document.querySelectorAll("tbody tr");


function search(event) {
    const text = event.target.value.toLowerCase();
    rows_body.forEach((row_search) => {
        row_search.querySelector("#name").textContent.toLowerCase().startsWith(text)
            ? (row_search.style.display = "table-row")
            : (row_search.style.display = "none");
    });
}

searchInput.addEventListener("keyup", search);

// TABLE ROW ORDER


const position = document.getElementById("position");
const name = document.getElementById("name");
const course_class = document.getElementById("course_class");
const score = document.getElementById("score");
const grade = document.getElementById("grade");


//Função que ordenar tudo...
function sortByName(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
}

function sortByName(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
}

//armazena um novo array.
const sortedRows = Array.from(rows_body)
    .map((row) => ({
        position: parseInt(row.querySelector("#position").textContent),
        logo: row.querySelector(".logo"),
        name: row.querySelector("#name").textContent,
        course_class: row.querySelector("#course_class").textContent,
        score: parseFloat(row.querySelector("#score").textContent),
        grade: row.querySelector("#grade").textContent,
    }))


//apaga o tbody antigo
function load() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    sortedRows.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${row.position}</td>
        <td>${row.logo}</td>
        <td>${row.name}</td>
        <td>${row.course_class}</td>
        <td>${row.score}</td>
        <td>${row.grade}</td>
         `;
        tbody.appendChild(tr);
    });
}

name.addEventListener('click', () => {
    sortedRows.sort(sortByName);
    load();
});

