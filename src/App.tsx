import ChannelDetail from '@/components/ChannelDetail';
import Feed from '@/components/Feed';
import Navbar from '@/components/Navbar/index.tsx';
import SearchFeed from '@/components/SearchFeed.tsx';
import VideoDetail from '@/components/VideoDetail';
import { ROUTES } from './utils/Constants';
import { Box } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <Routes>
          <Route path={ROUTES.START} element={<Feed />} />
          <Route path={ROUTES.VIDEO} element={<VideoDetail />} />
          <Route path={ROUTES.CHANNEL} element={<ChannelDetail />} />
          <Route path={ROUTES.SEARCH_FEED} element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
