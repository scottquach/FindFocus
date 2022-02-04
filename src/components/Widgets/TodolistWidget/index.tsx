import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { WidgetFrame } from "../../WidgetFrame";
import { useRecoilState } from 'recoil';
import SettingsIcon from '@mui/icons-material/Settings';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { WidgetSettings } from "../../WidgetSettings";
import { widgetById, todosState } from "../../../stores/store";
import useSyncLocalStorage from "../../../hooks/useSyncLocalStorage";
import { Content } from "./styles";
import { Task, createTask } from "../../../models/todolist-widget.interface";
import TodolistTask from "./TodolistTask"

export default function TodolistWidget({ widgetId }: { widgetId: string }) {
	const [todos, setTodos] = useLocalStorage('todos-widget-store', todosState);

	useEffect(() => {
		useSyncLocalStorage('todos-widget-store', todos);
		console.log('Todos', todos);
	}, [todos])

	const onStoreChange = (changeObject: { changeType: string, task: Task, fieldChanged: string, fieldValue?: any }) => {
		setTodos((old : Array<Task>) => {
			// let changedArray: Array<Task> = [];
			const { task, changeType } = changeObject;
			if (changeType == 'delete') {
				let set = new Set(old);
				set.forEach((storedTask : Task) => {
					if (storedTask.id == task.id) {
						set.delete(task);
					}
				});
				return Array.from(set);
			} else if (changeType == 'change') {
				const { fieldChanged, fieldValue } = changeObject;
				const res = old.map((obj : Task) => {
					if (obj.id === task.id) {
						return task;
					}
					return obj;
				});
				return res;
			}
			console.log('New state', changeObject);
			return [];
		});
	};

	const handleCreateTask = () => {
		const newTask = createTask();
		setTodos((old : Array<Task>) => {
			const set = new Set(old);
			set.add(newTask);
			console.log('New task created', newTask);
			return Array.from(set);
		});
	};

	return (
		<WidgetFrame widgetId={widgetId}>
			<TaskList handleCreateTask={handleCreateTask} todos={todos} onStoreChange={onStoreChange} />
		</WidgetFrame>
	)
}

function TaskList(props:any) {
	const todos = props.todos;
	const handleCreateTask = props.handleCreateTask;
	const listItems = todos.map((task:Task) => <TodolistTask key={task.id} task={task} onChange={props.onStoreChange}></TodolistTask>);

	return (
		<Content>
			{ listItems }
			<button onClick={handleCreateTask}>Create Task</button>
		</Content>
	)
}