import React, { Component } from "react";
import { Consumer } from "../../Context";

class OutputValue extends Component {
    render(){
        var styleCont = {
            color: '#000',
            textAlign: 'right',
            backgroundColor: '#e0ebeb',
            flex: '0 0 auto',
            fontWeight: '200',
            marginBottom: '15px',
            borderRadius: '10px'
        }
        return(
            <Consumer>
                {
                    value => {
                        const { displayValue } = value;
                        return (
                            <div className="compDisplay" style={styleCont}>
                                <div>
                                    {displayValue}
                                </div>
                            </div>
                        );
                    }
                }
            </Consumer>
            
        );
    }
}

export default OutputValue;