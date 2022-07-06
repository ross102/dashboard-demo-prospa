import React from 'react';
import good from "../assets/good.svg";
import { Link } from 'react-router-dom';


const Form = () => {
    // radio buttons visible states
    const [radioState1, setRadioState1] = React.useState(false);
    const [radioState2, setRadioState2] = React.useState(false);
    //  two step form visible state
    const [step2, setStep2] = React.useState(false);
    
    return (
        <div>
            <div>
                <p className="already"><span id="member">Already a member? </span><Link to="/sign-in"><span className="already-text"> Sign in</span></Link></p>
            </div>
        <div className="form-container">
           
        <div className="form-container-child">
           <form>
               {!step2 &&
              <div className="step-1">
               <div>
                  <h2 className="form-heading">Create your account </h2>
                  <p className="form-text1">A short descripion about account tuples</p>
               </div>
               <div >
                   <input className="form-container-input" type="text" placeholder="first name">
                   
                   </input>
               </div>
               <div>
                   <input className="form-container-input" type="text" placeholder="last name">
                   
                   </input>
               </div>
               <div className="container-phone">
                  <input className="form-container-dropdown-input" value="+234" type="text" placeholder="country" />
                     
               </div>
               <div className="container-phone1">
                  <input className="form-container-phone-input" type="text" placeholder="mobile number" /> 
               </div>
               <div>
                   
                   <input className="form-container-input" type="email" placeholder="email address">
                   
                   </input>
               </div>
              
                </div>
            }
            { step2 &&
               <div className='step-2'>
               <div>
              
                  <h2 className="form-heading">Open a new business account</h2>
                  <p className="form-text1">A short description comes here</p>
               </div>
               <div>
                    <input onClick={(e) => { 
                    setRadioState2(false)    
                  return  setRadioState1(!radioState1)
                }} 
                    className="radio" type="radio" name="biz">
                   </input>
                   <label>I have a registered business/charity with CAC</label>
                   
                   <div className={radioState1 ? 'radio-div' : 'no-radio-div'}>
                       As a registered business, you will get
                       <ul>
                           <li><img src={good} alt="radio" /> Account in your business name</li>
                           <li><img src={good} alt="radio"/> Send to and receive transfers from all Nigerian banks</li>
                           <li><img src={good} alt="radio"/>Tools for business management</li>
                       </ul>
                   </div>
               </div>  
               <div className="radio">
               <input onClick={(e) => {
                   setRadioState1(false)
                  return setRadioState2(!radioState2)}} type="radio" name="biz">
                   </input>
                   <label>My business is not yet registered. I will like to register.</label>
                   <div className={radioState2 ? 'radio-div' : 'no-radio-div'}>
                       Everything you need to start your business
                       <ul>
                           <li><img src={good} alt="radio"/>Registered business name with the CAC</li>
                           <li><img src={good} alt="radio"/>Tax Identification number</li>
                           <li><img src={good} alt="radio"/>Your account will be automatically opened on completion</li>
                       </ul>
                   </div>
               </div>
               <div>
               <input onClick={(e) => {
                   setRadioState1(false)
                  return setRadioState2(false)}} type="radio" name="biz">
                   </input>
                   <label>I'm a freelancer. I do business with my personal income</label>
               </div>    
               </div>
               }
               <div className="form-container-button-div">
                   <button
                    onClick={(e) => {
                        e.preventDefault();
                        if(!step2) {
                            setStep2(true);
                        } else {
                          return  window.location.href = "/sign-in"
                        }
                       
                    }}
                    className="form-container-button"> Next </button>
               </div>
              
               
           </form>
        </div>
        </div>
        </div>
    )
}


export default Form