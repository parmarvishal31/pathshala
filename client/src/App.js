import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={< HomePage />}></Route >
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/policy' element={< Policy />}></Route>
        <Route exact path='*' element={< Pagenotfound />}></Route>
      </Routes>

    </>
  );
}

export default App;
