import React, { useState } from 'react'
export default function TextForm(pro) {
    
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        pro.showAlert("Converted to uppercase","success");
    }
    const handleDownClick = ()=> {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        pro.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event)=>{
        console.log("On change");
       setText(event.target.value);
    }
    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
        pro.showAlert("Text has been cleared","success");
    }
    const handleCopyClick = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        pro.showAlert("Copied","success");
    }
    const handleSpaces = ()=>{
        let newText  =text.split(/[ ]+/);
        setText(newText.join(" "));
        pro.showAlert("Organized","success");
    }
    const [text, setText] = useState('');
    return (
        <>
    <div className="container" style = {{color: pro.mode==='dark'? 'white':'black'}}>
        <h1>{pro.heading}</h1>
     <div className="mb-3">
   {/* <label for="myBox" class="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: pro.mode==='dark'? '#333':'white',color: pro.mode==='dark'? 'white':'black'}}   id="myBox" rows="8"></textarea>
   </div>
  <div>
  <button className="btn1 btn-primary m-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn2 btn-primary m-1" onClick={handleDownClick}>Convert to Lowercase</button>
  <button className="btn3 btn-primary m-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn4 btn-primary m-1" onClick={handleCopyClick}>Copy Text</button>
    <button className="btn5 btn-primary m-1" onClick={handleSpaces}>Remove Spaces</button>
  </div>
  </div>
  <div className="container my-4" style={{color: pro.mode==='dark'? 'white':'black'}}>
<h2> Your Text Summary</h2>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p> {0.008 * text.split(" ").length} minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to preview it here"}</p>
  </div>
  </>
  )
}
