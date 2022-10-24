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
}

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

    async create(task: SingleTodoToCreate): Promise<any> {
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
    }))
})();
