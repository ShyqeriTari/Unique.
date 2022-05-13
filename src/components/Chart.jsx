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

export const Chart = () => (
  <Radar data={{
    labels: ['Pac', 'Sho', 'Pas', 'Dri', 'Def', 'Phy'],
    datasets: [
      {
        label: '# of Votes',
        data: [8, 9, 7, 9, 4, 8],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }}/>
)