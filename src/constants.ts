export const months: Array<string> = ["Januray", "Febuary", "March", "April", "May", "June", "July", "August", "Septembar", "Octobar", "Novembar", "Decembar"];

export const years:Array<number> = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]

export const barchartlabels = Array.from(Array(32).keys());

function randomNumber(min:number, max:number) {  
   min = Math.ceil(min); 
   max = Math.floor(max); 
   return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const barchartvalues = Array.from({length: 32}, (x, i) => randomNumber(200,9000))

export const mostVisitedPages = [
   {
      page_name:'/store',
      visitors: 4890,
      unique: 3985,
      bounce_rate:'81.56%',
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgba(77, 97, 185,0.6)',
      border_color: 'rgba(12, 40, 106)',
      hover_color: 'rgb(24, 47, 149)'
   },
   {
      page_name:'/store/symbols-styleguides',
      visitors: 3785,
      unique: 3182,
      bounce_rate:'62.56%',
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgba(12, 40, 106,0.4)',
      border_color: 'rgb(12, 40, 106)',
      hover_color: 'rgb(24, 47, 149)'
   },
   {
      page_name:'/store/dashboard-ui-kit',
      visitors: 2985,
      unique: 2115,
      bounce_rate:'58.76%',
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgba(12, 40, 106,0.4)',
      border_color: 'rgb(21, 0, 255)',
      hover_color: 'rgb(24, 47, 149)'
   },
   {
      page_name:'/store/webflow-cards.html',
      visitors: 2440,
      unique: 1789,
      bounce_rate:'39.59%',
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgba(12, 40, 106,0.4)',
      border_color: 'rgb(21, 0, 255)',
      hover_color: 'rgb(24, 47, 149)'
   }
]

export const gridData = [
   {
      heading:'realtime users',
      datapoint: '56',
      perchange: '+9.8%',
      per: true,
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgb(12, 43, 106,0.4)',
      border_color: 'rgb(12, 43, 106)',
      hover_color: 'rgb(24, 47, 149)'
   },
   {
      heading:'total visits',
      datapoint: '54,598',
      perchange: '-11.9%',
      per: false,
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgb(32, 132, 44,0.4)',
      border_color: 'rgb(32, 132, 44)',
      hover_color: 'rgb(24, 47, 149)'
   },
   {
      heading:'bounce rate',
      datapoint: '73.67%',
      perchange: '+12.2%',
      per: true,
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgb(77, 32, 132,0.4)',
      border_color: 'rgb(77, 32, 132)',
      hover_color: 'rgb(24, 47, 149)'
   },
   {
      heading:'visit duration',
      datapoint: '1m 4s',
      perchange: '+19.6%',
      per: true,
      data_values:  Array.from({length: 15}, (x, i) => randomNumber(400,900)),
      labels:  Array.from(Array(15).keys()),
      bg_color: 'rgb(231, 202, 14,0.4)',
      border_color: 'rgb(231, 202, 14)',
      hover_color: 'rgb(24, 47, 149)'
   },
]

export const mediaData = [
   {
      network: 'Instagram',
      visitors: '3550',
      per: '80'
   },
   {
      network: 'Facebook',
      visitors: '3550',
      per: '50'
   },
   {
      network: 'Twitter',
      visitors: '3550',
      per: '35'
   },
   {
      network: 'Linkedin',
      visitors: '3550',
      per: '5'
   },
]