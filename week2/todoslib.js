let todoArray = [];
let nextId = 1;

function getAll() {
    return todoArray;

}
if (require.main === module) {
    console.log("getalll called", getAll());

}

function addOne(task, completed, dueTime) {
    if (!task || !completed || !dueTime) {
        return false;
    }
    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueTime
    };
    todoArray.push(newTodo);
    return newTodo;
}

function getall() {
    return todoArray;

}

function findById(id) {
    const numerid = Number(id);
    const todo = todoArray.find(item => item.id === numerid);
    return todo || false;

}
function updateOneById(id, updateData) {
    const todo = findById(id);
    if (todo) {
        if (updateData.task) todo.task = updateData.task;
        if (updateData.completed) todo.completed = updateData.completed;
        if (updateData.dueTime) todo.dueTime = updateData.dueTime;
        return todo;

    }
    return false;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todoArray.length;
        todoArray = todoArray.filter(todo => todo.id !== Number(id));
        return todoArray.length < initialLength;
    }
}

if (require.main === module) {
    let result = addOne("study", " homework", "10:00");
    console.log(result);
    result = addOne("sleep", " homework", "10:00");
    console.log(result);
}
console.log("getAll called:", getAll());

console.log("findById called:", findById(1));

console.log("updateOneById called:", updateOneById(1, { task: "homework", completed: "shopping" }));
console.log("findById called after item updated:", findById(1));

console.log("deleteOneById called:", deleteOneById(1));
console.log("findById called after item deleted:", findById(1));



const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;