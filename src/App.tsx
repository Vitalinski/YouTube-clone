import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "@/components/Feed";
import VideoDetail from "@/components/VideoDetail";
import ChannelDetail from "@/components/ChannelDetail";
import SearchFeed from "@/components/SearchFeed.tsx";
import Navbar from "@/components/Navbar/index.tsx";
const App: FC = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar/>
        <Routes>
          <Route path ="/"  element ={<Feed/>} />
          <Route path ="/video/:id"  element ={<VideoDetail/>} />
          <Route path ="/channel/:id"  element ={<ChannelDetail/>} />
          <Route path ="/search/:searchTerm"  element ={<SearchFeed/>} />

        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;