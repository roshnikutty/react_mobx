import React, { Component } from 'react'

//counter without MobX

class ExampleMobXReact extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    incrementCounter() {
        this.setState((state) => {
            return { counter: state.counter + 1 }
        })
    }
    decrementCounter() {
        this.setState((state) => {
            return state.counter > 0 ? { counter: state.counter - 1 } : { counter: 0}
        })
    }

    render() {
        return <React.Fragment>
            <p>Counter: {this.state.counter} </p>
            <button onClick={this.incrementCounter} label="+"> + </button>
            <button onClick={this.decrementCounter} label="-"> - </button>
        </React.Fragment>

    }
}

export default ExampleMobXReact;