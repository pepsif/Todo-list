const input = document.querySelector('.input');
const buttonOk = document.querySelector('.button-ok');
const buttonClear = document.querySelector('.button-clear');
const taskSection = document.querySelector('.task-section');
const btnComplete = document.querySelector('.btn-complete')

// const iconOk = document.querySelector('.icon-ok');
// const iconClose = document.querySelector('.icon-close');

let arrTasks;
!localStorage.tasks ? arrTasks = [] : arrTasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElements = [];

function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `<div class="task-item-block ${task.completed ? 'checked' : ''}">
        <p>${task.description}
          <span>
            
            <img class="icon-ok" onclick="completeTask(${index})" src="https://iconarchive.com/download/i85367/graphicloads/android-settings/tick.ico" alt="buttonok">
          <img class="icon-close" onclick="deleteTask(${index})" src="https://cpng.pikpng.com/pngl/s/302-3024323_close-icon-close-icon-free-png-clipart.png" alt="button close">
          </span>
         </p>
        </div> `
}


const fillHtmlList = () => {
    taskSection.innerHTML = '';
    if (arrTasks.length > 0) {
        arrTasks.forEach((item, index) => {
            taskSection.innerHTML += createTemplate(item, index)

        })
        todoItemElements = document.querySelectorAll('.task-item-block')

    }
}
    const updateLocal = () => {
        localStorage.setItem('tasks', JSON.stringify(arrTasks));
    }

    const completeTask = index => {
     console.log(index)
     arrTasks[index].completed = !arrTasks[index].completed;
     if(arrTasks[index].completed) {
        todoItemElements[index].classList.add('checked')
     } else {todoItemElements[index].classList.remove('checked')
     }
     updateLocal();
     fillHtmlList();

    }

    buttonOk.addEventListener('click', () => {
        if(input.value == '') return
        arrTasks.push(new Task(input.value));
        updateLocal();
        fillHtmlList();
        input.value = '';
    })
const deleteTask = index => {
    todoItemElements[index].classList.add('delition');
 setTimeout(()=>{
     arrTasks.splice(index,1)
     updateLocal();
     fillHtmlList();
 },500)

}

fillHtmlList()
