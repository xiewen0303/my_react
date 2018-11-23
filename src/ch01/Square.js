import React, { Component } from 'react';

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {value:null};
    }

    render(){
        return(
        <buttom className="square" 
                // onClick={()=>{alert('click')}} >
                onClick={ ()=>this.setState({value:'X'}) }
                >
                {this.state.value}        
        </buttom>
        );  
    }
}

export default Square;