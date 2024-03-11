import ChannelCard from '@/components/ChannelCard';
import VideoCard from '@/components/VideoCard';
import { Box, Stack } from '@mui/material';
import { FC } from 'react';

interface simpleInt {
  id: {
    videoId: string;
    channelId: string;
  };
  snippet: {
    title: string;
    thumbnails?: {
      high?: {
        url: string;
      };
    };
    channelId?: string;
    channelTitle?: string;
  };
  label: string;
  key: string;
}
interface VideosProps {
  videos: simpleInt[];
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

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
