import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");
    const onclickUp=() => {
        setText(text.toUpperCase());
    }
    const onclickLow=() => {
        setText(text.toLowerCase());
    }
    const onchange=(e) => {
        setText(e.target.value);
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myTextBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={onchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={onclickUp}>Convert to UpperCase</button>
           
        </div>
    )
}

TextForm.prototype={
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps={
    heading: "Enter Your text here to analyze : "
}
