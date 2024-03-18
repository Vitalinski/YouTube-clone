import { DEMO} from '@/utils/Constants';
import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ChannelDetailProps } from '@/utils/Types';

const ChannelCard: FC<ChannelDetailProps> = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
        borderRadius: '20px',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            component='img'
            image={channelDetail?.snippet?.thumbnails?.high?.url|| DEMO.PROFILE_PICTURE}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              width: '180px',
              height: '180px',
              border: '2px solid #e3e3e3',
              marginTop,
            }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
