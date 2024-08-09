let btn = document.querySelectorAll('button');

btn.forEach(element => {
    element.addEventListener("click", () => {
        let txt = element.previousElementSibling;
        let copyText = (txt.textContent).trim();
        // let copyText = txt.textContent
        navigator.clipboard.writeText(copyText)
    });
});