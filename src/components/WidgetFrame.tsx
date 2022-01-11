import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components'
import useDeleteWidget from '../hooks/useDeleteWidget';
import { getTitle } from '../models/widget.model';
import { widgetById } from '../stores/store';
import { WidgetHeader } from './WidgetHeader'

const Frame = styled.div`
	background-color: var(--color-background);
	/* border: 2px solid gray; */

	border-radius: var(--widget-border-radius);
	/* border-bottom-right-radius: 18px; */
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	/* color: white; */
	/* background-color: #ffffffd8;
	backdrop-filter: saturate(50%) blur(15px); */

	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const WidgetContent = styled.div`
	display: flex;
	max-width: 100%;
	max-height: 100%;
	width: 100%;
	flex: 1;
`

export function WidgetFrame({ className, widgetId, children }: any) {
	const deleteWidget = useDeleteWidget();
	const widget = useRecoilValue(widgetById(widgetId));
	// console.log('widget', widgetId);
	const typeName = getTitle(widget?.type) ?? 'n/a'
	return (
		<Frame className={className}>
			<WidgetHeader widgetId={widgetId} title={typeName} deleteWidget={deleteWidget}></WidgetHeader>
			<WidgetContent className="NonDraggable">
				{children}
			</WidgetContent>
		</Frame>
	)
}