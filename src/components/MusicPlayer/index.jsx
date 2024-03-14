import { useEffect, useState, useRef } from 'react'
import styles from './MusicPlayer.module.css'; // CSS 모듈 임포트

const MusicPlayer = ({ video }) => {
    const playerRef = useRef(null);

    return (
        <>
            <div className={styles.musicPlayerWrap} >
                <iframe
                    ref={playerRef}
                    className={styles.player}
                    color="white"
                    width="560" height="315"
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div >
        </>
    );
}

export default MusicPlayer
