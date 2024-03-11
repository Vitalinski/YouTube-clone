import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from '@/utils/Constants';
import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  video: {
    id: {
      videoId: string;
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
  };
}

const VideoCard: FC<VideoCardProps> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { xs: '358px', md: '320px' }, borderRadius: 0, boxShadow: 'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component='img'
          alt={snippet?.title}
          sx={{
            width: {
              sm: '358px',
              md: '320px',
            },
            height: 180,
          }}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
