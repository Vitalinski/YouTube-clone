import ChannelDetail from '@/components/ChannelDetail';
import Feed from '@/components/Feed';
import Navbar from '@/components/Navbar/index.tsx';
import SearchFeed from '@/components/SearchFeed.tsx';
import VideoDetail from '@/components/VideoDetail';
import { Box } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
