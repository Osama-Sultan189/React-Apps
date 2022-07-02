import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const onclickUp=() => {
        setText(text.toUpperCase());
    }
    const onclickDown=() => {
        setText(text.toLowerCase());
    }
    const clearText=() => {
        setText(    "");
    }
    const onchange=(e) => {
        setText(e.target.value);
    }
    const handleCopy=() => {
        var t1=document.getElementById("textArea");
        t1.select();
        navigator.clipboard.writeText(t1.value);    
    }
    const handleSpaces=() => {
       let newText=text.split(/[ ]+/);
       setText(newText.join(" ")); 
    }
    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="myTextBox" className="form-label">{props.heading}</label>
                <textarea style={{backgroundColor:props.mode==='light'?'white':'GrayText', color:props.mode==='light'?'black':'white'} }className="form-control" value={text} onChange={onchange} id="textArea" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={onclickUp}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={onclickDown}>Convert to Lower Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={clearText}>Click here to Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Handle Extra Spaces</button>
        </div>
        <div className='container my-2'>
            <h3>Your Text Summary : </h3>
            <p>
                {text.length} characters {text.split(" ").length} words
            </p>
            <p>
                {text.split(" ").length*0.008} minutes to read
            </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.prototype={
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps={
    heading: "Enter Your text here to analyze : "
}
