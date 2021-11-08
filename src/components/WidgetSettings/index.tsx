import { Button, Dialog, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as S from './styles';
import { useEffect, useState } from "react";
import useModifyWidget from "../../hooks/useModifyWidget";


export function WidgetSettings({ settingsUI, widgetId, originalSettings, open, close }: { widgetId: string, settingsUI: any, originalSettings: any, open: boolean, close: () => void }) {
	const [stagedData, setStagedData] = useState(originalSettings);
	const modifyWidget = useModifyWidget();
    useEffect(() => console.log(stagedData), [stagedData]);

	const save = () => {
		console.log(stagedData);
		modifyWidget(widgetId, stagedData);
		close();
	}

	return (
		<div>
			<Dialog fullScreen open={open}>
				<S.Container>
					<S.SettingsPanel>
						<S.Header>
							<S.HeaderClose onClick={close}>
								<ArrowBackIcon></ArrowBackIcon>
							</S.HeaderClose>
							<S.HeaderText>
								<S.HeaderTitle>Quote settings</S.HeaderTitle>
								<S.HeaderSubtitle>See new quote everyday</S.HeaderSubtitle>
							</S.HeaderText>
						</S.Header>

						<S.SectionTitle>Settings</S.SectionTitle>
						{settingsUI(originalSettings, setStagedData)}
						<Button variant="contained" onClick={save}>Save</Button>

					</S.SettingsPanel>
					<S.WidgetPreview>
					</S.WidgetPreview>
				</S.Container>
			</Dialog>
		</div>
	)

}