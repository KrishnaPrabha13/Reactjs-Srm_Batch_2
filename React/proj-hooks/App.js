import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent';
import React,{useState} from 'react';
import MyFunctionComponent from './components/MyFunctionComponent';


function App() {
  
  const [color,setColor] = useState("Red");
  const [toggle,setToggle] = useState(false);

  const handleColorChange = (e)=> {
    console.log("===================" + new Date());
    setColor(e.target.value);
  }

  const handleToggle = () =>{
    setToggle((p)=>{
      return !p;
    })
  }

  return (
    <div className="App">
      
      <input type="text" value={color} onChange={handleColorChange} />
       
      {!toggle && <MyFunctionComponent color={color}/> }
      {toggle && <MyClassComponent color={color}/> }
      {color} - {toggle}

      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default App;
