import React from 'react'
import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/const';
function VideoCard({video}) {
    // console.log(video.channelThumbnail[0].url)
  return (
    <Card sx={{width: {md: '320px', xs: '100%'}, boxShadow : 'none', border : 'none'}}>
        <Link to={video?.videoId ? `/video/${video?.videoId}` : demoVideoUrl}>
            <CardMedia image={video?.thumbnail[1]?.url} alt={video.title} sx={{width:358, height: 180}} />
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={video?.videoId ? `/video/${video?.videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {video.title.slice(0,60)|| demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={video?.channelId ? `/channel/${video?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray ">
                    {video.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}></CheckCircle>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard