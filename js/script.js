let body = document.querySelector("body")
let theme = document.querySelector(".theme-toggle");

theme.addEventListener("click", () => {
    body.classList.toggle("light");
   
})