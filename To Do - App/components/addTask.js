import { readTasks } from "./readTasks.js";
import { checkComplete } from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

// Agregacion de tareas a la aplicacion
export const addTask = (evento) => {
  evento.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value;
  const date = calendar.value;

  const actualDate = moment(new Date()).format();
  const momentDate = moment(date).format();
  const dateFormat = moment(date).format("DD/MM/YYYY");

  if (value === "") {
    Swal.fire("Ooops!", "Debes ingresar un texto", "warning");
    return;
  }

  if (momentDate < actualDate) {
    Swal.fire(
      "Error!",
      "No puedes agendar tareas anteriores a la fecha actual",
      "error"
    );
    return;
  }

  input.value = "";
  calendar.value = "";
  const complete = false;
  const taskObject = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };

  list.innerHTML = "";
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push(taskObject);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  readTasks();
};

// Crear tarea con ciertos parametros
export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
  task.classList.add("card");
  const taskContent = document.createElement("div");
  const iconContent = document.createElement("div");
  const check = checkComplete(id);

  if (complete) {
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }

  const titleTask = document.createElement("span");
  const dateElement = document.createElement("span");

  dateElement.innerHTML = dateFormat;
  titleTask.classList.add("task");
  titleTask.innerHTML = value;

  taskContent.appendChild(titleTask);

  iconContent.classList.add("icons");
  iconContent.appendChild(check);
  iconContent.appendChild(deleteIcon(id));

  task.appendChild(taskContent);
  task.appendChild(iconContent);

  return task;
};
