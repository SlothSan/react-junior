import React from 'react';
import './App.css';
import MenuData from '../src/Assets/Data/menu.json'
import MenuItem from './Components/MenuItem/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>An Amazing Menu!</h1>
      {MenuData.map((item) => {
        return (
          <MenuItem 
            key={item.id}
            name={item.name}
            price={item.price} 
            vegetarian={item.vegetarian}/>
        ) 
      })}
    </div>
  );
}

export default App;
