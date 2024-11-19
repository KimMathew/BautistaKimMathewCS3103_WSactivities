// Access Elements by Id
const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordcount');
const sentenceCount = document.getElementById('sentenceCount');

// Main Function
function wordsAndSentencesCounter() {
    const text = textInput.value.trim();
            
    // To count words
    const words = text.split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;

    // To count sentences
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    sentenceCount.textContent = sentences.length;
}

textInput.addEventListener('input', wordsAndSentencesCounter);