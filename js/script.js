let body = document.querySelector("body")
let theme = document.querySelector(".theme-toggle");
let form  = document.querySelector("form");
let input = document.querySelector("input");
let radio= document.querySelector(".radioh")
let img= document.querySelector(".img")
let lists = document.querySelector(".lists");
let para = document.querySelector(".para");
let inputValue;
console.log(radio)

// let divChild =`    <div class="list">
//            <div class="list-header">
//             <div class="radioh " role="radio"></div>
//             <p class="para">${inputValue}</p>
//            </div>
//           <div class="img">
//               <img src="./images/icon-cross.svg" alt="cross" class="cross">
//           </div>
//       </div>`;


// listen to the keydown of enter
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      inputValue = input.value;
    }
})


radio.addEventListener("click",()=>{
    alert("i was clicked")
    radio.classList.toggle("check")
    para.classList.toggle("check");
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
})




theme.addEventListener("click", () => {
    body.classList.toggle("light");
   
})