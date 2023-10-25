// import module with other functions
import * as utilities from './utilities.js'

// Global variables
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let wordInfo = {};

// Dictionary API fetch
const searchWord = async () => {
    let inputWord = document.getElementById("input-word").value;
    const response = await fetch(`${url}${inputWord}`);
    if (response.ok) {
        wordInfo = await response.json();
    }
    console.log(wordInfo);

    utilities.displayWordInfo(wordInfo, inputWord);
};

// Add event listener
document.querySelector("#search-button").addEventListener('click', searchWord);