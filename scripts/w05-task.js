/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");

        img.src = temple.imageUrl;
        img.alt = temple.location;
        h3.textContent = temple.templeName;

        templesElement.appendChild(article);
        article.appendChild(h3);
        article.appendChild(img);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();

    displayTemples(templeList);
}

/* reset Function */
function clear() {
    document.querySelector('#temples').innerHTML = '';
}

/* filterTemples Function */
function filterTemples(temples) {
    clear();

    let filter = document.querySelector("#filtered").value;

    switch (filter) {
        case ("utah"):
            displayTemples(temples.filter((item) => item.location.toLowerCase().includes('utah')));

            break;

        case ("notutah"):
            displayTemples(temples.filter((item) => !item.location.toLowerCase().includes('utah')));

            break;

        case ("older"):

            let date = new Date(1950, 0, 1);
            displayTemples(temples.filter((item) => (item.dedicated.split(", ")[0]) < date.getFullYear()));

            break;

        case ("all"):
            displayTemples(temples);

            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList)
});