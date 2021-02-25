import React from 'react'
import { months, years } from '../../constants'
import BarChart from '../features/charts/bar-chart'
import Navbar from './navbar'

interface Props {

}

const Main: React.FC<Props> = () => {
   return (
      <div className="main">
         <Navbar />
         <div className="main-container">
            <div className="daily-visitors">
               <div className="top-heading">
                  <h2>Daily Visitors</h2>
                  <div className="chart-btns">
                     <select name="month" id="month">
                        {months.map((month: string) => (<option value={month} >{month}</option>))}
                     </select>
                     <select name="year" id="year">
                        {years.map((year: number) => (<option value={year} >{year}</option>))}
                     </select>
                  </div>
               </div>

               <div className="line-chart">
                  <BarChart />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Main
