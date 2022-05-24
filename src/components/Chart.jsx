import { Radar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export const Chart = ({name, sho, pas, dri, def, phy, pac}) => (
  <Radar style={{width:"70%", height:"80%", margin:"auto"}} data={{
    labels: [ 'SHO', 'PAS', 'DRI', 'DEF', 'PHY', 'PAC'],
    datasets: [
      {
        label: name,
        data: [ sho, pas, dri, def, phy, pac],
        fill:true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }} options = {{
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 1,
            suggestedMax: 100
        }
    }
}}/>
)