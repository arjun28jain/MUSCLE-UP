import React from 'react'
import { Link } from 'react-router-dom';
import { Box,Stack, Typography, Button } from '@mui/material';


const Header = () => {
  return (
      <Box>
     <Stack direction='row' justifyContent='none' margin={0} p={2} gap={4} sx={{backgroundImage:'linear-gradient(180deg, grey,white )'}}>

      <img src='https://cdn-icons-png.flaticon.com/128/7159/7159869.png' width={120} height={100} margin={1}/>
     
      <Button sx={{width:'30px' ,height:'30px', color:'black' , border:'solid 2px black', fontWeight:'600', marginTop:'33px', boxShadow:'5px 5px 10px 2px rgba(0,0,0,0.8)'}}>
         Home
      </Button>
      
      <Button sx={{width:'100px' ,height:'30px', color:'black' , border:'solid 2px black', fontWeight:'600', marginTop:'33px', boxShadow:'5px 5px 10px 2px rgba(0,0,0,0.8)'}}>
         Exercises
      </Button>

      <Button sx={{width:'30px' ,height:'30px', color:'black' , border:'solid 2px black', fontWeight:'600', marginTop:'33px', boxShadow:'5px 5px 10px 2px rgba(0,0,0,0.8)'}}>
         Diets
      </Button>


     <Typography sx={{fontFamily:'Ubuntu', fontWeight:'1000' , fontSize:'40px'}} align='right' marginRight={1} marginLeft={65} marginTop={2}>

     1%  Stronger Everyday..
     </Typography>

     </Stack>
     </Box>

    
    
    
    




  )
}

export default Header;