import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Stack} from '@mui/material';

import {Videos, ChannelCard, VideoCard} from './';
import { getData } from '../utils/fetchFromApi';

function ChannelDetails() {
    const {id} = useParams();
    const [channelDetail,setChannelDetail] = useState();
    const [channelVideos,setChannelVideos] = useState();
    // console.log(channelDetail);
    useEffect(()=>{
        getData(`channel?id=${id}`).then((data)=>{
            setChannelDetail(data.data.meta);
            setChannelVideos(data.data.data);

            // console.log(data.data.meta);
            data.data.data.map((item,index)=>{
                console.log(item);
            })
        })
        getData(`search?query=${id}&part=snippet&order=date`).then((data)=>{
            // console.log(data.data.data);
        })
    }, [id])
  return (
    <div>
        <Box minHeight="95vh" style={{background: '#000'}}>
            <Box >
                <div style={{
                    background : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 17%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} />
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexColumn: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop = "-93px" thumbnailNumber = "2" /> }
                </div>
                {channelVideos && <Videos videos={channelVideos}/>}
            </Box>
            <Box display = 'flex' p = "2">
            <Box sx ={{mr : {sm : '100px'}}}/>
            {/* <videos videos={channelVideos}/>  */}
                <Stack direction="row" flexWrap="wrap" justifyContent = "flex-start" gap={2}>
                    {channelVideos && channelVideos.map((item,index)=>(
                        <VideoCard video={item}/>
                    ))}
                </Stack>
            </Box>
        </Box>
        
    </div>
    
  )
}

export default ChannelDetails