import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us"/>
      <div className='container'>
        <TextForm heading="Enter Your text here to analyze : "/>
      </div>
      
    </>
  );
}

export default App;
