import './App.css';
let name="Osama";
function App() {
  return (
    <>
    <div className='blank'>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <h1>
        Code With {name}
      </h1>
      <p>
        Some text
      </p>
    </div>
    </>
  );
}

export default App;
