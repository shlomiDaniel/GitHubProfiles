import React from 'react';
 import './../Style/Form.css';
class Form extends React.Component {
 render(){
    return (
        <div style={{marginTop:"20px"}}>
            <input type="text" placeholder="enterUserName"></input> 
            <button style={{width:"150px",height:"50px",marginTop:"20px", width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0", 
    borderRadius: "4px",
    cursor: "pointer"}}>Add Card</button> 
        </div>       
       ) 
 }
}
export default Form;
