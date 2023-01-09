import { Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import { CampusMarket } from './Components/CampusMarket';
import { CampusMeet } from './Components/CampusMeet';
import { CampusNotes } from './Components/CampusNotes';
import { CampusProfile } from './Components/CampusProfile';
import { Sidebar } from './Components/Sidebar';
import { Test } from './Test';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<CampusNotes/>}/>
        <Route exact path="/folder/:folderId" element={<CampusNotes/>} />
        <Route path='campusmarket' element={<CampusMarket/>}/>
        <Route path='campusmeet' element={<CampusMeet/>}/>
        <Route path='campusprofile' element={<CampusProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
