import React from 'react'
import { Bar } from 'react-chartjs-2'
import { barchartlabels, barchartvalues } from '../../../constants'

interface Props {

}

const BarChart: React.FC<Props> = () => {

   const data = {
      labels: barchartlabels,
      datasets: [
         {
            label: 'ABCDE',
            data: barchartvalues,
            backgroundColor: 'rgb(31, 64, 226)',
            barPercentage: 1,
            barThickness: 15,
            hoverBackgroundColor: 'rgb(24, 47, 149)',
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

   return <Bar data={data} options={{
      responsive: true,
      tooltips: {
         backgroundColor: 'white',
         bodyFontColor: 'black',
         titleFontColor: 'grey',
         bodySpacing: 6,
         borderColor: 'rgba(50, 50, 50)',
         titleFontStyle: 'bold',
         titleAlign: 'center',
         xPadding: 6,
         yPadding: 6,
         callbacks: {
            label: function (tooltipItem: any, data: any) {

               return "Visitors     " + Number(tooltipItem.yLabel);
            },
            title: function (tooltipItem: any, data: any) {
               return "12th December 2018";
            },

         }
      },
      maintainAspectRatio: false,
      legend: {
         display: false
      }
      , scales: {
         yAxes: [

            {
               id: 'right-y-axis',

               type: 'linear',
               position: 'right',
               ticks: {
                  stepSize: 3000,
                  callback: function (value: any, index: any, values: any) {
                     if (value === 0) {
                        return ''
                     }
                     return value / 1000 + 'k';
                  }

               },
               scaleLabel: { labelString: ["One", "Two"] },
               gridLines: {
                  drawBorder: false,
               },
            },

         ],

      }
   }} />
}

export default BarChart
