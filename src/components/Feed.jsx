import React from 'react';
import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import SideBar from './SideBar';
import { Padding } from '@mui/icons-material';
import Videos from './Videos';
import {getData} from '../utils/fetchFromApi';


function Feed() {
    const [selectedCategory,setSelectedCategory] = useState('New'); 
    const [videos,setVideos] = useState([]); 
    useEffect(()=>{
        getData(`search?part=snippet&query=${selectedCategory}`)
            .then((data)=>{
                setVideos(data.data.data);
            })
    },[selectedCategory]);
  return (
    <Stack
        sx={{
            flexDirection : {
                sx: "column", md:"row" 
            },backgroundColor:'#000'
        }}
    >
        <Box 
            sx={{
                height:{sx:"auto", md:"92vh"},
                borderRight:'1px solid #3d3d3d',
                px: {sx:0, md: 2}
            }}
        >
            <SideBar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>

            <Typography className='copyright'
            variant='body2' sx={{mt:1.5, color: '#fff'}}
            >
                copyright 2023 Adam CHK
            </Typography>
        </Box>
        <Box p = {2} sx={{overflowY: 'auto', height : '90vh', flex: 2}}>
            <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
                {selectedCategory}<span style={{color:'#FC1503', paddingLeft:"4px"}}>Video</span>
            </Typography>
            <Videos videos = {videos} />
        </Box>
    </Stack>
  )
}

export default Feed