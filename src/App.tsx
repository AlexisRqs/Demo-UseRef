import React from 'react';
import './App.css';
import MainRouter from "./routers";
import UserContextProvider from "./contexts/UserContextProvider";


function App() {
  return <UserContextProvider>
      <MainRouter/>
  </UserContextProvider>
}

export default App;
