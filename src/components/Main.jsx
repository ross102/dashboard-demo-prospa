import React from 'react';
import dp from "../assets/Oval-dp.png";
import bell from "../assets/alert.png";
import current from "../assets/current-account.png";
import savings from "../assets/savings-account.png";
import june from "../assets/june-summary.png";
import cashFlow from "../assets/cashout-flow.png";
import transaction from "../assets/recent-transaction.png";




function Main() {
  return (
    <div className='container'>
        <div className='section-1'>
          <div className='heading'>
          <h2>Dashboard</h2>
          </div>
          <div className='dp-imgs'>
          <img src={bell} className="" alt="notification" />
          <img src={dp} className="" alt="dp icon" />
          </div>
        </div>
        
        <div className='main-container'>
        <div className='section-2'>
            <div className='sub-headings'>
                <h2>Welcome back, Kathy</h2>
                <p>Here is what has been happening in he last <span>7 days</span></p>
            </div>
            <div className='section-2-button'>
                <button>Add a sub account</button>
            </div>
            </div>
            <div className='section-3'>
                <div className='current-account-item'>
                  <img src={current} className="" alt="current account icon" />
                </div>
                <div className='savings-account-item'>
                <img src={savings} className="" alt="savings account icon" />
                </div>
            </div>
            <div className='section-4'>
            <div className='june-item'>
            <img src={june} className="" alt="june icon" />
                     </div>
                 <div className='cashflow-item'>
                 <img src={cashFlow} className="" alt="cashflow icon" />
                </div>
            </div>
            <div className='section-5'>
             <div className='transaction'>
             <img src={transaction} className="" alt="recent icon" />
               </div> 
            </div>
        </div>
    </div>
  )
}

export default Main