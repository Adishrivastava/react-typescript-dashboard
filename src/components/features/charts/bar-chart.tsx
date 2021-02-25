import React from 'react'
import { Bar } from 'react-chartjs-2'
import { barchartlabels, barchartvalues } from '../../../constants'

interface Props {

}

console.log(barchartvalues)
console.log(barchartlabels)

const BarChart: React.FC<Props> = () => {

   const data = {
      labels: barchartlabels,
      datasets: [
         {
            label: 'ABCDE',
            data: barchartvalues,
            backgroundColor: 'rgba(255,206,86)',
            barPercentage: 1,
            barThickness: 15,
         }
      ]
   }

   return <Bar data={data} options={{
      responsive: true,
      maintainAspectRatio: false
      , scales: {
         yAxes: [{
            ticks: {
               stepSize: 3000
            },
         }]
      }
   }} />
}

export default BarChart
