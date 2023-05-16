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

// todos
 let todos;
 if (localStorage.getItem("todos") === null) {
   todos = [];
 } else {
   todos = JSON.parse(localStorage.getItem("todos"));
 }
let remaining =[];
function getre(){
   remaining = todos.filter((todo) => !todo.isCompleted);
  return remaining;
  }
getre();
// listen  to radio btn click
function check(e){
 
  let item = e.target;
  if(item.classList.contains("radioh")){
    
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
         const itemele = e.target.previousElementSibling.lastElementChild.innerHTML;
        removeData(itemele); 
          ditem.remove();
  }
}

function removeData(itemele) {
  const index = todos.findIndex((t) => t.item === itemele);
  if (index !== -1) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
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

    const filteredTodos = todos.filter((todo) => todo.isCompleted);
    filteredTodos.forEach(item=>{
      removeData(item.item)
    }) 
    div.remove();
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
item.innerHTML = `${remaining.length} items left`;
info.appendChild(item);

// save to locals
function saveLocal(){
  let todos;
  if(localStorage.getItem("todos")===null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // get elements
  const paras= document.querySelectorAll(".para");
  paras.forEach(para=>{
    let text = para.innerHTML;
    let isCompleted = false;
    if(para.classList.contains("check")){
      isCompleted = true; 
    }
    const existingItemIndex = todos.findIndex((item) => item.item === text);
    if (existingItemIndex === -1) {
      todos.push({ item: text, isCompleted: isCompleted });
    }
    else{
      todos[existingItemIndex].isCompleted = isCompleted;
    }
 

  })
   localStorage.setItem("todos", JSON.stringify(todos));
}
setInterval(saveLocal, 1000);
// get data

function getData() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(({ isCompleted, item }) => {
    let listItem;
    if (isCompleted) {
      listItem = ` <div class="list">
           <div class="list-header">
            <div class="radioh check" role="radio"></div>
            <p class="para check">${item}</p>
           </div>
          <div class="img">
          </div>`;
    } else {
      listItem = `    <div class="list">
           <div class="list-header">
            <div class="radioh " role="radio"></div>
            <p class="para">${item}</p>
           </div>
          <div class="img">
          </div>`;
    }
    wrapper.innerHTML += listItem;
  });
}

document.addEventListener("DOMContentLoaded", getData);