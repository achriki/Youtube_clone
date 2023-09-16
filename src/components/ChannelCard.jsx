import React from 'react'
import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia,Box} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl,demoProfilePicture } from '../utils/const';

function ChannelCard({channelDetail,marginTop,thumbnailNumber }) {
  return (
    <Box sx={{width: {md: '320px', xs: '356px'}, boxShadow : 'none', borderRadius : '20px',height: '326px', marginTop : marginTop}}>
        <Link to={channelDetail?.channelId ? `/channel/${channelDetail?.channelId}` : demoVideoUrl}>
            <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent: 'center', textAlign : 'center',alignItems: 'center' ,color: '#FFF'}}>
                <CardMedia image={channelDetail?.thumbnail[thumbnailNumber || 1]?.url} alt={channelDetail.title} sx={{width:180, height: 180, borderRadius : '50%',mb:2
                ,border: '1px solid #e3e3e3'}} />
                
                <Typography variant="h6" fontWeight="bold" color="gray ">
                    {channelDetail.title || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}}></CheckCircle>
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="gray ">
                    {channelDetail.subscriberCount || demoChannelTitle} 
                </Typography>

            </CardContent>
        </Link> 
    </Box>
  )
}

export default ChannelCard