// Dejar las tareas en una sola fecha agrupadas
export const uniqueDates = (tasks) => {
  const unique = [];
  tasks.forEach((task) => {
    if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
  });
  return unique;
};

// Ordenar las fecha de manera ascendente
export const orderDates = (dates) => {
  return dates.sort((a, b) => {
    const firstDate = moment(a, "DD/MM/YYYY");
    const secondDate = moment(b, "DD/MM/YYYY");
    return firstDate - secondDate;
  });
};
