import {SingleTodo, SingleTodoToCreate} from "../types/todo";
import fetch from "node-fetch";

export class TodoApi {
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