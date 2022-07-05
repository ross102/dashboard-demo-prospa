import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SignUp, SignIn } from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    return (
     <AnimatePresence>
       <Routes location={location} key={location.key}>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    )
  }
  
  export default AnimatedRoutes