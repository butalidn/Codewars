/*
Write a react component that will display the current value of our counter.

    The counter should start at 0.
    There should be a button to add 1.
    There should also be a button to subtract 1.

We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

In your render you should return:

    The counter display element with an id of 'counter', containing the counter value.
    An increment button with an id of 'increment'
    A decrement button with an id of 'decrement'

Helpful docs on Events: https://reactjs.org/docs/handling-events.html
*/

const React = require('react');

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

  }
  handleIncrement() {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  }
   
  handleDecrement() {
    this.setState(prevState => ({counter: prevState.counter - 1}));
  }

  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button type="button" onClick={this.handleDecrement} id="decrement">
            Decrement
          </button>
          <button type="button" onClick={this.handleIncrement} id="increment">
            Increment
          </button>
      </div>
    )
  }
}

