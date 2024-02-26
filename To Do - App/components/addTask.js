export const addTask = (evento) => {
  evento.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value;
  const date = calendar.value;
  
  const actualDate = moment(new Date()).format();

}