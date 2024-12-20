import React from 'react';
import './App.css';
import AppPage from './pages';

function App() {
  return (
    <div className='flex' style={{width : "360px", height : "720px", overflow : "hidden"}}>
      <AppPage />
    </div>
  );
}

export default App;
