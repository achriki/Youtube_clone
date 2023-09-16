import {React, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography,Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './'
import {getData} from '../utils/fetchFromApi'

function VideoDetails() {
  const {id} = useParams();
  const [videoDetails, setVideoDetails] = useState("");
  const [videos, setVideos] = useState([]);


  useEffect(()=>{
    getData(`video?id=${id}`).then((data)=>{
      setVideoDetails(data.data);
      // console.log(data.data.channelId)
    });
    getData(`related?id=${id}`).then((data)=>{
      setVideos(data.data.data);
      console.log(data.data);
    })
  },[id]);

  return (
    <Box minHeight="95vh" style={{background: '#000'}}>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoDetails.id}`} className = "react-player" controls playing/>
            <Typography color ="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetails.title}
            </Typography>
            <Stack direction = "row" justifyContent="space-between" sx={{color: '#fff'}} py={1} px={2}>
              <Link to={`/channel/${videoDetails.channelId}`}>
                <Typography color ="#fff" variant="h6" fontWeight="bold" p={2}>
                  {videoDetails.channelTitle}
                  <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}}></CheckCircle>
                </Typography>
              </Link>
              <Typography color ="#fff" variant="h6" fontWeight="bold" p={2}>
                  {parseInt(videoDetails.viewCount).toLocaleString()} views
                </Typography>
            </Stack>
            <Typography color ="#fff" variant="h6" fontSize="15px" fontWeight="" py={5} px={3} maxWidth="70%" >
              {videoDetails.description}
            </Typography>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent = "center">
          <Videos videos = {videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails