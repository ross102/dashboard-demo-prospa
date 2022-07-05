import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SignUp, SignIn } from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
import "./styles/style.scss"



const AnimatedRoutes = () => {
  const location = useLocation();
  return (
   <AnimatePresence >
     <Routes location={location} key={location.key}>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  )
}


function App() {
  
  return (
    
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>


  );
}



export default App;
