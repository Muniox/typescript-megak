import fetch from 'node-fetch';

//mamy dane z innego API, innego serwisu, z zewnątrz i nie wiemy co się tam znajduje, bo json zwraca Promise<any>
//typ generyczny to taki typ który posiada subtyp, czyli typ, który jest związany z innym typem

interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface SingleTodoToCreate {
    userId: number;
    title: string;
    completed: boolean;
}

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
    private readonly url = 'https://jsonplaceholder.typicode.com/todos';

    async getSingle(id: number): Promise<SingleTodo> {
        const response = await fetch(`${this.url}/${id}`);
        return await response.json();
    };

    async list(): Promise<SingleTodo[]> {
        const response = await fetch(`${this.url}/`);
        return await response.json();
    };

    //trzeci sposób to stworzenie Omit
    // async create(task: Omit<singleTodo, 'id'>): Promise<SingleTodo> {
    async create(task: SingleTodoToCreate): Promise<SingleTodo> {
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
    console.log(newTodo.id)
})();
