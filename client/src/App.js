import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import HomePage from 'scenes/homepage';
import ProfilePage from 'scenes/profilePage';
import Login from 'scenes/login';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/profile/:userId' element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
