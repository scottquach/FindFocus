// import { TextField } from "@mui/material"
// import styled from "styled-components"
// import { MenuHeader } from "../../../GlobalStyles"
// import LinkIcon from '@mui/icons-material/Link';
// import { activeWidgetsState, widgetById } from "../../../stores/store";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// // import { Widget } from "../../../models/widget.interface";
// import { useState } from "react";
// import { cloneDeep } from 'lodash';

// const Wrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	width: 20rem;
// 	height: 12rem;
// 	padding: 1rem;
// `

// const Description = styled.div`
// 	margin-bottom: 1rem;;
// `

export {}
// export function SpotifySettings({ widgetId }: { widgetId: string }) {
// 	const setWidgets = useSetRecoilState(activeWidgetsState);
// 	const widget = useRecoilValue(widgetById(widgetId));
// 	const [spotifyUrl, setSpotifyUrl] = useState(widget.data?.link ? widget.data.link : '');
// 	const parser = new DOMParser()

// 	const onSave = () => {
// 		setWidgets((old: Widget[]) => {
// 			const index = old.findIndex(x => x.id === widgetId);
// 			const newState = cloneDeep(old);
// 			if (index > -1) {
// 				const widget = cloneDeep(old[index]);
// 				console.log('spotify', widget);
// 				widget['data'] = {
// 					link: spotifyUrl
// 				}
// 				newState.splice(index, 1, widget);
// 			}
// 			return newState;
// 		})
// 	}

// 	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		const value = event.target.value;
// 		const htmlDoc = parser.parseFromString(value, 'text/html');
// 		// console.log(htmlDoc);
// 		const iframes = htmlDoc.getElementsByTagName('iframe');
// 		if (iframes.length > 0) {
// 			setSpotifyUrl(iframes[0].getAttribute('src'));
// 		}

// 		// setSpotifyUrl(src);
// 	};

// 	return (
// 		<Wrapper>
// 			<MenuHeader>Spotify settings</MenuHeader>
// 			<Description>Use the share spotify link of any playlist to import into Boards.io</Description>

// 			<TextField InputProps={{
// 				startAdornment: (
// 					<LinkIcon></LinkIcon>
// 				)
// 			}}
// 				onChange={handleChange}
// 				size="small"></TextField>
// 			{/* <button onClick={onSave}>Save stuff</button> */}

// 		</Wrapper>
// 	)

// }
