/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let newArticle = document.createElement('article');
        let newH3 = document.createElement('h3');
        newH3.textContent = temple.templeName;
        let newImg = document.createElement('img');
        newImg.src = temple.imageUrl;
        newImg.alt = temple.location;
        newArticle.appendChild(newH3);
        newArticle.appendChild(newImg);
        templesElement.appendChild(newArticle);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        templeList = await response.json();
    }
    // console.log(templeList)
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector('#sortBy');
    switch (filter.value) {
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case "notutah":
            let nonUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(nonUtahTemples);
            break;
        case "older":
            let olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};


getTemples();
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});