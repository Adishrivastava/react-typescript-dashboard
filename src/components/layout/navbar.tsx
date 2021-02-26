import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
   setMenuShow: any,
   width: number
}

const Navbar: React.FC<Props> = ({ width, setMenuShow }) => {
   return (
      <div className="navbar">
         <header>
            {width < 900 && (<FontAwesomeIcon icon={faBars} className="menuIcons" style={{ marginRight: '20px' }} onClick={(e) => setMenuShow((val: boolean) => !val)} />)}
            Dashboard</header>
         <select id="lan-select">
            <option value="eng">ENG
            </option>
            <option value="hin">Hindi</option>
         </select>
      </div>
   )
}

export default Navbar
