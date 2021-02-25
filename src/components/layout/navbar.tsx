import React from 'react';

interface Props {

}

const Navbar: React.FC<Props> = () => {
   return (
      <div className="navbar">
         <header>Dashboard</header>
         <select id="lan-select">
            <option value="eng">ENG
            </option>
            <option value="hin">Hindi</option>
         </select>
      </div>
   )
}

export default Navbar
