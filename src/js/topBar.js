import { taskSection, createTemplate, fillTasksInHtmlList } from "./main";

const body = document.querySelector("body");

export const topBarArrow = document.querySelector(".top-bar__arrow");
export const topBar = document.querySelector(".top-bar");
export const topBarCloseButton = document.querySelector(".top-bar__close-icon");
export const topBarBadge1 = document.querySelector(".top-bar .badge1");
export const topBarBadge2 = document.querySelector(".top-bar .badge2");

export function topBarBadgeTaskCount() {
  topBarBadge1.textContent = JSON.parse(
    localStorage.getItem("completeTasks")
  ).length;
  topBarBadge2.textContent = JSON.parse(localStorage.getItem("tasks")).length;
}

export function topBarInitializeListener() {

              // --ADD BODY LISTENER --

  body.addEventListener("click", (e) => {

    //   --All tasks button in Topbar--
    if (e.target.classList.contains("all-task-button")) {
      const tasksArr = JSON.parse(localStorage.getItem("tasks"));
      taskSection.innerHTML = "";
      taskSection.style.display = "flex";

      tasksArr.forEach((item, index) => {
        taskSection.innerHTML += createTemplate(item, index);
      });
    }

    //   --completed-all-task-button   in Topbar--

    if (e.target.classList.contains("completed-all-task-button")) {
      const completedTasksArr = JSON.parse(
        localStorage.getItem("completeTasks")
      );

      taskSection.innerHTML = "";

      completedTasksArr.forEach((item, index) => {
        taskSection.innerHTML += createTemplate(item, index);
      });
      console.log(completedTasksArr);
    }

        //  --DELETE TASK on taskItem push--

        if(e.target.classList.contains("icon-close")) {
          const closeButton = e.target.dataset.index;
        console.log("icon close", closeButton )
        }

        // click on TASK ITEM
    if( e.target.closest(".task-item-block") ) {
      console.log("click task item block", e.target.dataset.index);
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
