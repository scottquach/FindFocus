import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import useUpdateWidget from '../../../hooks/useUpdateWidget';
import { widgetById } from '../../../stores/store';
import { WidgetFrame } from '../../WidgetFrame'
import * as S from './styles';

export default function StickyNoteWidget({ widgetId }: { widgetId: string }) {
	const updateWidget = useUpdateWidget();
	const widget = useRecoilValue(widgetById(widgetId));
	const [note, setNote] = useState('');

	useEffect(() => {
		if (widget.data.note && widget.data.note != note) {
			setNote(widget.data.note ?? '');
		}
	}, [0])

	const updateNote = (e: any) => {
		// console.log(e.target.value);
		setNote(e.target.value);
		updateWidget(widgetId, {
			note: e.target.value
		});
	}

	return (
		<WidgetFrame widgetId={widgetId}>
			<S.Content>
				<S.Note placeholder='An idea...' value={note} onChange={updateNote}></S.Note>
			</S.Content>
		</WidgetFrame>
	)
}
