import React, { Component } from "react";
import Buttons from "./Buttons";
import { Consumer } from "../../Context";

class ButtonsHolder extends Component {
    render(){
        return(
            <Consumer>
                {
                    value => {
                        const { buttonsKey } = value;
                        return(
                            <div className="button-panel">
                                {
                                    buttonsKey.map((button, index)=> {
                                        return (<div  key={index}>
                                            <Buttons buttonArr={button}></Buttons>
                                        </div>);
                                    })
                                }
                            </div>
                        );
                    }
                }
            </Consumer>
            
        );
    }
}

export default ButtonsHolder;