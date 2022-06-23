import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us"/>
      <div className='container'>
        <TextForm heading="Enter Your text here to analyze : "/>
        <button className='btn btn-primary'>Convert to UpperCase</button>
      </div>
      
    </>
  );
}

export default App;
