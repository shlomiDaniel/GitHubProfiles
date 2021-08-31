import React from 'react';
 import './../Style/Form.css';
 import axios from 'axios';
class Form extends React.Component {
   // userNameInput = React.createRef();
   state = {
       userName:""
   };
  handleSubmit  =async(event)=>{
    event.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    //console.log(this.userNameInput.current.value);
    //console.log(this.state.userName);
    //console.log(res.data);
    this.props.onSubmit(res.data);
    this.setState({userName:""});
  }
    render(){
    return (
        <form onSubmit={this.handleSubmit}>
        <div style={{marginTop:"20px"}}>
            <input type="text" placeholder="enterUserName" value={this.state.userName} onChange ={event=>this.setState({userName:event.target.value})}></input> 
            <button style={{width:"150px",height:"50px",marginTop:"20px", width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0", 
    borderRadius: "4px",
    cursor: "pointer"}}>Add Card</button> 
        </div>  
        </form>     
       ) 
 }
}
export default Form;
