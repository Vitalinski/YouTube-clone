import ChannelCard from '@/components/ChannelCard';
import Videos from '@/components/Videos';
import { fetchFromAPI } from '@/utils/FetchFromAPI';
import { Box } from '@mui/material';
import { FC } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChannelDetail: FC = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items),
    );
  }, [id]);
  if (!channelDetail) return 'Loading';
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(214,16,222,0.996625830564784) 0%, rgba(93,201,223,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard marginTop='-160px' channelDetail={channelDetail}></ChannelCard>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
