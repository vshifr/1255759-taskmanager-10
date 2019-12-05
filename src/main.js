import {createMenuTemplate} from './components/menu.js';
import {createFilters} from './components/filter.js'
import {createBoardTemplate} from './components/board.js';
import {createTaskCard} from './components/task-card.js';
import {taskEditTemplate} from './components/task-edit-card';
import {createLoadMoreBtn} from './components/loadbutton.js';


const TASK_COUNT = 3;
const mainTemplate = document.querySelector(`main`);
const headerTemplate = mainTemplate.querySelector(`.main__control`);

function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
}

render(headerTemplate, createMenuTemplate(), `beforeend`);
render(mainTemplate, createFilters(), `beforeend`);
render(mainTemplate, createBoardTemplate(), `beforeend`);
const taskBoard = document.querySelector(`.board__tasks`);
render(taskBoard, taskEditTemplate(), `beforeend`);

const taskBoardElement = document.querySelector(`.board`);
[...Array(TASK_COUNT)].forEach(() => render(taskBoard, createTaskCard(), `beforeend`));
render(taskBoardElement, createLoadMoreBtn(), `beforeend`);