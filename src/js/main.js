import {topBarBadgeTaskCount, topBarInitializeListener} from './topBar';
import { test ,} from './functions/testFunc';


 topBarInitializeListener();
 topBarBadgeTaskCount();

const body = document.querySelector('body');

const input = document.querySelector(".input");
const buttonOk = document.querySelector(".button-ok");

export const taskSection = document.querySelector(".task-section__container");

const settingButton = document.querySelector(".setting-button");
const settingWindow = document.querySelector(".settings-window");

const returnButton = document.querySelector(".icon-return");

const modalWallpaperButton = document.querySelector(".modal-wallpaper-button");
const modalWallpaperWindow = document.querySelector(".modal-wallpaper-window");
const returnButtonWallpaper = document.querySelector(".modal-wallpaper-return-icon");


const wallpaperCards = [
    {id: 1, title: "Абстракція", src: './assets/img/bg/pngwing.com.png'},
    {id: 2, title: 'Джинс', src: './assets/img/bg/bg3.png'},
    {id: 3, title: 'Дермантин', src: './assets/img/dermantin.jpg'},
    {id: 4, title: 'Папір1', src: './assets/img/paper1.jpg'},
    {id: 5, title: 'Папір2', src: './assets/img/paper2.jpg'},
    {id: 6, title: 'Папір3', src: './assets/img/white_paper.jpeg'},

];

(localStorage.getItem('bgId')) ? setBodyBgFromLocalStorage() : "";


function setBodyBgFromLocalStorage() {
    body.style.background = `url( ${wallpaperCards[localStorage.getItem('bgId')].src} )`;

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
modalWallpaperButton.addEventListener("click", modalWallpaperWindowToggle);

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


wallpaperCards.forEach((item, index) => {

    wallPaperCardsContainer.innerHTML += `
   <div class="wallpaper-card"  id="${index}">
    <img class="card-image" src=" ${item.src} " alt="" srcset=""> 
    <p> ${item.title} </p>
   </div>`;

    // console.log(item, index)
})

wallPaperCardsContainer.addEventListener('click', e => {
    if (e.target.parentNode.classList.contains("wallpaper-card") || e.target.classList.contains("wallpaper-card")) {
        const idCard = e.target.parentNode.id;
        body.style.background = `url(${wallpaperCards[idCard]["src"]})`;
        localStorage.setItem('bgId', idCard);

        // console.log(e.target.parentNode.id)
    }

});

input ? input.addEventListener("click", clearInput) : null;

function clearInput() {
    input.value = "";
}

let taskTime = {
    year: "3456",
};

//  --CREATE ARR TASKS and arrCompletedTasks--
export let arrTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : (localStorage.setItem("tasks", JSON.stringify([])), []);
export let arrCompleteTasks = localStorage.getItem("completeTasks") ? JSON.parse(localStorage.getItem("completeTasks")) : (localStorage.setItem("completeTasks", JSON.stringify([])), []);

let todoItemElements = [];

function Task( description, year, month, day, hours, minutes ) {
    this.description = description;
    this.completed = false;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hours = hours;
    this.minutes = minutes;
}

export function createTemplate(task, index) {

    return `<div class="task-item-block  ${task.completed ? "checked" : "" }"  data-index="${index}">
    ${task.description}
                  
          <div class="data-block">
            <p class="data-year"> ${task.day < 9 ? "0" + task.day : task.day}.${task.month < 9 ? "0" + (task.month + 1) : task.month + 1
    }.${task.year} </p>
            <p class="data-time">${task.hours < 10 ? "0" + task.hours : task.hours
    } : ${task.minutes < 10 ? "0" + task.minutes : task.minutes}</p>
          </div>

          <div class="close-block">
           <img class="icon-close" data-index="${index}" src="./assets/icons/close.png" alt="button close">
          </div>
         
        </div> `;
}

export const fillTasksInHtmlList = () => {
    taskSection.innerHTML = "";
    topBarBadgeTaskCount();

    if (arrTasks.length > 0) {
        arrTasks.forEach((item, index) => {
            taskSection.innerHTML += createTemplate(item, index);
        });
        todoItemElements = document.querySelectorAll(".task-item-block");
    }
   
};

export function updateLocalTasks ()  {
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
   
};
export function updateLocalCompletedTasks() {
 localStorage.setItem("completeTasks", JSON.stringify(arrCompleteTasks));
}

console.log(arrTasks)

buttonOk.addEventListener("click", () => {
    
    if (input.value == "" || input.value == "Нове Завдання") return;

 
    let currentData = new Date();
    let year = currentData.getFullYear();
    let month = currentData.getMonth();
    let day = currentData.getDate();
    let hours = currentData.getHours();
    let minutes = currentData.getMinutes();
    
    console.log("arrTask before push", arrTasks);

    arrTasks.push(new Task(input.value, year, month, day, hours, minutes));

    console.log("arrTask after push", arrTasks);
    
  
    updateLocalTasks();
    fillTasksInHtmlList();

    input.value = "Нове завдання";
  });

fillTasksInHtmlList();
