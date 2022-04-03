
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heder from './Components/Header/Heder';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Heder/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
