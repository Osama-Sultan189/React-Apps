import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
function App() {
  /*const [myStyle, setMyStyle] = useState({
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
  }*/

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} className="my-2" aboutText="About Us"/>
        <div>
        <div className='container  my-3'>
          <TextForm heading="Enter Your text here to analyze : "/>
        </div>
        <div className='container my-3'>
          <About/>
        </div>
          
        </div>
    </>
  );
}

export default App;
