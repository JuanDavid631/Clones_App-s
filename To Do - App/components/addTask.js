// Leer tareas
export const addTask = (evento) => {
  evento.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value;
  const date = calendar.value;

  const actualDate = moment(new Date()).format();
  const momentDate = moment(date).format();
  const dateFormat = momento(date).format("DD/MM/YYYY");

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
  const taskList = JSON.parse(localStorage.getItem("tasks")); // [];
  taskList.push(taskObject);
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

// Crear tarea
export const createTask = ({value, dateFormat, id}) => {
  
}
