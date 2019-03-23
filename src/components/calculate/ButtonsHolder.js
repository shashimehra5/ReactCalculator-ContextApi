import React, { Component } from "react";
import Buttons from "./Buttons";
import { Consumer } from "../../Context";

class ButtonsHolder extends Component {
    clickButton () {
        alert(1);
    }
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
                                            <Buttons buttonArr={button} onClick={this.clickButton.bind(this)}></Buttons>
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