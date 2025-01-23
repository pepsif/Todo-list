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
           <img class="icon-close" onclick="deleteTask(${index}, '${JSON.stringify(task).replace(/'/g, "\\'").replace(/"/g, "&quot;")}')" src="./assets/icons/close.png" alt="button close">
          </div>
         
        </div> `; 