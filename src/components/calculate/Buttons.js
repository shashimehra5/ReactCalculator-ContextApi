import React, { Component } from "react";
import { Consumer} from '../../Context';

class Buttons extends Component {
    HandleKeyClick = (type, value, dispatch) => {
        dispatch({type:type, payload: value});
    }
    render(){
        const {buttonArr} = this.props;
        
        return(
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return(
                            <React.Fragment>
                                {
                                    buttonArr.map((button, index)=>{
                                        return(
                                            <div key={index} className={"button-key " + (buttonArr.length === 3 && index === 0? 'wide' : buttonArr.length - 1 === index ? 'orange':'')}>
                                                <button onClick={this.HandleKeyClick.bind(this, button.type, button.value, dispatch)}>{button.value}</button>
                                            </div>
                                        );
                                    })
                                }
                            </React.Fragment>
                        );
                    }
                }
            </Consumer>
        );
    }
}

export default Buttons;