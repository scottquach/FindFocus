import { Dialog, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import * as S from './styles';
import { prependOnceListener } from "process";


export function WidgetSettings({ settings, open, close }: { settings: any, open: boolean, close: () => void }) {
	// const [open, setOpen] = useState(false);

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

						{}
						{/* <button onClick={close}>Close</button> */}

					</S.SettingsPanel>
					<S.WidgetPreview>
					</S.WidgetPreview>
				</S.Container>
			</Dialog>
		</div>
	)

}