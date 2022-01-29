import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { WidgetFrame } from '../../WidgetFrame';
import { useRecoilValue } from 'recoil';
import useUpdateWidget from '../../../hooks/useUpdateWidget';
import { widgetById } from '../../../stores/store';
import { Task } from '../../../models/todolist-widget.interface';
import { Note } from "./styles";

export default function TodolistTask({ onChange, task }: { onChange: any, task: Task }) {
	const [note, setNote] = useState('');
	// Have the form control return Task object and select if 

	return (
		<Note placeholder='An idea...' value={note} onChange={onChange}></Note>
	)
}
