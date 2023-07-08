import React from 'react'
import {Box,Stack,Typography,Container} from '@mui/material'
import Header from './Header'

const Cardio = () => {
  return (
    <Box width='100vw'  sx={{backgroundColor:'whitesmoke'}}>
      <Header/>
      <Box width='100vw' height='100px' sx={{marginTop:'30px', fontFamily:'Ubuntu'}}>
        <Typography fontWeight={700} fontSize={53} p={1} textAlign='center'>
        Cardio Exercises
        </Typography>
      </Box>

    <Stack direction='row'>
      <Box sx={{margin:'35px'}} width='50vw' height='550px'>
       <img src='https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='550px' />
      </Box>
    </Stack>


        
    </Box>
  )
}

export default Cardio