import React ,{useState} from 'react';
import '../App.css';

export default function Form(props) {
  const [text,setText]=useState("Enter the text to change")

  const textModified=(event)=>{
    console.log("text area selected");
    setText(event.target.value);
  
  };
  
  const UpdateText=()=>{
    let new_text=text.toUpperCase();
    setText(new_text);
  };
  const UpdateToLower=()=>{
    let new_text=text.toLowerCase();
    setText(new_text);
  };
  const num=text.split(" ").length;
  const num2=text.length;
  return (
    <>
    <div className='form'>
      <h1>{props.title}</h1>
        <textarea rows='10' cols='40' onChange={textModified} value={text} />

         <br/>
        <button className='btn btn-primary' onClick={UpdateText}>ToUpperCase</button> &nbsp;
        <button className='btn btn-primary' onClick={UpdateToLower}>ToLowerCase</button>
   
    <h6>{num} words</h6>
    <h6>{num2} characters</h6>
    </div>
    </>
  );
}
