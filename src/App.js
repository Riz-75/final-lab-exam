import './App.css';
import Header from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/rockets' element={<Rockets/>}></Route>
        <Route path='/missions' element={<Missions/>}></Route>
        <Route path='/myprofile' element={<MyProfile/>}></Route>
      </Routes>
    </>
  );
}

export default App;
