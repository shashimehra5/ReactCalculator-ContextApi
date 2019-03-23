import React, {Component} from "react";
import Operation from "./components/calculate/Operation";

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'AC': 
            return {
                displayValue: 0,
                oldValue: 0,
                countNumeric: 0,
                action: ''
            };
        case 'addSubSign':
            return {
                displayValue: (+state.displayValue) * -1
            };
        case 'numeric' : 
            state.countNumeric++
            return {
                displayValue: (state.displayValue === 0 || state.oldValue) && state.countNumeric === 1 ? action.payload : state.displayValue+action.payload,
                countNumeric: state.countNumeric
            };
        case 'add': 
            return {
                oldValue: state.displayValue,
                countNumeric: 0,
                action: '+'
            };
        case 'decimal': 
            var displayValue = ''+state.displayValue;
            if(displayValue.indexOf('.') === -1) {
                return {
                    displayValue: state.displayValue+'.'
                }
            }
            break;
        case 'sub': 
            return {
                oldValue: state.displayValue,
                countNumeric: 0,
                action: '-'
            };
        case 'multiply': 
            return {
                oldValue: state.displayValue,
                countNumeric: 0,
                action: 'x'
        };
        case 'divide': 
            return {
                oldValue: state.displayValue,
                countNumeric: 0,
                action: '/'
        };
        case 'percentile' : 
                return {
                    displayValue: (state.displayValue / 100)
                };
        case 'equals': 
            if(state.action) {
                return {
                    displayValue: Operation.calculate(state.oldValue, state.displayValue, state.action),
                    oldValue: '',
                    countNumeric: 0,
                    action: '',
                };
            }
            
    }
}

export class Provider extends Component {
    state = {
        displayValue: 0,
        oldValue: '',
        action: '',
        countNumeric: 0,
        buttonsKey: [[
            {
                id: 1,
                value: 'AC',
                type: 'AC'
            },{
                id: 2,
                value: '+/-',
                type: 'addSubSign'
            },{
                id: 3,
                value: '%',
                type: 'percentile'
            },{
                id: 4,
                value: '÷',
                type: 'divide'
            }
        ],[{
            id: 1,
            value: '7',
            type: 'numeric'
        },{
            id: 2,
            value: '8',
            type: 'numeric'
        },{
            id: 3,
            value: '9',
            type: 'numeric'
        },{
            id: 4,
            value: 'x',
            type: 'multiply'
        }],[{
            id: 1,
            value: '4',
            type: 'numeric'
        },{
            id: 2,
            value: '5',
            type: 'numeric'
        },{
            id: 3,
            value: '6',
            type: 'numeric'
        },{
            id: 4,
            value: '-',
            type: 'sub'
        }],[{
            id: 1,
            value: '1',
            type: 'numeric'
        },{
            id: 2,
            value: '2',
            type: 'numeric'
        },{
            id: 3,
            value: '3',
            type: 'numeric'
        },{
            id: 4,
            value: '+',
            type: 'add'
        }],[{
            id: 1,
            value: '0',
            type: 'numeric'
        },{
            id: 2,
            value: '.',
            type: 'decimal'
        },{
            id: 3,
            value: '=',
            type: 'equals'
        }]],
        dispatch: action => {
            this.setState(state => reducer(state,action));
        }
    }
    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;

