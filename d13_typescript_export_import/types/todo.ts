export interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type SingleTodoToCreate = Omit<SingleTodo, 'id'>
