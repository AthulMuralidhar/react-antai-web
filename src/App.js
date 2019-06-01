import React from 'react';
import temp_Logo from './temp_Logo.jpg';
import './App.css';

const Header = () => {
  return(
    <div>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 3</button>
  </div>
  )
}

const Footer = ()=> {
  return(
    <div>
      Handcrafted from 
      <a href="https://reactjs.org/docs/getting-started.html">react</a> by
      <a href="https://twitter.com/AthulMul">Athul</a> for 
      <a href="https://antai.nl/">Antai</a>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
