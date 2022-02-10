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
import { Content, Button } from "./styles";
import { Task, createTask } from "../../../models/todolist-widget.model";
import TodolistTask from "./TodolistTask"

export default function TodolistWidget({ widgetId }: { widgetId: string }) {
	const [todos, setTodos] = useRecoilState(todosState);
	useSyncLocalStorage('todos-widget-store', todos);

	useEffect(() => {
		// console.log('Todos', todos);
	}, [todos])

	const onStoreChange = (changeObject: { changeType: string, task: Task}) => {
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
				const res = old.map((obj : Task) => {
					if (obj.id === task.id) {
						return task;
					}
					return obj;
				});
				return res;
			}
			return [];
		});
	};

	const handleCreateTask = () => {
		const newTask = createTask();
		setTodos((old : Array<Task>) => {
			const arr = new Array(...old);
			console.log(arr)
			arr.push(newTask);
			console.log('New task created', newTask);
			return arr;
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
			<Button onClick={handleCreateTask}>Create Task</Button>
		</Content>
	)
}