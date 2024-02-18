import { useEffect, useState, useRef } from 'react'
import ReportPageView from './report-page'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
import { timeData, data } from "../../constants/testData";

const ReportPage = () => {
  const [statistics, setStatistics] = useState([]) // 통계 데이터 상태
  const statisticsRef = useRef(null) // 통계를 렌더링할 DOM 요소
  // 통계 생성 함수
  const generateStatistics = () => {
    // 통계를 생성하고 상태에 설정하는 로직
    const generatedStatistics = '통계 값 1: 100, 통계 값 2: 200'
    setStatistics(generatedStatistics)
  }

  // 이미지 저장 함수
  const saveStatisticsImage = () => {
    // 통계를 렌더링한 DOM 요소를 캔버스로 변환
    html2canvas(statisticsRef.current).then((canvas) => {
      // 캔버스를 이미지로 변환하고 Blob 생성
      canvas.toBlob((blob) => {
        // Blob을 파일로 저장
        saveAs(blob, 'statistics.png')
      })
    })
  }

  return (
    <ReportPageView
      statistics={statistics}
      setStatistics={setStatistics}
      statisticsRef={statisticsRef}
      generateStatistics={generateStatistics}
      saveStatisticsImage={saveStatisticsImage}
      timeData={timeData}
      data={data}
    />
  )
}

export default ReportPage
