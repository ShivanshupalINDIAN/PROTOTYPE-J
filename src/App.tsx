import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './components/landing/LandingPage';
import { GovernancePage } from './pages/GovernancePage';
import { ShortsPage } from './pages/ShortsPage';
import { ProtestPage } from './pages/ProtestPage';
import { ProfilePage } from './pages/ProfilePage';
import { ChatPage } from './pages/ChatPage';
import { TrendingPage } from './pages/TrendingPage';
import { FilterPage } from './pages/FilterPage';
import {Login} from './components/AuthFlow/Login';
import { Register } from './components/AuthFlow/Register';
import { AadhaarVerification } from './components/AuthFlow/AadhaarVerification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Layout />}>
        
          <Route index element={<GovernancePage />} />
          <Route path="shorts" element={<ShortsPage />} />
          <Route path="protest" element={<ProtestPage />} />
          <Route path="profile" element={<ProfilePage />} />
        <Route path="chat/*" element={<ChatPage />} />
          <Route path="trending" element={<TrendingPage />} />
          <Route path="filter" element={<FilterPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verification' element={<AadhaarVerification/>}/>

      </Routes>
    </Router>
  );
}
export default App;
