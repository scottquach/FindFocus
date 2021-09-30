import * as S from './WidgetPreview.styles';


interface PreviewParams {
	title: string,
	description: string
}

export function WidgetPreview({ title, description }: PreviewParams) {

	return (
		<S.WidgetPreview>
			<S.PreviewWindow></S.PreviewWindow>

			<S.DescriptionLayout>
				<S.Title>{title}</S.Title>
				<S.DescriptionText>{description}</S.DescriptionText>
			</S.DescriptionLayout>
		</S.WidgetPreview>
	)
}