import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
// import { NavigateBeforeRounded } from '@mui/icons-material';
import { Box } from '@mui/system';
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed} from './components';

const  App = () => {
  return(
    <BrowserRouter>
      <Box sx={{backgroundColor: "#000 "}}>
        <Navbar/>

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerms" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
