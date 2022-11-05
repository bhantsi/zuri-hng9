import React from 'react';
import './index.css';
import './components/Header'
import Header from './components/Header';
import Profile from './components/Profile';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Header/>
      <Links
      url = "Twitter Link"
      />
      <Links
      url = "Zuri Team"
      />
      <Links
      url = "Zuri Books"
      />
      <Links
      url = "Python Books"
      />
      <Links
      url = "Background Check for Coders"
      />
    </div>
  );
}

export default App;
