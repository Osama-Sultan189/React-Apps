import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} className="my-2" aboutText="About Us"/>
        <div>
        <div className='container  my-3'>
          <TextForm mode={mode}heading="Enter Your text here to analyze : "/>
        </div>
        {/* <div className='container my-3'>
          <About/>
        </div> */}
          
        </div>
    </>
  );
}

export default App;
