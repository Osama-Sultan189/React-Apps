import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React,{useState} from 'react'
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042723';
      document.body.style.color='white';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} className="my-2" aboutText="About Us"/>
      <Alert alert={alert}/>
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
