import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoCard from './InfoCard';

function App() {
  const props = {
    title:"First Info Card",
    text:"Description of First Info Card, Hooray!",
    image: {path:require("./images/kitten.jpg"), alt:"Kitten Picture"},
  }
  const card = InfoCard(props);
  return (
    <div className="container">
      {card}
    </div>
  );
}

export default App;
