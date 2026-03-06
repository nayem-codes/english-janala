const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displayLesson(json.data))
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((json) => displayLevelWord(json.data))
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    words.forEach(word => {
        // console.log(word)
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-12 px-5 space-y-5">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-medium text-xs">Meaning /Pronounciation</p>
            <div class="font-bangla text-2xl font-semibold">${word.meaning}/${word.Pronounciation}</div>

            <div class="flex justify-between items-center">
                <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.append(card);
    });
}

const displayLesson = (lessons) => {
    // 1. get the container
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = ""

    // 2. access every lesson
    for (let lesson of lessons) {
        // 3. create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
        `
        // 4. append into container
        levelContainer.append(btnDiv);
    }
}

loadLessons();