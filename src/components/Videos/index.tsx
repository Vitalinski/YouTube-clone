import ChannelCard from '@/components/ChannelCard';
import VideoCard from '@/components/VideoCard';
import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import { VideosProps } from '@/utils/Types';


const Videos: FC<VideosProps> = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2}>
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
