import React from 'react';
import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import {getData} from '../utils/fetchFromApi';


function Feed() {
    const [videos,setVideos] = useState([]);
    const {searchTerms} = useParams(); 
    useEffect(()=>{
        getData(`search?part=snippet&query=${searchTerms}`)
            .then((data)=>{
                setVideos(data.data.data);
            })
    },[searchTerms]);
  return (
    <Box p = {2} sx={{overflowY: 'auto', height : '90vh', flex: 2, backgroundColor: '#000'}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
            Search result for : <span style={{color:'#FC1503', paddingLeft:"4px"}}>{searchTerms}</span> videos
        </Typography>
        <Videos videos = {videos} />
    </Box>
  )
}

export default Feed