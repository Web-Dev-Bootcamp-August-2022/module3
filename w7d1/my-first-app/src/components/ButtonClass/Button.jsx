import React from 'react';

class ButtonClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
   render(){
    return (
        <button className={`backgroundRed ${props.classNames}`}>
            <span>{props.content}</span>
        </button>
    )
   } 
}

export default ButtonClass;