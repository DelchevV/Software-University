function extractText() {
    const liElements = Array.from(document.querySelectorAll("ul > li"));
    const textArea = document.getElementById("result")

    for (el of liElements) {
        textArea.textContent += el.textContent + "\n"
    }
}