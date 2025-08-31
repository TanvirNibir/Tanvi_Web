/*






The data will follow this structure:

{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
}
*/



let todoArray = [];

let nextId = 1;

function getAll() {


  return todoArray;

}

//console.log(getAll())

function addOne(task, completed, dueDate) {


  // check if parameters are empty


  if (!task || !dueDate || (completed !== true && completed !== false)) {
    return false



  }

  const newTodo = {
    id: nextId++,
    task,
    completed,
    dueDate,
  };

  todoArray.push(newTodo);
  return newTodo;
}

//console.log('Adding this: ', addOne('Do laundry', false, '28.8.2025'))

function findById(id) {
  const numericId = Number(id);
  const todo = todoArray.find(todo => todo.id === numericId);
  return todo || false // returns false if nothing found
}

//console.log('finding this: ', findById(1));

function updateOneById(id, updatedData) {
  const todo = findById(id);
  if (todo) {
    // updating only the ones that were given
    if (updatedData.task) todo.task = updatedData.task;
    if (updatedData.completed) todo.completed = updatedData.completed;
    if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
    return todo;
  }
  return false;
}

//console.log('updating this: ', updateOneById(1, {completed: true}))


function deleteOneById(id) {
  const todo = findById(id);
  if (todo) {
    const initialLength = todoArray.length;
    todoArray = todoArray.filter(todo => todo.id !== Number(id));
    return todoArray.length < initialLength;
  }
  return false; // if nothing was found by ID
}

//console.log('deleting this: ', deleteOneById(1));
//console.log('getting all: ', getAll())


// Exporting object

const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDos;
