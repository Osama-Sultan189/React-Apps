import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042723";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Utils"
          mode={mode}
          toggleMode={toggleMode}
          className="my-2"
          aboutText="About Us"
        />
        <Alert alert={alert} />
        <div className="container  my-3">
          <Routes>
            <Route path="/" element={<TextForm
                  mode={mode}
                  heading="Enter Your text here to analyze : "
                />}>
                  </Route>
              <Route index element={<TextForm
                  mode={mode}
                  heading="Enter Your text here to analyze : "
                />} />
              <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
