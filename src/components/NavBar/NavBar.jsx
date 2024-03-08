import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBarView = () => {
  return (
    <div className={styles.navContainer}>
      <ul>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/register">회원가입</Link>
        </li>
        <li>
          <Link to="/user/nickname">닉네임입력</Link>
        </li>
        <li>
          <Link to="/introduce">소개페이지</Link>
        </li>
        <li>
          <Link to="/mood/choose">감정 선택</Link>
        </li>
        <li>
          <Link to="/mood/result">감정 결과</Link>
        </li>
        <li>
          <Link to="/playlist">플리 추천</Link>
        </li>
        <li>
          <Link to="/diary/complete">일기 작성 완료</Link>
        </li>
        <li>
          <Link to="/diary/detail">일기 수정</Link>
        </li>
        <li>
          <Link to="/home">홈</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBarView
