import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
    
    onButtonPressAdd = () => {
        this.setState(state => ({
          number: state.number + 1
        }));
    }
    
    onButtonPressSubtract = () => {
        this.setState(state => ({
          number: state.number - 1
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonPressAdd}>
                Add +
                </button>
                <button onClick={this.onButtonPressSubtract}>
                Subtract -
                </button>
                <p>
                    number: {this.state.number}
                </p>
            </div>
        )
    }
}

export default Counter;