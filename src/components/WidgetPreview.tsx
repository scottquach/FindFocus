import { useSetRecoilState } from 'recoil';
import useAddWidget from '../hooks/useAddWidget';
import { WidgetType } from '../models/widget-types.enum';
import { createWidget } from '../models/widget.model';
import { gridLayoutState } from '../stores/store';
import * as S from './WidgetPreview.styles';


interface PreviewParams {
	title: string,
	description: string,
	type: WidgetType
}

export function WidgetPreview({ type, title, description }: PreviewParams) {
	const addWidget = useAddWidget();

	function test() {
		console.log('widget', type)
		const newWidget = createWidget(type);
		console.log(newWidget);
		addWidget(newWidget);
	}

	return (
		<S.WidgetPreview onClick={test}>
			<S.PreviewWindow></S.PreviewWindow>
			<S.DescriptionLayout>
				<S.Title>{title}</S.Title>
				<S.DescriptionText>{description}</S.DescriptionText>
			</S.DescriptionLayout>
		</S.WidgetPreview>
	)
}