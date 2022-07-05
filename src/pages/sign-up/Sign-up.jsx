import React from 'react';
import { motion } from "framer-motion";
import { Sidebar, SignUpForm } from '../../components';


const SignUp = () => {
  return (
      <motion.div className='sign-up-page' 
      initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}}>
          <div>
          <Sidebar name="sidebar-signup" />
          </div>
          
           <div>
           <SignUpForm />
           </div>
      </motion.div>
  )
}

export default SignUp