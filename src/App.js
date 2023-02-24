// import logo from '../public/name.txt';
import React ,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [theme,setTheme]=useState('light');
  const [font,setFont]=useState('black');
  const changeTheme=()=>{
    if(theme==="light"){
      setTheme("dark");
      setFont("white");
    }
    else{
      setTheme("light");
      setFont("black");
    }
  }
  return (
    <Navbar tittle="ConvertTextApp" link1='home' apptheme={changeTheme} mode={theme} fontcolor={font}/>
  );
}

export default App;
