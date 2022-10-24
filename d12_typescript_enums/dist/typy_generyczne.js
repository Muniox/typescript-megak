import fetch from 'node-fetch';
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
    console.log(await todo.create({
        title: 'Wynieść śmieci',
        userId: 1,
    }));
})();
//# sourceMappingURL=typy_generyczne.js.map