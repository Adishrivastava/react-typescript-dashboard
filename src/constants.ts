export const months: Array<string> = ["Januray", "Febuary", "March", "April", "May", "June", "July", "August", "Septembar", "Octobar", "Novembar", "Decembar"];

export const years:Array<number> = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]

export const barchartlabels = Array.from(Array(32).keys());

function randomNumber(min:number, max:number) {  
   min = Math.ceil(min); 
   max = Math.floor(max); 
   return Math.floor(Math.random() * (max - min + 1)) + min; 
}


export const barchartvalues = Array.from({length: 32}, (x, i) => randomNumber(200,9000))