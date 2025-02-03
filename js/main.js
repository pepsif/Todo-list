

console.log(topBarArrow)


const body = document.querySelector('body');

const input = document.querySelector(".input");
const buttonOk = document.querySelector(".button-ok");

const taskSection = document.querySelector(".task-section .container");
const taskSectionTitle = document.querySelector(".task-section__title");

 // --TOP BAR--
// const topBarArrow = document.querySelector(".top-bar__arrow");
// const topBar = document.querySelector(".top-bar");
// const topBarCloseButton = document.querySelector(".top-bar__close-icon");
// const topBarBadge = document.querySelector(".top-bar .badge1");

const completedTaskButton = document.querySelector(".completed-all-task-button");
const allTasksButton = document.querySelector(".all-task-button");
const completedTaskSection = document.querySelector(".completed-task .container");
const completedTaskItems = localStorage.getItem("completeTasks") ?  JSON.parse(localStorage.getItem("completeTasks")) : localStorage.setItem("completeTasks",JSON.stringify([]));

// console.log(completedTaskItems)


body.addEventListener("click", (e) => {
  console.log("clicked",e.target.classList.value);

  
})


completedTaskItems.forEach(( item, index ) => {

  completedTaskSection.innerHTML += `
   <div class="task-item-block" >
      ${item.description}
    <div class="data-block">
     <p class="data-year"> ${item.day < 9 ? "0" + item.day : item.day}.${item.month < 9 ? "0" + (item.month + 1) : item.month + 1
  }.${item.year} </p>
            <p class="data-time">${item.hours < 10 ? "0" + item.hours : item.hours
    } : ${item.minutes < 10 ? "0" + item.minutes : item.minutes}</p>
    </div>
    <div class="close-block">
     <img class="icon-close" onclick="deleteTask(${index} )" src="./assets/icons/close.png" alt="button close">
    </div>
   </div>`;
  // console.log(item, index)
})

console.log(completedTaskSection)
    
    // --ONCLICK on TOPBAR BUTTONS ---

completedTaskButton.addEventListener("click", () => {
 taskSection.style.transform = "rotateY(90deg)";
 completedTaskSection.style.display = "flex";

setTimeout(() => {
  taskSection.style.display= "none";
}, 500)
})
allTasksButton.addEventListener("click", () => {
  taskSection.style.transform = "rotateY(0deg)";
  completedTaskSection.style.display = "none";

setTimeout(() => {
  taskSection.style.display= "flex";
}, 500)
})

if (localStorage.getItem('completeTasks') ) {
  topBarBadge.textContent = JSON.parse(localStorage.getItem('completeTasks')).length;
  
} else {
  topBarBadge.textContent = 0;
}
allTasksButton.children[0].textContent = JSON.parse(localStorage.getItem('tasks')).length;

topBarArrow.addEventListener("click", (e) => {
  topBar.style.top = "0px"
  topBarArrow.style.visibility = "hidden";
  topBar.style.animationIterationCount = "1";
 topBar.style.animation = "slideTopBar 1s";
 topBar.style.animationFillMode = "forwards";

});
topBarCloseButton.addEventListener("click", (e) => {
  topBar.style.top = "-120px"
  topBar.style.animation = "slideTopBar 5s";
  topBar.style.animationDirection = "reverse";
  topBar.style.animationFillMode = "backwards";

  setTimeout(() => {
    topBarArrow.style.visibility = "visible";
  },100)
})

const settingButton = document.querySelector(".setting-button");
const settingWindow = document.querySelector(".settings-window");

const returnButton = document.querySelector(".icon-return");

const modalWallpaperButton = document.querySelector(".modal-wallpaper-button");
const modalWallpaperWindow = document.querySelector(".modal-wallpaper-window");
const returnButtonWallpaper = document.querySelector(".modal-wallpaper-return-icon");



const wallpaperCards = [
  { id: 1, title: "Абстракція", src: './assets/img/bg/pngwing.com.png'},
  { id: 2, title: 'Джинс' , src: './assets/img/bg/bg3.png' } ,
  { id: 3, title: 'Дермантин' , src: './assets/img/dermantin.jpg' } ,
  { id: 4, title: 'Папір1' , src: './assets/img/paper1.jpg' } ,
  { id: 5, title: 'Папір2' , src: './assets/img/paper2.jpg' } ,
  { id: 6, title: 'Папір3' , src: './assets/img/white_paper.jpeg' } ,

];

(localStorage.getItem('bgId')) ? setBodyBgFromLocalStorage() : console.log("no id");

function setBodyBgFromLocalStorage() {
  body.style.background = `url( ${ wallpaperCards[localStorage.getItem('bgId')].src  } )`;

}


const wallPaperCardsContainer = document.querySelector(".modal-wallpaper__container");


settingButton.onclick = () => {
  settingWindow.style.visibility = "visible";
  returnButton.style.visibility = "visible";

};
//  --RETURN BUTTOn --
returnButton.onclick = () => {
  settingWindow.style.visibility = "hidden";
  returnButton.style.visibility = 'hidden';

};

// --MODAL SETTINGS BUTTON --
modalWallpaperButton.addEventListener("click", modalWallpaperWindowToggle );

function modalWallpaperWindowToggle() {
  modalWallpaperWindow.style.visibility = 'visible';
  returnButtonWallpaper.style.visibility = 'visible';
  modalWallpaperWindow.style.zIndex = "1";

  settingWindow.style.visibility = "hidden";
  returnButton.style.visibility = 'hidden';

  document.querySelector(".modal-wallpaper-return-icon").onclick = () => {
    modalWallpaperWindow.style.visibility = 'hidden';
    returnButtonWallpaper.style.visibility = 'hidden';

    settingWindow.style.visibility = "visible";
    returnButton.style.visibility = 'visible';
  };

}


wallpaperCards.forEach(( item, index ) => {

  wallPaperCardsContainer.innerHTML += `
   <div class="wallpaper-card"  id="${index}">
    <img class="card-image" src=" ${item.src} " alt="" srcset=""> 
    <p> ${item.title} </p>
   </div>`;

  // console.log(item, index)
})

wallPaperCardsContainer.addEventListener('click', e => {
   if( e.target.parentNode.classList.contains("wallpaper-card") || e.target.classList.contains("wallpaper-card") ) {
     const idCard = e.target.parentNode.id;
    body.style.background = `url(${wallpaperCards[idCard]["src"] })`;
    localStorage.setItem('bgId',idCard);


   console.log(wallpaperCards[idCard].src, body.style.background);
     // console.log(e.target.parentNode.id)
   }

});


input ? input.addEventListener("click", clearInput) : null;

function clearInput(e) {
  input.value = "";
 
}

let taskTime = {
  year: "3456",
};
  
       //  --CREATE ARR TASKS and arrCompletedTasks--
let arrTasks;
let arrCompleteTasks = [];

!localStorage.getItem('completeTasks') ? localStorage.setItem('completeTasks',JSON.stringify(arrCompleteTasks) ) : arrCompleteTasks = JSON.parse(localStorage.getItem('completeTasks'));

!localStorage.tasks ? (arrTasks = []) : (arrTasks = JSON.parse(localStorage.getItem("tasks")));


let todoItemElements = [];

function Task(description, year, month, day, hours, minutes) {
  this.description = description;
  this.completed = false;
  this.year = year;
  this.month = month;
  this.day = day;
  this.hours = hours;
  this.minutes = minutes;
}


function createTemplate  (task, index)  {


  return `<div class="task-item-block  ${task.completed ? "checked" : ""
    }"  onclick="completeTask(${index})">

                   ${task.description}
                
          <div class="data-block">
            <p class="data-year"> ${task.day < 9 ? "0" + task.day : task.day}.${task.month < 9 ? "0" + (task.month + 1) : task.month + 1
  }.${task.year} </p>
            <p class="data-time">${task.hours < 10 ? "0" + task.hours : task.hours
    } : ${task.minutes < 10 ? "0" + task.minutes : task.minutes}</p>
          </div>

          <div class="close-block">
           <img class="icon-close" onclick="deleteTask(${index} )" src="./assets/icons/close.png" alt="button close">
          </div>
         
        </div> `;
};

const fillHtmlList = () => {
  taskSection.innerHTML = "";
  if (arrTasks.length > 0) {
    arrTasks.forEach((item, index) => {
      taskSection.innerHTML += createTemplate(item, index);
    });
    todoItemElements = document.querySelectorAll(".task-item-block");
  }
};

const updateLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(arrTasks));
  localStorage.setItem("completeTasks",JSON.stringify(arrCompleteTasks));
};

const completeTask = (index) => {
  arrTasks[index].completed = !arrTasks[index].completed;
  if (arrTasks[index].completed) {
    todoItemElements[index].classList.add("checked");
  } else {
    todoItemElements[index].classList.remove("checked");
  }
  updateLocal();
  fillHtmlList();
};

buttonOk.addEventListener("click", () => {
  
   if (input.value == "" || input.value == "Нове Завдання") return;
 
  let currentData = new Date();
  let year = currentData.getFullYear();
  let month = currentData.getMonth();
  let day = currentData.getDate();
  let hours = currentData.getHours();
  let minutes = currentData.getMinutes();

  
  arrTasks.push(new Task(input.value, year, month, day, hours, minutes));
  updateLocal();
  fillHtmlList();
  
  input.value = "Нове завдання";
});

function deleteTask  (index )  {

  const task = arrTasks[index];
  if (task.completed === true) {
    arrCompleteTasks.push(task);
    topBarBadge.textContent = arrCompleteTasks.length;
  }
  


console.log( task  )

  todoItemElements[index].classList.add("delition");
  setTimeout(() => {
    arrTasks.splice(index, 1);
    updateLocal();
    fillHtmlList();
  }, 500);
};

fillHtmlList();
