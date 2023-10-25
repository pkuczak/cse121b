const result = document.querySelector("#result");

// reset Function
const reset = () => {
    result.innerHTML = '';
};

// Build and Display the parts of the dictionary
export function displayWordInfo(wordInfo, inputWord) {
    reset();

    result.appendChild(createWordTitle(inputWord));
    result.appendChild(createWordDetails(wordInfo));
    result.appendChild(createDefinition(wordInfo));
    result.appendChild(createExample(wordInfo));
};

export function displayError() {
    let errorMessage = "Couldn't Find The Word";
    result.innerHTML = `<br><h3 class="error">${errorMessage}</h3>`;
};

function createExample(wordInfo) {
    let examplePara = document.createElement("p")
    examplePara.class = "word-example";
    let exampleSentence;
    if (wordInfo[0].meanings[0].definitions[0].example) {
        exampleSentence = wordInfo[0].meanings[0].definitions[0].example;
    } else {
        exampleSentence = "No example found.";
    };
    examplePara.textContent = `Example: ${exampleSentence}`;
    return examplePara;
};

function createDefinition(wordInfo) {
    let definePara = document.createElement("p");
    definePara.class = "word-meaning";
    let definitionSentence;
    if (wordInfo[0].meanings[0].definitions[0].definition) {
        definitionSentence = wordInfo[0].meanings[0].definitions[0].definition;
    } else {
        definitionSentence = "No definition found.";
    };
    definePara.textContent = `Definition: ${definitionSentence}`;
    return definePara;
};

function createWordDetails(wordInfo) {
    let infoDiv = document.createElement("div");
    infoDiv.class = "info";
    let wordType;
    if (wordInfo[0].meanings[0].partOfSpeech) {
        wordType = wordInfo[0].meanings[0].partOfSpeech;
    } else {
        wordType = "No part of speech found.";
    };

    let wordPronounce;
    if (wordInfo[0].phonetic) {
        wordPronounce = `/${wordInfo[0].phonetic}/`;
    } else {
        wordPronounce = "No phonetics found.";
    };

    infoDiv.innerHTML = `
    <p>${wordType}</p>
    <p>${wordPronounce}</p>
    <br>`;
    return infoDiv;
};

function createWordTitle(word) {
    let wordDiv = document.createElement("div");
    wordDiv.class = "word";
    wordDiv.innerHTML = `<br><h3>${word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}</h3>`;
    return wordDiv;
}