import { faChartLine, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { gridData, mediaData, months, mostVisitedPages, years } from '../../constants'
import BarChart from '../features/charts/bar-chart'
import LineChart from '../features/charts/line-chart'
import Navbar from './navbar'

interface Props {
   width: number,
   setMenuShow: any
}

const Main: React.FC<Props> = ({ width, setMenuShow }) => {
   return (
      <div className="main">

         <Navbar width={width} setMenuShow={setMenuShow} />

         <div className="main-container">
            <div className="daily-visitors">
               <div className="top-heading">
                  <h3>Daily Visitors</h3>
                  <div className="chart-btns">
                     <select name="month" id="month">
                        {months.map((month: string) => (<option value={month} key={month} >{month}</option>))}
                     </select>
                     <select name="year" id="year">
                        {years.map((year: number) => (<option value={year} key={year} >{year}</option>))}
                     </select>
                  </div>
               </div>

               <div className="bar-chart">
                  <BarChart width={width} />
               </div>

            </div>

            <div className="middle-grid">
               {gridData.map((data: any) => (
                  <div className="grid-items" key={data.heading}>
                     <p className="heading-grid">{data.heading}</p>

                     <h1>{data.datapoint}</h1>

                     <p className="per-change" style={!data.per ? { color: 'red' } : {}} >{data.perchange} <FontAwesomeIcon style={!data.per ? { color: 'red', transform: 'rotate(180deg)' } : {}} icon={faChartLine} />
                     </p>

                     <div className="line-charts-show">
                        <LineChart hover_color={data.hover_color} border_color={data.border_color} bg_color={data.bg_color} data_values={data.data_values} labels={data.labels} />
                     </div>
                  </div>
               ))}
            </div>

            <div className="tables">
               <div className="most-visited-pages">
                  <h3>Most Visited Pages</h3>
                  <table>
                     <thead>
                        <tr>
                           <th>page name</th>
                           <th>visitors</th>
                           <th>unique page visits</th>
                           <th>bounce rate</th>
                        </tr>
                     </thead>
                     <tbody>
                        {mostVisitedPages.map((obj: any) => (
                           <tr key={obj.unique}>
                              <td>{obj.page_name} <FontAwesomeIcon className="share-icon" icon={faShare} /> </td>
                              <td>{obj.visitors}</td>
                              <td>{obj.unique}</td>
                              <td>{obj.bounce_rate}</td>
                              <td style={{ padding: '0px' }}>
                                 <div className="line-charts-table">
                                    <LineChart hover_color={obj.hover_color} border_color={obj.border_color} bg_color={obj.bg_color} data_values={obj.data_values} labels={obj.labels} />
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               <div className="social-media-traffic">
                  <h3>Social Media Traffic</h3>
                  <table>
                     <thead>
                        <tr>
                           <th>network</th>
                           <th>visitors</th>
                        </tr>
                     </thead>

                     <tbody>
                        {mediaData.map((media: any) => (
                           <tr key={media.network}>
                              <td>{media.network}</td>
                              <td>{media.visitors}</td>
                              <td>
                                 <div className="process-line">
                                    <div style={{ width: media.per + '%' }} className="checked"></div>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>

                  </table>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Main
