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
		name: 'Purple Rain',
		creator: 'Developer',
		primary: '#e0aaff',
		background: '#10002b'
	},
	{
		name: 'Deep Sea',
		creator: 'Developer',
		primary: '#FE5F55',
		background: '#053c5e'
	},
	{
		name: 'Copper',
		creator: 'Developer',
		primary: '#E3B23C',
		background: '#455A64'
	},
	{
		name: 'Simply Light',
		creator: 'Developer',
		primary: '#212121',
		background: '#FAFAFA'
	},
	{
		name: 'Earth',
		creator: 'Developer',
		primary: '#6D4C41',
		background: '#FFF2DF'
	},
	{
		name: 'Cherry',
		creator: 'Developer',
		primary: '#fc619a',
		background: '#fff7f5'
	},
	{
		name: 'Sea',
		creator: 'Developer',
		primary: '#2E80F2',
		background: '#E5F9FD'
	},
	{
		name: 'Evergreen',
		creator: 'Developer',
		primary: '#1b4332',
		background: '#d8f3dc'
	},
	{
		name: 'Minimal',
		creator: 'Developer',
		primary: '#7E7F9A',
		background: '#fff7f5'
	},
]

export function ThemePresets({ setPrimary, setBackground }: any) {

	const handleClick = (preset: Preset) => {
		setPrimary(preset.primary);
		setBackground(preset.background);
		toast.success('Theme applied!')
	}

	return (
		<div className="flex flex-wrap gap-4">
			{
				Presets.map((preset, index) => {
					return (
						<S.Preset key={index} onClick={() => handleClick(preset)}>
							<div className="flex-col items-center w-full px-2">
								<S.PresetName>{preset.name}</S.PresetName>
								<div className="opacity-75 text-center text-sm text-primary">{preset.creator}</div>
							</div>
							<div className="w-full px-2">
								<div className="flex-col px-6">
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