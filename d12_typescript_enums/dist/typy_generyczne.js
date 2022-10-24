import fetch from 'node-fetch';
//pierwszy sposób to dwa interfejsy
// interface SingleTodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }
//drugi sposób to rozszerzenie interfejsu
// interface SingleTodo extends SingleTodoToCreate{
//     id: number;
// }
class TodoApi {
    url = 'https://jsonplaceholder.typicode.com/todos';
    async getSingle(id) {
        const response = await fetch(`${this.url}/${id}`);
        return await response.json();
    }
    ;
    async list() {
        const response = await fetch(`${this.url}/`);
        return await response.json();
    }
    ;
    //trzeci sposób to stworzenie Omit
    // async create(task: Omit<singleTodo, 'id'>): Promise<SingleTodo> {
    async create(task) {
        const response = await fetch(`${this.url}/`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await response.json();
    }
}
//13 min
(async () => {
    const todo = new TodoApi();
    const newTodo = await todo.create({
        title: 'Wynieść śmieci',
        userId: 1,
        completed: false,
    });
    console.log(newTodo.id);
})();
//# sourceMappingURL=typy_generyczne.js.map