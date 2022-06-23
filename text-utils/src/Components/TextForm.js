import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myTextBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </div>
    )
}

TextForm.prototype={
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps={
    heading: "Enter Your text here to analyze : "
}
