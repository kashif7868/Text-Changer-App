import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('Enter Text here');
    const [alignment, setAlignment] = useState('left'); 
    const [textColor, setTextColor] = useState('black'); 

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleAlignmentChange = (alignment) => {
        console.log("Alignment was changed");
        setAlignment(alignment);
    }

    const handleTextColorChange = (color) => {
        console.log("Text color was changed");
        setTextColor(color);
    }

    return (
        <>
            <div>
                <h1>{props.textWrite}</h1>
                <div className="mb-3">
                    <textarea
                        className='form-control'
                        value={text}
                        onChange={handleOnChange}
                        id='mybox'
                        rows='8'
                        style={{ textAlign: alignment, color: textColor }} 
                    ></textarea>
                </div>
                <div className="btn-group">
                    <button className="btn btn-primary mx-3" onClick={handleUpClick}>Change to UpperCase</button>
                    <button className="btn btn-success mx-3" onClick={handleLowClick}>Change to Lowercase</button>
                    <button className="btn btn-info mx-3" onClick={() => handleAlignmentChange('left')}>Align Left</button>
                    <button className="btn btn-info mx-3" onClick={() => handleAlignmentChange('center')}>Align Center</button>
                    <button className="btn btn-info mx-3" onClick={() => handleAlignmentChange('right')}>Align Right</button>
                    <button className="btn btn-warning mx-3" onClick={() => handleTextColorChange('black')}>Black Text</button>
                    <button className="btn btn-warning mx-3" onClick={() => handleTextColorChange('blue')}>Blue Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
                <p>{0.08 * text.split(/\s+/).filter(word => word !== '').length} Minutes Read</p>
                <h2>Preview</h2>
                <p style={{ textAlign: alignment, color: textColor }}>{text}</p>
            </div>
        </>
    )
}

export default TextForm;
