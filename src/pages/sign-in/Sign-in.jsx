import React from 'react';
import { motion } from "framer-motion";
import { Sidebar, SignInForm } from '../../components';


const SignIn = () => {
  return (
      <motion.div 
      className='sign-in-page' initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}}>
          <div>
          <Sidebar name="sidebar-signin" />
          </div>
          
           <div>
           <SignInForm />
           </div>
      </motion.div>
  )
}

export default SignIn
