import React from 'react';
import { motion } from "framer-motion";
import { DashboardSidebar, Main } from '../../components';


const Dashboard = () => {
  return (
      <motion.div 
      className='dashboard-page' initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}}>
          <div>
           <DashboardSidebar name="sidebar-dashboard" /> 
          </div>
          
           <div>
           <Main />
           </div>
      </motion.div>
  )
}

export default Dashboard
