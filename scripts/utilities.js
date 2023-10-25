const result = document.querySelector("#result");

// reset Function
const reset = () => {
    result.innerHTML = '';
};

// Build and Display the parts of the dictionary
export function displayWordInfo(wordInfo, inputWord) {
    let wordDiv = document.createElement("div");
    wordDiv.class = "word";
    wordDiv.innerHTML = `<h3>${inputWord}</h3>`;

    let infoDiv = document.createElement("div");
    infoDiv.class = "info";
    infoDiv.innerHTML = `
    <p>${wordInfo[0].meanings[0].partOfSpeech}</p>
    <p>/${wordInfo[0].phonetic}/</p>`;

    let definePara = document.createElement("p");
    definePara.class = "word-meaning";
    definePara.textContent = `${wordInfo[0].meanings[0].definitions[0].definition}`;

    let examplePara = document.createElement("p")
    examplePara.class = "word-example";
    examplePara.textContent = `${wordInfo[0].meanings[0].definitions[0].example}`;

    reset();

    result.appendChild(wordDiv);
    result.appendChild(infoDiv);
    result.appendChild(definePara);
    result.appendChild(examplePara);
};

