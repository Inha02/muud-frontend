import MusicPlayer from "../../components/MusicPlayer";
import { useEffect, useState, useContext, useRef } from 'react'
import Tag from '../../components/common/Tag';

import RoundButton from '../../components/common/RoundButton';
import CheckBox from '../../components/common/CheckBox';

//import styles from '../../components/MusicPlayer/MusicPlayer.module.css'; // CSS 모듈 임포트
import styles from './complete-diary-page.module.css'; // CSS 모듈 임포트
import { getMoodData } from "../../utils";

/* 플리 카드 컴포넌트 */
const SlideCard = ({ content, children }) => {
  return (
    <div className={styles.cardContainer}>

    </div>
  )
}

const CompleteDiaryPageView = ({
  currentDate,
  playing,
  setPlaying,
  userInfo,
  playlist,
  handleRecord,
  mood
}) => {



  return (

    <div className='appContainer'>

      <div className={styles.checkIco}></div>
      <div>기록완료</div>
      <div>{currentDate}</div>

      <div>

        <div >
          <div className={styles.cardContainer}>
            <MusicPlayer video={playlist.videoId} />
            <div >
              <div>
                {playlist.tags && playlist.tags.map((item) => (<Tag key={item}>{item}</Tag>))}
              </div>
            </div>
            가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차
            <div>

            </div>


          </div>
        </div>

      </div>

      <RoundButton onClick={handleRecord} active>확인</RoundButton>
    </div>
  )
}

export default CompleteDiaryPageView
