import React from 'react'
import {Stack, Box} from '@mui/material';
import {VideoCard, ChannelCard} from './';

const Videos = ({videos, direction}) => {
  if(videos?.length == 0) return 'Loading...';
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent = "center" gap={3}>
        {videos.map((item,index)=>(
            <Box key={index}>
                {item.type === 'video' && <VideoCard video={item} />}
                {item.type === 'channel' && <ChannelCard channelDetail={item} marginTop = "0px"/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos