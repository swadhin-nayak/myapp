import React,{useState} from 'react'

export default function TextForm(props) {
  
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    const convertToUpperCase = () =>{
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase", "success");
    }
    const convertToLowerCase = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase", "success");
    }
    const copyText = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success");
    }
    const clearText = () =>{
      let newText = '';
      setText(newText)
      props.showAlert("Text cleared", "danger");
    }
    const removeExtraSpace = ()=>{
      let newText = text.replace(/\s+/g, ' ').trim();
      setText(newText)
      props.showAlert("Extra spaces removed", "warning");
    }
    const handleOnChange = (event) =>{
      setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="textBox" rows="8" onChange={handleOnChange} 
            style={myStyle}></textarea>
        </div>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={convertToUpperCase}>Convert to Uppercase</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={convertToLowerCase}>Convert to Lowercase</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear All</button>
    </div>
    <div className="container my-2" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !=0).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
