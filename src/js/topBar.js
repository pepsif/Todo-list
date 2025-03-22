import { taskSection, createTemplate, fillTasksInHtmlList , arrTasks , arrCompleteTasks } from "./main";

const body = document.querySelector("body");

export const topBarArrow = document.querySelector(".top-bar__arrow");
export const topBar = document.querySelector(".top-bar");

export const allTaskBlock = document.querySelector(".all-task-block");
export const completedTaskBlock = document.querySelector(".completed-task-block");


export const topBarCloseButton = document.querySelector(".top-bar__close-icon");
export const topBarBadge1 = document.querySelector(".top-bar .badge1");
export const topBarBadge2 = document.querySelector(".top-bar .badge2");

export function topBarBadgeTaskCount() {
  topBarBadge1.textContent = localStorage.getItem("completeTasks") ? JSON.parse(localStorage.getItem("completeTasks") ).length : localStorage.setItem("completeTasks",[])
  topBarBadge2.textContent = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")).length : localStorage.setItem("tasks",[]);
}

export function topBarInitializeListener() {

  allTaskBlock.classList.add("active");
  allTaskBlock.style.background = "green";

              // --ADD document BODY LISTENER --

  body.addEventListener("click", (e) => {

    //   --CLICK "All tasks button" in Topbar--
    if (e.target.classList.contains("all-task-button")) {
      const tasksArr = JSON.parse(localStorage.getItem("tasks"));
      taskSection.innerHTML = "";
      taskSection.style.display = "flex";

      e.target.parentNode.classList.add("active");
      completedTaskBlock.classList.remove("active");
      
        allTaskBlock.style.background = "green";
        completedTaskBlock.style.background = "none";
      
      console.log(e.target.parentNode);
       
      tasksArr.forEach((item, index) => {
        taskSection.innerHTML += createTemplate(item, index);
      });

      return;
    }

    //   --CLICK "completed-all-task-button"   in Topbar--

    if (e.target.classList.contains("completed-all-task-button")) {
      const completedTasksArr = JSON.parse(
        localStorage.getItem("completeTasks")
      );

      taskSection.innerHTML = "";

      e.target.parentNode.classList.add("active");
      completedTaskBlock.style.background = "green";
      allTaskBlock.style.background = "none";
      allTaskBlock.classList.remove("active");

      completedTasksArr.forEach((item, index) => {
        taskSection.innerHTML += createTemplate(item, index);
      });
      console.log(completedTasksArr);

      return
    }

        //  --CLICK "DELETE TASK" on taskItem push--

        if(e.target.classList.contains("icon-close")) {
          
          e.stopPropagation();

          
          const closeButtonIndex = Number( e.target.dataset.index ) ;
        
        const arrFromLocaleStorage = JSON.parse(localStorage.getItem("tasks"));
        const elemFromLocaleStorage = arrFromLocaleStorage[closeButtonIndex];
 
        arrFromLocaleStorage.splice(closeButtonIndex, 1);
        arrTasks.splice(closeButtonIndex, 1);
        
        localStorage.setItem("tasks", JSON.stringify(arrFromLocaleStorage));
        
        console.log("click icon close arrTASKS", arrTasks );
        console.log("click icon close arrFromLocaleStorage", arrFromLocaleStorage );

        taskSection.innerHTML = "";

        arrFromLocaleStorage.forEach((item, index) => {

          taskSection.innerHTML += createTemplate(item, index);
        });

        console.log("icon close", elemFromLocaleStorage );

        return;
        }

        // click on TASK ITEM   
    if( e.target.closest(".task-item-block" )  ) {
      
      const taskItemBlock =  e.target.closest(".task-item-block");
      // console.log("click task item block", taskItemBlock.dataset.index  );

      // Check AllTASKS BUTTON CLICK
      if ( allTaskBlock.classList.contains("active") ) {
        const arrFromLocaleStorage = JSON.parse(localStorage.getItem("tasks"));
        const elemFromLocaleStorage = arrFromLocaleStorage[taskItemBlock.dataset.index];

        elemFromLocaleStorage.completed = !elemFromLocaleStorage.completed;
        // arrTasks[Number(taskItemBlock.dataset.index)] = elemFromLocaleStorage.completed;


        console.log( arrTasks[Number(taskItemBlock.dataset.index)] );

        localStorage.setItem("tasks", JSON.stringify(arrFromLocaleStorage));

        taskSection.innerHTML = "";

        arrFromLocaleStorage.forEach((item, index) => {

          taskSection.innerHTML += createTemplate(item, index);
        });
      } 

     
       return;
    }

        //  --END BODY LISTENER  --
    // console.log("click element", e.target);
  });

  //    --TOP bAR SLIDE Animation--
  topBarArrow.addEventListener("click", (e) => {
    topBar.style.top = "0px";
    topBarArrow.style.visibility = "hidden";
    topBar.style.animationIterationCount = "1";
    topBar.style.animation = "slideTopBar 1s";
    topBar.style.animationFillMode = "forwards";
  });
  topBarCloseButton.addEventListener("click", (e) => {
    topBar.style.top = "-120px";
    topBar.style.animation = "slideTopBar 5s";
    topBar.style.animationDirection = "reverse";
    topBar.style.animationFillMode = "backwards";

    setTimeout(() => {
      topBarArrow.style.visibility = "visible";
    }, 100);
  });
}
