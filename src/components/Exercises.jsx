import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
  return (
<Box margin={7} sx={{backgroundColor: 'red'}} p={4
}>
  
  <Typography color='black' fontSize={45} fontWeight={300} fontFamily='fantasy'>

  Your PlayGround

  </Typography>

  <Typography fontWeight={600} fontSize={20}>
   
   <h3>
    Sweat , Smile... <br/> Repeat
   </h3>

  </Typography>

  <Typography>
    checkout our following bloodoozing Exercises...
  </Typography>

  
</Box>
  )
}

export default HeroBanner