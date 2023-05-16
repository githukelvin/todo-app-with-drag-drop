let body = document.querySelector("body")
let theme = document.querySelector(".theme-toggle");
let form  = document.querySelector("form");
let input = document.querySelector("input");
let img= document.querySelector(".img")
let wrapper = document.querySelector(".wrapper");
let inputValue;
let clear = document.querySelector(".clear");
let All =document.querySelector(".All");
let Active =document.querySelector(".Active");
let Completed =document.querySelector(".Completed");
let info  = document.querySelector(".info")
let   item ;

// let divChild =`    <div class="list">
//            <div class="list-header">
//             <div class="radioh " role="radio"></div>
//             <p class="para">${inputValue}</p>
//            </div>
//           <div class="img">
//               <img src="./images/icon-cross.svg" alt="cross" class="cross">
//           </div>
//       </div>`;

// prevent form from submitting

window.addEventListener("DOMContentLoaded",()=>{
  // alert("Hello Press Enter to Add a TODO task");
  // alert("Click the circle to mark a task is completed")
  
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
});


// listen to the keydown of enter
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      inputValue = input.value;
        if (inputValue) {
            let divChild =`    <div class="list">
           <div class="list-header">
            <div class="radioh " role="radio"></div>
            <p class="para">${inputValue}</p>
           </div>
          <div class="img">
          </div>`
            wrapper.innerHTML += divChild;
            input.value = "";
          
        }
        
    }
    
})


// listen  to radio btn click
function check(e){
  let item = e.target;
  console.log(item.classList.contains(".list"));
  if(item.classList.contains("radioh")){
    console.log("yoh")
    item.classList.toggle("check");
    let para = item.nextElementSibling;
    para.classList.toggle("check");
  }
  // else if(){
  //   alert(item)
  //   item.firstChild.lastChild.classList.toggle("check")

  // }
  else if(item.classList.contains("img")){
      let ditem = e.target.parentElement;
      ditem.remove();
  }
}





wrapper.addEventListener("click",check);

theme.addEventListener("click", () => {
    body.classList.toggle("light");
   
})
// clear  all checked

clear.addEventListener("click",()=>{
let allCompleted = document.querySelectorAll(".radioh.check")

  allCompleted.forEach(ele=>{
    let div= ele.parentElement.parentElement;
    div.remove();
    // div.style.display= "none"
  });
})

// click All
All.addEventListener("click",()=>{
let list = document.querySelectorAll(".list");

list.forEach(list=>list.style.display="flex")


})
// Click completed
Active.addEventListener("click",()=>{
  let list = document.querySelectorAll(".radioh");
  list.forEach(div=>{
      let parent = div.parentElement.parentElement;
    if(!div.classList.contains("check")){
        parent.style.display = "flex";
    }
    else{
      parent.style.display="none"
    }
    
  })

})
// click active
Completed.addEventListener("click",()=>{
  let list = document.querySelectorAll(".radioh");
  list.forEach((div) => {
    let parent = div.parentElement.parentElement;
    if (div.classList.contains("check")) {
      parent.style.display = "flex";
    } else {
      parent.style.display = "none";
    }
  });
})


// items left
item = document.createElement("p");
item.innerHTML = `${6} items left`;
info.appendChild(item);

// save to locals
// function saveLocal() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   const listItems = document.querySelectorAll("li");
//   listItems.forEach((inde) => {
//     const info = inde.textContent;
//     let isCompleted = false;
//     if (inde.classList.contains("completed")) {
//       isCompleted = true;
//     }
//     // check if element already exists in todos array
//     const existingItemIndex = todos.findIndex((item) => item.item === info);

//     if (existingItemIndex === -1) {
//       todos.push({ item: info, isCompleted: isCompleted });
//     } else {
//       // if element exists, update isCompleted value
//       todos[existingItemIndex].isCompleted = isCompleted;
//     }

//     // check if element already exists in UI
//     const existingListItem = document.querySelector(`li`);
//     if (!existingListItem) {
//       // add the element to the UI
//       let listItem;
//       if (isCompleted) {
//         listItem = `<li class="completed">${info}<div class="tick"></div></li>`;
//       } else {
//         listItem = `<li>${info}<div class="tick"></div></li>`;
//       }
//       ul.innerHTML += listItem;
//     }
//   });
//   localStorage.setItem("todos", JSON.stringify(todos));

//   // add click event listener to ul element to remove items from UI and localStorage
//   ul.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//       const item = e.target.textContent;
//       const index = todos.findIndex((t) => t.item === item);
//       if (index !== -1) {
//         todos.splice(index, 1);
//         localStorage.setItem("todos", JSON.stringify(todos));
//       }
//       e.target.remove();
//     }
//   });
// }






