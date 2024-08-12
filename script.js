let btn = document.querySelectorAll('button');

btn.forEach(element => {
    element.addEventListener("click", () => {
        let txt = element.previousElementSibling;
        let copyText = (txt.textContent).trim();
        // let copyText = txt.textContent
        navigator.clipboard.writeText(copyText)
        element.innerText = "Copied";

        const myTimeout = setTimeout(mytext, 1000);
        
        function mytext() {
            element.innerText = "Copy";
        }
    });
});