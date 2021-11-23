// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.tsx';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';

function App() {
  const [userContext, setUserContext] = useState({isLoggedIn: false})
  // useEffect(() => setTimeout(() => setUserContext({isLoggedIn : true, user:{ id:1, firstname : "John", lastname: "Doe", picture: "johnDoe.jpg"}}), 3000), [])
  return (
    <div className="App h-screen w-screen bg-blue-background relative">
      <UserContext.Provider value={userContext}>
      <div className="container w-11/12 px-4 mx-auto h-screen tewt-white relative z-10">
        <Router>
            <NavBar/>
          <Routes>
            <Route path="/hero" element={<Landing/>}/>
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
