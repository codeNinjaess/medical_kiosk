
/* Updated script.js - Arabic Version */
document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word");
    let currentWord = "";

    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)].innerText;
    }

    function speakWord(word) {
        const speech = new SpeechSynthesisUtterance(word);
        speech.lang = "ar-SA"; // For Arabic language
        speech.rate = 0.9;
        window.speechSynthesis.speak(speech);
    }

    function startGame() {
        currentWord = getRandomWord();
        speakWord(currentWord);
    }

    // Speak the first heading (h1) when the page loads
    const heading = document.querySelector("h1");
    if (heading) {
        speakWord(heading.innerText);
    }

    words.forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerText === currentWord) {
                speakWord("رائع!"); // "Bravo!" in Arabic
                setTimeout(startGame, 2000);
            } else {
                speakWord("لا، ماذا عن " + getRandomWord() + "؟"); // "No, what about..." in Arabic
            }
        });
    });

    // Apply apple images to words and distribute them naturally on a tree

document.addEventListener("DOMContentLoaded", () => {
    const treeContainer = document.querySelector(".tree");
    treeContainer.style.position = "relative";

    const positions = [
        { top: "15%", left: "45%" },
        { top: "25%", left: "30%" },
        { top: "30%", left: "60%" },
        { top: "40%", left: "50%" }
    ];
    
    document.querySelectorAll(".word").forEach((word, index) => {
        word.style.position = "absolute";
        word.style.top = positions[index].top;
        word.style.left = positions[index].left;
        word.style.backgroundImage = "url('apple.png')";
        word.style.backgroundSize = "contain";
        word.style.backgroundRepeat = "no-repeat";
        word.style.width = "80px";
        word.style.height = "80px";
        word.style.borderRadius = "50%";
        word.style.border = "none";
        word.style.color = "white";
        word.style.fontSize = "18px";
        word.style.fontWeight = "bold";
    });
});



    startGame();
});

// Display sentences one by one with a delay
document.addEventListener("DOMContentLoaded", () => {
    const sentences = document.querySelectorAll(".reading-text");
    sentences.forEach(sentence => sentence.style.display = "none");

    let index = 0;
    function showNextSentence() {
        if (index < sentences.length) {
            sentences[index].style.display = "block";
            index++;
            setTimeout(showNextSentence, 10000); // 10 seconds delay
        }
    }
    showNextSentence();
});
