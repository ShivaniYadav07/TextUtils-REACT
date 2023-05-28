import React, { useState } from 'react'

export default function TextForm(props) {

    const count = () =>{
        if (text.length>0){
            return text.trim().split(/[ ]+/).length;
        }
        else{
            return 0;
        }
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text transform into UpperCase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text transform into LowerCase", "success");
    }

    const handleReClick =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been Removed", "success");
    }

    const handleCopyClick= ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");
    }

    const handleClearClick =() =>{
        setText('');
        props.showAlert("Text has been Cleared", "success");
    }

    const handleSpeakClick =() => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("Speak", "success");

    }


    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{background: props.mode === 'dark'? '#13466e' : 'white', color: props.mode === 'dark'? 'white' : 'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Conver to UpperCase</button>
            <button disabled={text.length===0}className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Conver to LowerCase</button>
            <button disabled={text.length===0}className='btn btn-primary mx-2 my-2' onClick={handleReClick}>Remove Extra Space</button>
            <button disabled={text.length===0}className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0}className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0}className='btn btn-primary mx-2 my-2' onClick={handleSpeakClick} >Speak</button>
        </div>

        <div className='container my-5' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <p>{count()} Words and {text.replace(/\s/g, '').length} Characters</p>
            <p>{0.008 * text.split("").length} Minutes to Read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text : "Nothing to Preview "}</p>


        </div>
      </>
    )
}