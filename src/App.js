import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/missions/Missions';
import DisplayRockets from './components/rockets/RocketPage';
import './App.css';
import ProfilePage from './components/profile/ProfilePage';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<DisplayRockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myprofile" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
