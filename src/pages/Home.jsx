import React from 'react'
import Box from '@mui/material/Box';
import {Typography } from '@mui/material';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner'
import Cardio from '../components/Cardio';
import Muscle from '../components/Muscle';
import Calesthenics from '../components/Calesthenics';


const Home = () => {
  return (
  
    <Box sx={{backgroundColor:'white'}}>
    <Header/> 
    <HeroBanner/>
    
    </Box>

   )
}

export default Home