
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/signup"
import About  from './pages/About';
import Service from './pages/Services.jsx'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Service" element={<Service/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
