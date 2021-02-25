import { faCalendar, faCog, faHome, faHotTub, faIndent, faLongArrowAltRight, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {

}

export const MenuSection: React.FC = () => {
   return (
      <div className="menu-section">
         <div className="menu-item">
            <FontAwesomeIcon className="menu-icon" icon={faThLarge} />
            Dashboard
         </div>
         <div className="menu-item">
            <FontAwesomeIcon className="menu-icon" icon={faCalendar} />
            Inbox
         </div>
         <div className="menu-item">
            <FontAwesomeIcon className="menu-icon" icon={faIndent} />
            Invoicing</div>
         <div className="menu-item">
            <FontAwesomeIcon className="menu-icon" icon={faHotTub} />
            Lab/Experiment
         </div>

         <div className="recently-viewed">
            <p className="subhead">Recently Viewed</p>
            <div className="recent-items">
               <span>
                  Overall Performance
               </span>
               <FontAwesomeIcon className="recent-icons" icon={faLongArrowAltRight} />
            </div>
            <div className="recent-items">
               <span>
                  Invoice #940
               </span>
               <FontAwesomeIcon className="recent-icons" icon={faLongArrowAltRight} />
            </div>
            <div className="recent-items">
               <span>
                  Customer Minerva Viewer
               </span>
               <FontAwesomeIcon className="recent-icons" icon={faLongArrowAltRight} />
            </div>
         </div>

         <div className="bottom-section">
            <p><span>Page: </span>Dribble.com/janlosert</p>
            <p className="subtext">57594 1811</p>
         </div>
      </div>
   )
}


const Sidebar: React.FC<Props> = () => {
   return (
      <div className="sidebar-section">
         <div className="top-nav-section">
            <FontAwesomeIcon icon={faHome} />
         </div>
         <div className="profile-section">
            <div className="image-container">

               <div className="change-icon">
                  <FontAwesomeIcon icon={faCog} />
               </div>
            </div>
            <div className="details-section">
               <p className="name">
                  Aditya Shrivastava <span></span>
               </p>
               <p className="subtext">Developer</p>
            </div>
         </div>

         <MenuSection />

      </div>
   )
}

export default Sidebar
