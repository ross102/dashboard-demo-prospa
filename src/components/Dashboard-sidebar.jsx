import React from 'react';
import {NavLink} from 'react-router-dom';
import BN from "../assets/BN.png";
import drop from "../assets/drop-icon.png";
import account from "../assets/accounts-icon.png";
import invoice from "../assets/invoice-icon.png";
import transfer from "../assets/transfer.png";
import mic from "../assets/mic.png";
import prospa from "../assets/prospa.svg";


const Sidebar = ({name}) => {
    return (
        <div className={name} >
          <div className='dashboard-container'>
          <div className='first-section'>
         <div className='dropdown-item'>
         <img src={BN} className="" alt=" dashboard name icon " />
         <div className='dropdown-heading'>
           <div><b>Clayvant inc</b></div>
           <div><p className='biz'>Business name 2</p> </div>
           <div><p className='biz'>Business name 3</p></div>
           <div><p className='biz-red'>Add a business</p></div>
         </div>
         </div>
          <div>
          <h2 className='dashboard-heading'>Clayvant Inc</h2>
          <p className='dashboard-heading-paragraph'>Manage account</p>
          </div>
          <div className='drop-item'>
          <img src={drop} className="" alt="dropdown icon" />
          <div className='dropdown-heading'>
           <div><b>Clayvant inc</b></div>
           <div><p className='biz'>Business name 2</p> </div>
           <div><p className='biz'>Business name 3</p></div>
           <div><p className='biz-red'>Add a business</p></div>
         </div>
          </div>
          </div>
            <div className='dashboard-list'>
             <ul>
                 <li>
                 <NavLink className="nav-link" id="diff"to="#">
                    <span><img src={account} className="list-icon" alt="account icon" /></span>
                      Accounts
                 </NavLink>
                 </li>
                 <li>
                 <NavLink className="nav-link" to="#">
                    <span><img src={transfer} className="list-icon" alt="transfer icon" /></span>
                      Transfer
                 </NavLink>
                 </li>
                 <li>
                 <NavLink className="nav-link" to="#">
                    <span><img src={invoice} className="list-icon" alt="invoice icon" /></span>
                      Invoice
                 </NavLink>
                 </li>
                 <li>
                 <NavLink className="nav-link" to="#">
                    <span><img src={mic} className="list-icon" alt="menu icon" /></span>
                      Management
                 </NavLink>
                 </li>
                 <li>
                 <NavLink className="nav-link" to="#">
                    <span><img src={mic} className="list-icon" alt="menu icon" /></span>
                      Security
                 </NavLink>
                 </li>
                 <li>
                 <NavLink className="nav-link" to="#">
                    <span><img src={mic} className="list-icon" alt="menu icon" /></span>
                      Support
                 </NavLink>
                 </li>
             </ul>
            </div>
            <div className="dashboard-logo">
            <img src={prospa}  alt="dashboard logo" />
            </div>
            </div>
        </div>

    )
}

export default Sidebar