import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import { Link } from 'react-router-dom'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const HeroBanner = () => {
  return (
     <Box sx={{backgroundImage:'url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}} height='100vh' width='100vw'>
       
       <Stack direction='row' p={2} gap={61}>
       <Typography p={2} sx={{fontFamily:'Ubuntu', fontWeight:'900' , fontSize:'55px', color:'whitesmoke'}}>
        
      Musculus
      <hr color='red'/>

       </Typography>
       
       <Stack direction='row' gap={2}>
       <Card sx={{ maxWidth: 225, maxHeight: 380, marginTop: '110px', p:'1', borderRadius:'20px'}} >
      <CardMedia sx={{ height: 180 }} image="https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?b=1&s=170667a&w=0&k=20&c=qSje_x0VFmlmQhQMOMBl3ck2gP0OWm-AJNlOMm-nDNg=" title="Cardio"/>
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" sx={{textDecoration:'none'}}>
         <Link to='/Cardio'> Cardio </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone. 
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{ maxWidth: 235, maxHeight: 380, marginTop: '60px',borderRadius:'20px'}}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzY2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" title="Cardio"/>
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" >
        <Link to='/Muscle'> Muscle </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone. 
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 235, maxHeight: 380, marginTop: '10px',borderRadius:'20px'}}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Cardio"/>
      <CardContent >
        <Typography gutterBottom variant="h4" component="div">
          Calesthenics
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone. 
        </Typography>
      </CardContent>
      </Card>

     
    </Stack>
    </Stack>
     </Box>
  )
}

export default HeroBanner