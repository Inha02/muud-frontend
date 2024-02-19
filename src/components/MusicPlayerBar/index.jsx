import React, { useState } from 'react';

export default function MusicPlayerBar(props) {
    const { playing, setPlaying } = props; // 상위 컴포넌트에 playing,setPlaying true로 정의
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayBtn = () => {
        if (playing === false) {
            setPlaying(true);
        } else {
            setPlaying(false);
        }
    };

    return (
        <div>
            <button onClick={handlePlayBtn}>
                <img
                    src={playing === true ? '/images/rabbit_red.ico' : null}
                    alt='재생/멈춤 버튼'
                />
            </button>
        </div>
    );
}
