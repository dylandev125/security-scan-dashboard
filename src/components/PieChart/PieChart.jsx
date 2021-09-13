import { VictoryPie } from 'victory'

const PieChart = (props) => {
  return (
    <VictoryPie
      style={{
        data: {
          stroke: 'white',
          strokeWidth: 3,
        },
        labels: {
          fontSize: '24px',
          fill: '#230b34',
          fontWeight: 900,
        },
      }}
      labelRadius={({ innerRadius }) => innerRadius + 120}
      startAngle={-40}
      endAngle={320}
      data={[
        { x: 7, y: 7 },
        { x: 2, y: 2 },
        { x: 5, y: 5 },
        { x: 2, y: 2 },
        { x: 9, y: 9 },
      ]}
      colorScale={['#fee196', '#ffb36e', '#fc5c79', '#8bec7c', '#5183ff']}
    />
  )
}

export default PieChart
