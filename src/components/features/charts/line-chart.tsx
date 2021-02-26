import React from 'react'
import { Line } from 'react-chartjs-2'

interface Props {
   border_color: string,
   bg_color: string,
   data_values: Array<number>,
   labels: Array<number>,
   hover_color: string,
   step?: number
}

const LineChart: React.FC<Props> = ({ border_color, bg_color, data_values, labels, hover_color }) => {

   const data = {
      labels: labels,
      datasets: [
         {
            label: 'Visitors',
            data: data_values,
            lineTension: 0.2,
            backgroundColor: bg_color,
            borderCapStyle: 'round',
            barPercentage: 1,
            barThickness: 15,
            borderColor: border_color,
            hoverBackgroundColor: hover_color,
            pointRadius: 0,
            pointHoverRadius: 20,
            pointHoverBackgroundColor: 'white',
            tooltips: {
               yAlign: 'bottom',
               callbacks: {
                  labelColor: function (tooltipItem: any, chart: any) {
                     return {
                        backgroundColor: 'rgb(255, 255,255)'
                     }
                  },
               },
               backgroundColor: '#227799'
            }
         }
      ]
   }

   return <Line data={data} options={{
      responsive: true,
      maintainAspectRatio: false,
      bezierCurve: false,
      scales: {
         yAxes: [{
            display: false,
         }],
         xAxes: [{
            display: false
         },],
      },
      legend: {
         display: false
      },

   }} />
}


export default LineChart
