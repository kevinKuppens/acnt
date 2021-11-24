// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.tsx';
import NavBar from './components/NavBar';
import { useState} from 'react';
import UserContext from './contexts/UserContext';
import Register from './components/Register';
import Home from './components/Home';
import Success from './components/Success';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState()
  const [ token, setToken] =  useState();


  return (
    <div className="App h-screen w-screen bg-blue-background relative">
      <UserContext.Provider value={{ user, setUser}}>
      <div className="container w-11/12 px-4 mx-auto h-screen tewt-white relative z-10 text-white">
        <Router>
            <NavBar token={token}/>
          <Routes>
            <Route path="/" element={<Home token={token}/>} />
            <Route path="/hero" element={<Landing/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/login" element={<Login setToken={(value)=> {setToken(value)}}/>}/>
          </Routes>
        </Router>
      </div>
      </UserContext.Provider>
      <div className="h-screen w-screen absolute left-0 top-0 z-0 overflow-hidden">
        <div className="bg-blue-900 w-screen h-1/2 rounded rounded-tl-fully rounded-bl-fully filter  blur-3xl absolute -right-20 -top-20 opacity-40"></div>
        <div className="bg-purple-900 w-screen h-1/3 rounded rounded-tl-2 rounded-tr-fully filter blur-3xl absolute -left-10 -bottom-10 opacity-50"></div>
      </div>
    </div>
    
  );
}

export default App;
