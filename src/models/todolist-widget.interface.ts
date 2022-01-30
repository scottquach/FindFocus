import { v4 as uuidv4 } from "uuid";

export enum TodoType {
	Extended = 'extended', // BIG LOE
	Simple = 'simple',
}

export interface Task {
    id: string;
    type: TodoType;
    title: string;
    created: string;
    reminders: Array<Date>;
    done: Boolean;
    subtasks: Array<string>;
    dueDate: Date | null;
    repeat: Date | null;
    file: File | null;
    notes: string;
}

export function createTask() : Task {
    const task = {
        id: uuidv4(),
        type: TodoType.Simple,
        title: '',
        created: new Date().toISOString(),
        reminders: [],
        done: false,
        subtasks: [],
        dueDate: null,
        repeat: null,
        file: null,
        notes: '', 
    }

    return task;
}