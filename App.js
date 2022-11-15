import React from 'react'
   
class Counter extends React.Component {
   
    render() {
        return(
            <div>
                <center><b><h1><Button text = "Hii! We are Friends"> </Button></h1></b></center>
            </div>
        )
    }
}
  
class Button extends React.Component{
    state = {
        textflag: false,
    }
       
    ToggleButton() {
        this.setState(
            {textflag : !this.state.textflag}
        );
    }
   
    render() {
        return(
            <div>
                <button onClick={() => this.ToggleButton()}>
                  { this.state.textflag === false ? "Jerry":"Tom" }
                </button><br></br>
                {!this.state.textflag && this.props.text}
            </div>
        )
    }
}
  
export default Counter;