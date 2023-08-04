// Import React hooks
import { useCallback, useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import Button from '../Button';
import styles from './WaveSurferPlayer.module.scss';

// WaveSurfer hook
const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null);

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!containerRef.current) return;

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        });

        setWavesurfer(ws);

        return () => {
            ws.destroy();
        };
    }, [options, containerRef]);

    return wavesurfer;
};

// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
export const WaveSurferPlayer = (props) => {
    const containerRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const wavesurfer = useWavesurfer(containerRef, props);

    // On play button click
    const onPlayClick = useCallback(() => {
        wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
    }, [wavesurfer]);

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!wavesurfer) return;

        setCurrentTime(0);
        setIsPlaying(false);

        const subscriptions = [
            wavesurfer.on('play', () => setIsPlaying(true)),
            wavesurfer.on('pause', () => setIsPlaying(false)),
            wavesurfer.on('timeupdate', (currentTime) =>
                setCurrentTime(currentTime),
            ),
        ];

        return () => {
            subscriptions.forEach((unsub) => unsub());
        };
    }, [wavesurfer]);

    return (
        <div className={styles.container}>
            <div
                ref={containerRef}
                className={styles.waveform}
                style={{ minHeight: '120px' }}
            />
            <div className={styles.textCont}>
                <Button
                    onClick={onPlayClick}
                    text={isPlaying ? 'pause' : 'play'}
                    size="x-small"
                ></Button>

                <p className={styles.text}>seconds played: {currentTime}</p>
            </div>
        </div>
    );
};
