import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { WidgetFrame } from "../../WidgetFrame";
import { useRecoilState } from 'recoil';
import SettingsIcon from '@mui/icons-material/Settings';
import { WidgetSettings } from "../../WidgetSettings";
import { widgetById, todosState } from "../../../stores/store";
import { useRecoilValue } from "recoil";
import { Content } from "./styles";
import { Task, createTask } from "../../../models/todolist-widget.interface";
import TodolistTask from "./TodolistTask"

export default function TodolistWidget({ widgetId }: { widgetId: string }) {
	const [todos, setTodos] = useRecoilState(todosState);

	useEffect(() => {
		console.log('Todos', todos);
	}, [todos])

	const onStoreChange = (changeObject: { changeType: string, task: Task }) => {
		setTodos((old) => {
			const set = new Set(old);
			const newTask = changeObject.task;
			if (changeObject.changeType == 'add') {
				set.add(newTask);
			} else if (changeObject.changeType == 'delete') {
				set.delete(newTask);
			} else if (changeObject.changeType == 'change') {
				// Change the object in the list
			}
			console.log('New state', changeObject);
			return Array.from(set);
		});
	};

	const handleCreateTask = () => {
		const newTask = createTask();
		setTodos((old) => {
			const set = new Set(old);
			set.add(newTask);
			console.log('New task created', newTask);
			return Array.from(set);
		});
	};

	return (
		<WidgetFrame widgetId={widgetId}>
			<TaskList todos={todos} onStoreChange={onStoreChange} />
			<button onClick={handleCreateTask}>Create Task</button>
		</WidgetFrame>
	)
}

function TaskList(props:any) {
	const todos = props.todos;
	const listItems = todos.map((task:Task) => <TodolistTask key={task.id} task={task} onChange={props.onStoreChange}></TodolistTask>);

	return (
		<Content>
			{ listItems }
		</Content>
	)
}