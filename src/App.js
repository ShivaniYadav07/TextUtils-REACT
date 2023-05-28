import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText("Disable Dark Mode");
      showAlert("Dark mode has been Enabled", "success");
      document.body.style.background = '#042743';
    }
    else {
      setMode('light');
      setBtnText('Enable Dark Mode');
      showAlert("Dark mode has been Disabled", "success");
      document.body.style.background = 'white';
    }
  }

  const showAlert = (message, type) => {
    if (message && type) {
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else {
      setAlert(null);
    }
  }
    const [mode, setMode] = useState('light')
    const [btnText, setBtnText] = useState('Enable Dark Mode')
    const [alert, setAlert] = useState(null)

    
   

    return (
      <>
             <Router>
        <Navbar
          title="TexteUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} abttext='About Me'/>} />
          </Routes>
        </div>
      </Router>
      </>
    );
}


export default App;
