import { ResponsiveTimeRange } from '@nivo/calendar'
import { ResponsivePie, ResponsivePieCanvas } from '@nivo/pie'
import { NavBar } from '../../components'

const shareStatisticsImage = () => { }
const ReportPageView = ({
  statistics,
  setStatistics,
  statisticsRef,
  generateStatistics,
  saveStatisticsImage,
  timeData,
  data,
}) => {
  return (
    <div>
      <NavBar />

      {/* 통계를 보여줄 DOM 요소 */}
      <div ref={statisticsRef}>
        <div
          className="container"
          style={{ width: '800px', height: '500px', margin: '0 auto' }}
        >
          <ResponsiveTimeRange
            data={timeData}
            from="2018-04-01"
            to="2018-08-12"
            emptyColor="#eeeeee"
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
                translateX: -60,
                translateY: -60,
                symbolSize: 20,
              },
            ]}
          />
        </div>
        <div
          className="container"
          style={{ width: '800px', height: '500px', margin: '0 auto' }}
        >
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 2]],
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: 'ruby',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'c',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'go',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'python',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'scala',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'lisp',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'elixir',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'javascript',
                },
                id: 'lines',
              },
            ]}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>

      {/* 이미지 저장 버튼 */}
      <button onClick={saveStatisticsImage}>통계 이미지 저장</button>

      {/* 이미지 공유 버튼 */}
      <button onClick={shareStatisticsImage}>통계 이미지 공유</button>
    </div>
  )
}

export default ReportPageView
