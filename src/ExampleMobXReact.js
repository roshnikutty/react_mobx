import React, { Component } from 'react';
import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';
import Devtools from 'mobx-react-devtools';

class ExampleMobXReact extends Component {
  constructor() {
    super();

 //extendObservable is same as @observable from mobx
    extendObservable(this, {
      counter: 0,
    })
  }

  incrementCounter = () => {
    this.counter++;
  }

  decrementCounter = () => {
    this.counter--;
  }

  render() {
    return (
      <div>
        Counter: {this.counter}

        <button onClick={this.incrementCounter} type="button"> + </button>
        <button onClick={this.decrementCounter} type="button"> - </button>
      <Devtools />
      </div>
    );
  }
}

//observer makes sure that the ExampleMobXReact component reacts 
//when an observable value changes; same as @observer from mobx-react
export default observer(ExampleMobXReact);