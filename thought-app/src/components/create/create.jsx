/* eslint-disable react/prop-types */
import { useState } from 'react'


function Create({addThought,goHome}) {

    const [input,setInput]=useState('');

    const handlesubmit=()=>{
        if(input.trim() && input.length <=100){
            addThought(input.trim());
            setInput('');
            alert("thought created");
        }
        else{
            alert("maximum limit of thought is 100");
        }
    }
    
  return (
    <div className='createContainer'>
        <h2>Create a thought</h2>
        <textarea
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='write your thoughts'
        maxLength="100"
        />
        <br/>

        <button className='btn' onClick={handlesubmit}>Submit</button>
        <button className="btn" onClick={goHome}>back to Home</button>
  
    </div>
  )
}

export default Create