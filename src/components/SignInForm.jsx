import React from 'react';
import { Link } from 'react-router-dom';


const Form = () => {
   
    
    return (
        <div>
            <div>
                <p className="already">Don't have an account? <Link to="/"><span className="already-text"> Sign up</span></Link></p>
            </div>
        <div className="form-container">
           
        <div className="form-container-child">
           <form>
               
               <div>
                  <h2 className="form-heading">Welcome back to Prospa </h2>
                  <p className="form-text1">An account with powerful personalized 
                  <br /> tools all in one place</p>
               </div>
               <div >
                   <input className="form-container-input" type="text" placeholder="Email address">
                   
                   </input>
               </div>
               <div>
                   <input className="form-container-input" type="text" placeholder="Enter password">
                   
                   </input>
               </div>
               
               <div className="form-container-button-div">
               <Link to="/dashboard">
                   <button
                    className="form-container-button"> Next </button>
                    </Link>
               </div>
              
               
           </form>
        </div>
        </div>
        </div>
    )
}


export default Form