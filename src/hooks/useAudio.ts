import { useEffect, useState } from 'react';

/**
 * Basic audio player holder that pulls audio from a hosted url
 * @param url
 * @returns playing, toggle, setAudio
 */
export default function useAudio(url: string = ''): [boolean, () => void, (audio: string) => void, number, (x: number) => void] {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const setAudio = (url: string) => (audio.src = url);
    const toggle = () => setPlaying(!playing);
    // const setVolume = (volume: number) => audio.volume = volume;

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.volume = volume;
    }, [volume]);

    useEffect(() => {
		audio.loop = true;
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle, setAudio, volume, setVolume];
}
