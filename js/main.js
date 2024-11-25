const input = document.querySelector(".input");
const buttonOk = document.querySelector(".button-ok");

const taskSection = document.querySelector(".task-section");

const settingButton = document.querySelector(".setting-button");
const settingWindow = document.querySelector(".settings-window");

const returnButton = document.querySelector(".icon-return");

const modalWallpaperButton = document.querySelector(".modal-wallpaper-button");
const modalWallpaperWindow = document.querySelector(".modal-wallpaper-window");
const returnButtonWallpaper = document.querySelector(".modal-wallpaper-return-icon");

console.log(returnButtonWallpaper)

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

  let test = document.querySelector(".modal-wallpaper-return-icon").onclick = () => {
    modalWallpaperWindow.style.visibility = 'hidden';
    returnButtonWallpaper.style.visibility = 'hidden';
  };


}

const wallpaperCards = [ { id: 1, title: "Джинс", src: './assets/img/jeans1.jpg'},
  { id: 2, title: 'Джинс' , src: './assets/img/jeans2.jpg' } ,
  { id: 3, title: 'Дермантин' , src: './assets/img/dermantin.jpg' } ,
  { id: 4, title: 'Папір' , src: './assets/img/paper1.jpg' } ,
  { id: 5, title: 'Папір' , src: './assets/img/paper2.jpg' } ,
  
];

wallpaperCards.forEach(( item, index ) => {

  wallPaperCardsContainer.innerHTML += `<div class="wallpaper-card">
  <img class="card-image" 
  src=" ${item.src} " alt="" srcset=""> <p> ${item.title} </p> </div>`;
  console.log(item, index)
})

input ? input.addEventListener("click", clearInput) : null;

function clearInput(e) {
  input.value = "";
  console.log(e);
}




// // =========RETURN-BUTTON-COUNTER--------------
//
// settingButton.onclick = () => {
//
//   settingWindow.style.visibility = "visible";
//   returnButton.style.visibility = "visible";
//
// };
//
// //  --RETURN BUTTOn --
// returnButton.onclick = () => {
//   settingWindow.style.visibility = "hidden";
//   returnButton.style.visibility = 'hidden';
//
// };

//
// returnButtonWallpaper.addEventListener('click', returnWallpaperWindow )
//
// function returnWallpaperWindow (event) {
//
//
//   console.log('click',event);
//   modalWallpaperWindow.style.visibility = 'hidden';
//   returnButton.style.visibility = 'visible';
//
// }

//
// // --MODAL SETTINGS BUTTON --
// modalWallpaperButton.addEventListener("click", modalWallpaperWindowToggle );
//
// function modalWallpaperWindowToggle() {
//   returnButton.style.visibility = 'hidden';
//   modalWallpaperWindow.style.visibility = 'visible';
//   modalWallpaperWindow.style.zIndex = 1;
//   console.log(modalWallpaperWindow.style)
//
// }


let taskTime = {
  year: "3456",
};
let arrTasks;
!localStorage.tasks
  ? (arrTasks = [])
  : (arrTasks = JSON.parse(localStorage.getItem("tasks")));

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

const createTemplate = (task, index) => {
  return `<div class="task-item-block  ${task.completed ? "checked" : ""
    }"  onclick="completeTask(${index})">

                   ${task.description}
                
          <div class="data-block">
            <p class="data-year">${task.year}.${task.month < 9 ? "0" + (task.month + 1) : task.month + 1
    }.${task.day < 9 ? "0" + task.day : task.day}</p>
            <p class="data-time">${task.hours < 10 ? "0" + task.hours : task.hours
    } : ${task.minutes < 10 ? "0" + task.minutes : task.minutes}</p>
          </div>

          <div class="close-block">
           <img class="icon-close" onclick="deleteTask(${index})" src="./assets/icons/close.png" alt="button close">
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
  if (input.value == "") return;
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

const deleteTask = (index) => {
  todoItemElements[index].classList.add("delition");
  setTimeout(() => {
    arrTasks.splice(index, 1);
    updateLocal();
    fillHtmlList();
  }, 500);
};

fillHtmlList();
