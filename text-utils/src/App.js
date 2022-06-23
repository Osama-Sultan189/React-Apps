import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
function App() {
  const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor: 'white',
    btnText : "Enable Dark Mode",
  });

  const setStyle = () =>{
    if(myStyle.color === 'black'){
      setMyStyle({
        color:'white',
        backgroundColor: 'black',
        btnText : "Enable Light Mode",
      });
    }
    else{
      setMyStyle({
        color:'black',
        backgroundColor: 'white',
        btnText : "Enable Dark Mode",
      });
    }
  }
  return (
    <>
      <Navbar title="Text Utils" className="my-2" aboutText="About Us"/>
        <div  style={myStyle}>
        <div className='container '>
          <TextForm heading="Enter Your text here to analyze : "/>
        </div>
        <div className='container my-3'>
          <About/>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={setStyle}>{myStyle.btnText}</button>
        </div>
    </>
  );
}

export default App;
