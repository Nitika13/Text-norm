import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(()=>{
            setAlert(null);
          },2000);
  }
  const toggleMode = () =>{
   if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#5F5B6B';
     showAlert("Dark mode has been enabled", "success");
     document.title = 'TextUtils-Dark Mode';
    //  setInterval(() => {
    //   document.title = 'Install TextUtils Now';
    //  },2000);
    //  setInterval(() => {
    //   document.title = 'app is amazing';
    //  },1500);
   }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode' ; 
   }
  }
    return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtils' mode = {mode} toggleMode ={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">*/}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/*</Route> 
           <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
