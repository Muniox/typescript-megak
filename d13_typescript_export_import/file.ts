import {TodoApi} from "./libs/todo-api";


(async () => {
    const todo = new TodoApi();
    const newTodo = await todo.create({
        title: 'Wynieść śmieci',
        userId: 1,
        completed: false,
    });
    console.log(newTodo.id)
})();