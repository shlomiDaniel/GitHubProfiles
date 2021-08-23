import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Components/Card';
import CardList from './Components/CardList';

class App extends React.Component {
 render(){
  return (
   <div>
    <Card />
    <CardList />
    
   </div>
    );
 }
}

export default App;
