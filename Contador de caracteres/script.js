const textArea = document.getElementById("text-area");
const charCount = document.getElementById("char-count");

textArea.addEventListener("input", function() {
    const text = textArea.value;
    const count = text.length;
    charCount.textContent = `Número de caracteres: ${count}`;
});
