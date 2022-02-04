import toast from "react-hot-toast";
import { Button } from "../../../styles/Button";
import { ColorPalette } from "../styles";
import * as S from "./styles";

interface Preset {
	name: string;
	creator: string;
	primary: string;
	background: string;
}
const Presets = [
	{
		name: 'Simply Dark',
		creator: 'Developer',
		primary: '#FAFAFA',
		background: '#2E3440'
	},
	{
		name: 'Simply Light',
		creator: 'Developer',
		primary: '#212121',
		background: '#FAFAFA'
	},
	{
		name: 'Earthy',
		creator: 'Developer',
		primary: '#6D4C41',
		background: '#FFF2DF'
	},
	{
		name: 'Cherry',
		creator: 'Developer',
		primary: '#FD7AAA',
		background: '#FCFDFD'
	},
	{
		name: 'Cherry',
		creator: 'Developer',
		primary: '#FD7AAA',
		background: '#FCFDFD'

	}
]

export function ThemePresets({ setPrimary, setBackground }: any) {

	const handleClick = (preset: Preset) => {
		setPrimary(preset.primary);
		setBackground(preset.background);
		toast.success('Theme applied!')
	}

	return (
		<div className="flex gap-4">
			{
				Presets.map((preset, index) => {
					return (
						<S.Preset key={index} onClick={() => handleClick(preset)}>
							<div className="flex-col items-center w-full px-2">
								<S.PresetName>{preset.name}</S.PresetName>
								<div className="opacity-75 text-center text-sm text-primary">{preset.creator}</div>
							</div>
							<div className="w-full px-2">
								<div className="flex-col px-10">
									<S.PresetPrimary  color={preset.primary}></S.PresetPrimary>
									<S.PresetBackground color={preset.background}></S.PresetBackground>
								</div>
							</div>
						</S.Preset>
					)
				})
			}
		</div>
	)
}