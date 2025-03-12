/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTemplate: () => (/* binding */ createTemplate),\n/* harmony export */   fillTasksInHtmlList: () => (/* binding */ fillTasksInHtmlList),\n/* harmony export */   taskSection: () => (/* binding */ taskSection),\n/* harmony export */   updateLocal: () => (/* binding */ updateLocal)\n/* harmony export */ });\n/* harmony import */ var _topBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topBar */ \"./src/js/topBar.js\");\n\r\n\r\n\r\n (0,_topBar__WEBPACK_IMPORTED_MODULE_0__.topBarInitializeListener)();\r\n (0,_topBar__WEBPACK_IMPORTED_MODULE_0__.topBarBadgeTaskCount)();\r\n\r\nconst body = document.querySelector('body');\r\n\r\nconst input = document.querySelector(\".input\");\r\nconst buttonOk = document.querySelector(\".button-ok\");\r\n\r\nconst taskSection = document.querySelector(\".task-section__container\");\r\n\r\nconst settingButton = document.querySelector(\".setting-button\");\r\nconst settingWindow = document.querySelector(\".settings-window\");\r\n\r\nconst returnButton = document.querySelector(\".icon-return\");\r\n\r\nconst modalWallpaperButton = document.querySelector(\".modal-wallpaper-button\");\r\nconst modalWallpaperWindow = document.querySelector(\".modal-wallpaper-window\");\r\nconst returnButtonWallpaper = document.querySelector(\".modal-wallpaper-return-icon\");\r\n\r\n\r\nconst wallpaperCards = [\r\n    {id: 1, title: \"Абстракція\", src: './assets/img/bg/pngwing.com.png'},\r\n    {id: 2, title: 'Джинс', src: './assets/img/bg/bg3.png'},\r\n    {id: 3, title: 'Дермантин', src: './assets/img/dermantin.jpg'},\r\n    {id: 4, title: 'Папір1', src: './assets/img/paper1.jpg'},\r\n    {id: 5, title: 'Папір2', src: './assets/img/paper2.jpg'},\r\n    {id: 6, title: 'Папір3', src: './assets/img/white_paper.jpeg'},\r\n\r\n];\r\n\r\n(localStorage.getItem('bgId')) ? setBodyBgFromLocalStorage() : \"\";\r\n\r\n\r\nfunction setBodyBgFromLocalStorage() {\r\n    body.style.background = `url( ${wallpaperCards[localStorage.getItem('bgId')].src} )`;\r\n\r\n}\r\n\r\nconst wallPaperCardsContainer = document.querySelector(\".modal-wallpaper__container\");\r\n\r\n\r\nsettingButton.onclick = () => {\r\n    settingWindow.style.visibility = \"visible\";\r\n    returnButton.style.visibility = \"visible\";\r\n\r\n};\r\n//  --RETURN BUTTOn --\r\nreturnButton.onclick = () => {\r\n    settingWindow.style.visibility = \"hidden\";\r\n    returnButton.style.visibility = 'hidden';\r\n\r\n};\r\n\r\n// --MODAL SETTINGS BUTTON --\r\nmodalWallpaperButton.addEventListener(\"click\", modalWallpaperWindowToggle);\r\n\r\nfunction modalWallpaperWindowToggle() {\r\n    modalWallpaperWindow.style.visibility = 'visible';\r\n    returnButtonWallpaper.style.visibility = 'visible';\r\n    modalWallpaperWindow.style.zIndex = \"1\";\r\n\r\n    settingWindow.style.visibility = \"hidden\";\r\n    returnButton.style.visibility = 'hidden';\r\n\r\n    document.querySelector(\".modal-wallpaper-return-icon\").onclick = () => {\r\n        modalWallpaperWindow.style.visibility = 'hidden';\r\n        returnButtonWallpaper.style.visibility = 'hidden';\r\n\r\n        settingWindow.style.visibility = \"visible\";\r\n        returnButton.style.visibility = 'visible';\r\n    };\r\n\r\n}\r\n\r\n\r\nwallpaperCards.forEach((item, index) => {\r\n\r\n    wallPaperCardsContainer.innerHTML += `\r\n   <div class=\"wallpaper-card\"  id=\"${index}\">\r\n    <img class=\"card-image\" src=\" ${item.src} \" alt=\"\" srcset=\"\"> \r\n    <p> ${item.title} </p>\r\n   </div>`;\r\n\r\n    // console.log(item, index)\r\n})\r\n\r\nwallPaperCardsContainer.addEventListener('click', e => {\r\n    if (e.target.parentNode.classList.contains(\"wallpaper-card\") || e.target.classList.contains(\"wallpaper-card\")) {\r\n        const idCard = e.target.parentNode.id;\r\n        body.style.background = `url(${wallpaperCards[idCard][\"src\"]})`;\r\n        localStorage.setItem('bgId', idCard);\r\n\r\n\r\n        // console.log(e.target.parentNode.id)\r\n    }\r\n\r\n});\r\n\r\n\r\ninput ? input.addEventListener(\"click\", clearInput) : null;\r\n\r\nfunction clearInput(e) {\r\n    input.value = \"\";\r\n\r\n}\r\n\r\n\r\nlet taskTime = {\r\n    year: \"3456\",\r\n};\r\n\r\n//  --CREATE ARR TASKS and arrCompletedTasks--\r\nlet arrTasks;\r\nlet arrCompleteTasks = [];\r\n\r\n!localStorage.getItem('completeTasks') ? localStorage.setItem('completeTasks', JSON.stringify(arrCompleteTasks)) : arrCompleteTasks = JSON.parse(localStorage.getItem('completeTasks'));\r\n\r\n!localStorage.tasks ? (arrTasks = []) : (arrTasks = JSON.parse(localStorage.getItem(\"tasks\")));\r\n\r\n\r\nlet todoItemElements = [];\r\n\r\nfunction Task(description, year, month, day, hours, minutes) {\r\n    this.description = description;\r\n    this.completed = false;\r\n    this.year = year;\r\n    this.month = month;\r\n    this.day = day;\r\n    this.hours = hours;\r\n    this.minutes = minutes;\r\n}\r\n\r\n\r\nfunction createTemplate(task, index) {\r\n\r\n    return `<div class=\"task-item-block  ${task.completed ? \"checked\" : \"\" }\"  data-index=\"${index}\">\r\n    ${task.description}\r\n                  \r\n          <div class=\"data-block\">\r\n            <p class=\"data-year\"> ${task.day < 9 ? \"0\" + task.day : task.day}.${task.month < 9 ? \"0\" + (task.month + 1) : task.month + 1\r\n    }.${task.year} </p>\r\n            <p class=\"data-time\">${task.hours < 10 ? \"0\" + task.hours : task.hours\r\n    } : ${task.minutes < 10 ? \"0\" + task.minutes : task.minutes}</p>\r\n          </div>\r\n\r\n          <div class=\"close-block\">\r\n           <img class=\"icon-close\" data-index=\"${index}\" src=\"./assets/icons/close.png\" alt=\"button close\">\r\n          </div>\r\n         \r\n        </div> `;\r\n}\r\n\r\nconst fillTasksInHtmlList = () => {\r\n    taskSection.innerHTML = \"\";\r\n    (0,_topBar__WEBPACK_IMPORTED_MODULE_0__.topBarBadgeTaskCount)();\r\n\r\n\r\n    if (arrTasks.length > 0) {\r\n        arrTasks.forEach((item, index) => {\r\n            taskSection.innerHTML += createTemplate(item, index);\r\n        });\r\n        todoItemElements = document.querySelectorAll(\".task-item-block\");\r\n    }\r\n   \r\n};\r\n\r\nfunction updateLocal ()  {\r\n    localStorage.setItem(\"tasks\", JSON.stringify(arrTasks));\r\n    localStorage.setItem(\"completeTasks\", JSON.stringify(arrCompleteTasks));\r\n};\r\n\r\nfunction completeTask (index)  {\r\n    arrTasks[index].completed = !arrTasks[index].completed;\r\n    if (arrTasks[index].completed) {\r\n        todoItemElements[index].classList.add(\"checked\");\r\n    } else {\r\n        todoItemElements[index].classList.remove(\"checked\");\r\n    }\r\n    updateLocal();\r\n    fillTasksInHtmlList();\r\n};\r\n\r\n\r\nfunction deleteTask(index) {\r\n\r\n    const task = arrTasks[index];\r\n    task.completed === true ? arrCompleteTasks.push() : alert(\"fg\");\r\n\r\n// console.log( task  )\r\n\r\n    todoItemElements[index].classList.add(\"delition\");\r\n    setTimeout(() => {\r\n        arrTasks.splice(index, 1);\r\n        updateLocal();\r\n        fillTasksInHtmlList();\r\n    }, 500);\r\n};\r\n\r\n\r\n\r\nbuttonOk.addEventListener(\"click\", () => {\r\n\r\n    if (input.value == \"\" || input.value == \"Нове Завдання\") return;\r\n  \r\n    let currentData = new Date();\r\n    let year = currentData.getFullYear();\r\n    let month = currentData.getMonth();\r\n    let day = currentData.getDate();\r\n    let hours = currentData.getHours();\r\n    let minutes = currentData.getMinutes();\r\n  \r\n  \r\n    arrTasks.push(new Task(input.value, year, month, day, hours, minutes));\r\n    updateLocal();\r\n    fillTasksInHtmlList();\r\n  \r\n    input.value = \"Нове завдання\";\r\n  });\r\n\r\n\r\nfillTasksInHtmlList();\r\n\n\n//# sourceURL=webpack://todo-list/./src/js/main.js?");

/***/ }),

/***/ "./src/js/topBar.js":
/*!**************************!*\
  !*** ./src/js/topBar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTaskBlock: () => (/* binding */ allTaskBlock),\n/* harmony export */   completedTaskBlock: () => (/* binding */ completedTaskBlock),\n/* harmony export */   topBar: () => (/* binding */ topBar),\n/* harmony export */   topBarArrow: () => (/* binding */ topBarArrow),\n/* harmony export */   topBarBadge1: () => (/* binding */ topBarBadge1),\n/* harmony export */   topBarBadge2: () => (/* binding */ topBarBadge2),\n/* harmony export */   topBarBadgeTaskCount: () => (/* binding */ topBarBadgeTaskCount),\n/* harmony export */   topBarCloseButton: () => (/* binding */ topBarCloseButton),\n/* harmony export */   topBarInitializeListener: () => (/* binding */ topBarInitializeListener)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nconst topBarArrow = document.querySelector(\".top-bar__arrow\");\r\nconst topBar = document.querySelector(\".top-bar\");\r\n\r\nconst allTaskBlock = document.querySelector(\".all-task-block\");\r\nconst completedTaskBlock = document.querySelector(\".completed-task-block\");\r\n\r\n\r\nconst topBarCloseButton = document.querySelector(\".top-bar__close-icon\");\r\nconst topBarBadge1 = document.querySelector(\".top-bar .badge1\");\r\nconst topBarBadge2 = document.querySelector(\".top-bar .badge2\");\r\n\r\nfunction topBarBadgeTaskCount() {\r\n  topBarBadge1.textContent = localStorage.getItem(\"completeTasks\") ? JSON.parse(localStorage.getItem(\"completeTasks\") ).length : localStorage.setItem(\"completeTasks\",[])\r\n  topBarBadge2.textContent = localStorage.getItem(\"tasks\") ? JSON.parse(localStorage.getItem(\"tasks\")).length : localStorage.setItem(\"tasks\",[]);\r\n}\r\n\r\nfunction topBarInitializeListener() {\r\n\r\n  allTaskBlock.classList.add(\"active\");\r\n  allTaskBlock.style.background = \"green\";\r\n\r\n              // --ADD document BODY LISTENER --\r\n\r\n  body.addEventListener(\"click\", (e) => {\r\n\r\n    //   --CLICK \"All tasks button\" in Topbar--\r\n    if (e.target.classList.contains(\"all-task-button\")) {\r\n      const tasksArr = JSON.parse(localStorage.getItem(\"tasks\"));\r\n      _main__WEBPACK_IMPORTED_MODULE_0__.taskSection.innerHTML = \"\";\r\n      _main__WEBPACK_IMPORTED_MODULE_0__.taskSection.style.display = \"flex\";\r\n\r\n      e.target.parentNode.classList.add(\"active\");\r\n      completedTaskBlock.classList.remove(\"active\");\r\n      \r\n        allTaskBlock.style.background = \"green\";\r\n        completedTaskBlock.style.background = \"none\";\r\n      \r\n      console.log(e.target.parentNode);\r\n       \r\n      tasksArr.forEach((item, index) => {\r\n        _main__WEBPACK_IMPORTED_MODULE_0__.taskSection.innerHTML += (0,_main__WEBPACK_IMPORTED_MODULE_0__.createTemplate)(item, index);\r\n      });\r\n    }\r\n\r\n    //   --CLICK \"completed-all-task-button\"   in Topbar--\r\n\r\n    if (e.target.classList.contains(\"completed-all-task-button\")) {\r\n      const completedTasksArr = JSON.parse(\r\n        localStorage.getItem(\"completeTasks\")\r\n      );\r\n\r\n      _main__WEBPACK_IMPORTED_MODULE_0__.taskSection.innerHTML = \"\";\r\n\r\n\r\n      e.target.parentNode.classList.add(\"active\");\r\n      completedTaskBlock.style.background = \"green\";\r\n      allTaskBlock.style.background = \"none\";\r\n      allTaskBlock.classList.remove(\"active\");\r\n\r\n      completedTasksArr.forEach((item, index) => {\r\n        _main__WEBPACK_IMPORTED_MODULE_0__.taskSection.innerHTML += (0,_main__WEBPACK_IMPORTED_MODULE_0__.createTemplate)(item, index);\r\n      });\r\n      console.log(completedTasksArr);\r\n    }\r\n\r\n        //  --CLICK \"DELETE TASK\" on taskItem push--\r\n\r\n        if(e.target.classList.contains(\"icon-close\")) {\r\n          const closeButtonIndex = e.target.dataset.index;\r\n        console.log(\"icon close\", closeButtonIndex )\r\n        }\r\n\r\n        // click on TASK ITEM\r\n    if( e.target.closest(\".task-item-block\") ) {\r\n      const taskItemBlock = e.target.closest(\".task-item-block\");\r\n      console.log(\"click task item block\", taskItemBlock.dataset.index);\r\n    }\r\n\r\n        //  --END BODY LISTENER  --\r\n    // console.log(\"click element\", e.target);\r\n  });\r\n\r\n  //    --TOP bAR SLIDE Animation--\r\n  topBarArrow.addEventListener(\"click\", (e) => {\r\n    topBar.style.top = \"0px\";\r\n    topBarArrow.style.visibility = \"hidden\";\r\n    topBar.style.animationIterationCount = \"1\";\r\n    topBar.style.animation = \"slideTopBar 1s\";\r\n    topBar.style.animationFillMode = \"forwards\";\r\n  });\r\n  topBarCloseButton.addEventListener(\"click\", (e) => {\r\n    topBar.style.top = \"-120px\";\r\n    topBar.style.animation = \"slideTopBar 5s\";\r\n    topBar.style.animationDirection = \"reverse\";\r\n    topBar.style.animationFillMode = \"backwards\";\r\n\r\n    setTimeout(() => {\r\n      topBarArrow.style.visibility = \"visible\";\r\n    }, 100);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/js/topBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;