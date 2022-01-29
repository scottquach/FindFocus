export enum TodoType {
	Extended = 'extended',
	Simple = 'simple',
}

export interface Task {
    id: string;
    type: TodoType;
    title: string;
    created: Date;
    reminders: Array<Date>;
    done: Boolean;
    subtasks: Array<string>;
    dueDate: Date;
    repeat: Date;
    file: File;
    notes: string;
}