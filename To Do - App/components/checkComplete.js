// Estilos al CSS para el checkbox
export const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => completeTask(event, id));
  return i;
};

// Evalua si la tarea fue completada o no para cambiar el estado
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);

  tasks[index].complete = !tasks[index].complete;

  if (tasks[index].complete == true) {
    Swal.fire("Genial!", "Has completado una tarea", "success");
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
