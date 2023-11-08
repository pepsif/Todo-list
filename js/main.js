const input = document.querySelector('.input');
const buttonOk = document.querySelector('.button-ok');
const buttonClear = document.querySelector('.button-clear');
const taskSection = document.querySelector('.task-section');
const btnComplete = document.querySelector('.btn-complete');
const settingButton = document.querySelector('.setting-button');
const settingWindow = document.querySelector('.settings-window');
const settingList = document.querySelector('.settings-list');

const returnButton = document.querySelector('.icon-return');

const wallPaperWindow = document.querySelector('.wallpaper-window');
const returnButtonWallpaper = document.querySelector('.icon-return-wallpaper');


// =========RETURN-BUTTON-COUNTER--------------
let counter = 0;
 settingButton.onclick = () => {
    if (counter === 1) {
        settingWindow.style.display = 'none'
        counter = 0;
        return
    } else {
        settingWindow.style.display = 'block'
        counter = 1;
        return
    }
}
returnButton.onclick = () => {
   settingWindow.style.display = 'none';
    counter = 0;
}
// ---   SETINGS list ------===
settingList.addEventListener('click', settingClick)

function settingClick (e) {
    console.log(e.target)
}

let taskTime = {
    'year': '3456'
}
let arrTasks;
!localStorage.tasks ? arrTasks = [] : arrTasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElements = [];

function Task( description, year, month, day, hours, minutes) {
    this.description = description;
    this.completed = false;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hours = hours;
    this.minutes = minutes;

}

const createTemplate = (task, index)=>{

        return `<div class="task-item-block ${task.completed ? 'checked' : ''}">
        <p>${task.description}
          <span>
            
            <img class="icon-ok" onclick="completeTask(${index})" src="./assets/icons/check-mark.png" alt="buttonok">
          <img class="icon-close" onclick="deleteTask(${index})" src="./assets/icons/close.png" alt="button close">
          </span>

          <div class="data-block">
            <p class="data-year">${ task.year }.${ task.month < 9 ? "0" + (task.month+1) : task.month+1 }.${ task.day < 9 ? "0"+task.day : task.day }</p>
            <p class="data-time">${ task.hours<10 ? "0"+task.hours : task.hours } : ${ task.minutes < 10 ? "0" + task.minutes : task.minutes }</p>
          </div>

         </p>
        </div> `
}

const fillHtmlList = ()=>{
    taskSection.innerHTML = '';
    if (arrTasks.length > 0) {
        arrTasks.forEach((item,index) => {
            taskSection.innerHTML += createTemplate(item, index)
         }
        )
        todoItemElements = document.querySelectorAll('.task-item-block')
    }
}
const updateLocal = ()=>{
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
}

const completeTask = index=>{
    
    arrTasks[index].completed = !arrTasks[index].completed;
    if (arrTasks[index].completed) {
        todoItemElements[index].classList.add('checked')
    } else {
        todoItemElements[index].classList.remove('checked')
    }
    updateLocal();
    fillHtmlList();

}

buttonOk.addEventListener('click', ()=>{
    if (input.value == '')
        return
        let currentData = new Date();
        let year = currentData.getFullYear();
          let month = currentData.getMonth();
          let day = currentData.getDate();
          let hours = currentData.getHours();
          let minutes = currentData.getMinutes();

    arrTasks.push(new Task( input.value, year, month, day, hours, minutes) );
    updateLocal();
    fillHtmlList();
    input.value = '';

}
)
const deleteTask = index=>{
    todoItemElements[index].classList.add('delition');
    setTimeout(()=>{
        arrTasks.splice(index, 1)
        updateLocal();
        fillHtmlList();
    }
    , 500)

}

fillHtmlList()
