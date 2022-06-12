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
import { useSelector } from 'react-redux';

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export const ChartCompare = () => {

  const player1 = useSelector((state)=> state.firstPlayer)

    const player2 = useSelector((state)=> state.secondPlayer)

return(
  <Radar style={{width:"70%", height:"80%", margin:"auto"}} data={{
    labels: [ 'SHO', 'PAS', 'DRI', 'DEF', 'PHY', 'PAC'],
    datasets: [
      {
        label: player1.name === undefined ? "player one" : player1.name,
        data: [ player1.sho, player1.pas, player1.dri, player1.def, player1.phy, player1.pac],
        fill:true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: player1.name === undefined ? "player two" : player2.name,
        data: [ player2.sho, player2.pas, player2.dri, player2.def, player2.phy, player2.pac],
        fill:true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
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
)}