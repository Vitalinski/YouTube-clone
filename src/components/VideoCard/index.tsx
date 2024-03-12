import { DEMO } from '@/utils/Constants';
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
      <Link to={videoId ? `/video/${videoId}` : DEMO.VIDEO_URL}>
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
          image={snippet?.thumbnails?.high?.url }
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : DEMO.VIDEO_URL}>
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0, 60) || DEMO.VIDEO_TITLE.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : DEMO.CHANNEL_URL}>
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle || DEMO.CHANNEL_TITLE}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
