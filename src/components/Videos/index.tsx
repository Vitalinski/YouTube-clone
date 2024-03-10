import { FC } from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from '@/components/VideoCard';
import ChannelCard from '@/components/ChannelCard';
interface simpleInt {
    id: {
        videoId:string,
        channelId:string,
    };
    label: string;
    key: string;
}
interface VideosProps{
    videos:simpleInt[];
}

const Videos: FC<VideosProps> = ({videos}) => {
  return (
  <Stack direction='row' flexWrap='wrap' 
  justifyContent='start' gap={2} >
{videos.map((item, idx)=>{
  return  <Box key={idx}>
        {item.id.videoId&& <VideoCard video={item}/>}
        {item.id.channelId&& <ChannelCard channelDetail={item}/>}

    </Box>
})}
  </Stack>
  );
};

export default Videos;