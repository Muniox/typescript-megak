import fetch from 'node-fetch';

//mamy dane z innego API, innego serwisu, z zewnątrz i nie wiemy co się tam znajduje, bo json zwraca Promise<any>
//typ generyczny to taki typ który posiada subtyp, czyli typ, który jest związany z innym typem

interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


async function getTodo(id: number): Promise<SingleTodo> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return await response.json();
}

(async () => {
    const todo = await getTodo(10);
    console.log(todo.title, todo.completed ? 'is completed' : 'is to be done');
})()