import React from 'react';
// import './App.css';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <MainComponent 
      firstName={"Jane"} 
      lastName={"Doe"} 
      age={45}
      hairColor="Black"
      />
      <MainComponent 
      firstName={"John"} 
      lastName={"Smith"} 
      age={88}
      hairColor="Brown"
      />
    </div>
  );
}

export default App;
