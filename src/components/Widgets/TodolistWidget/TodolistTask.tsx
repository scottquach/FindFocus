import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { Task } from '../../../models/todolist-widget.interface';
import { Note, TaskInstance } from "./styles";

export default function TodolistTask({ onChange, task }: { onChange: any, task: Task }) {
	const [title, setTitle] = useState(task.title);
	const [done, setDone] = useState(task.done);

	useEffect(() => {

	}, [task]);

	const handleDoneChange = (event:any) => {
		const checked = event.target.checked;
		setDone(checked);
		let clone = Object.assign({}, task);
		clone.done = checked;
		onChange(
			{
				changeType: "change",
				fieldChanged: "done",
				fieldValue: checked,
				task: clone,
			}
		)
	};

	const handleTitleChange = (event:any) => {
		const value = event.target.value;
		setTitle(value);
		let clone = Object.assign({}, task);
		clone.title = value;
		onChange(
			{
				changeType: "change",
				fieldChanged: "title",
				fieldValue: value,
				task: clone,
			}
		)
	};

	const deleteTask = () => {
		onChange(
			{
				changeType: "delete",
				fieldChanged: "NOT USED",
				task: task,
			}
		)
	}

	return (
		<TaskInstance>
			<Checkbox checked={done} onChange={handleDoneChange} />
			<Note placeholder='An idea...' value={title} onChange={handleTitleChange}></Note>
			<IconButton onClick={deleteTask} aria-label="delete">
				<DeleteIcon />
			</IconButton>
		</TaskInstance>
	)
}
