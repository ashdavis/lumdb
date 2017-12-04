import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Sample Movie Data
const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'A space movie'
  },
  {
    id: 2,
    title: 'Spider-Man'
  },
  {
    id: 3,
    title: 'Blade Runner'
  },
  {
    id: 4,
    title: 'Alien'
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    // Do something with props
    console.log('constructor');
  }

  // Fired before the component renders
  // Changes to state here will not trigger another render as the first render hasn't happened yet
  componentWillMount() {
    // Access to this.props is available
    console.log('will mount');
  }

  // Fired after component is finished rendering
  // Call APIs here so they don't block the rendering of the component
  // Changes to state here will trigger a rerender
  componentDidMount() {
    console.log('mounted');
  }

  // Called before a mounted component receives a new prop (e.g. if a prop is changing before render happens)
  componentWillReceiveProps() {
     
  }

  // Gives more control over whether a component should update
  // Takes in next props and next state and allows you to compare them to the current props and state and decide whether you want to update the component
  // Normally used for performance optimization
  shouldComponentUpdate() {

  }

  // Invoked any time a component is about to update / rerender
  componentWillUpdate() {

  }

  // Invoked immediately after an update or rerender takes place
  componentDidUpdate() {

  }

  // Invoked before a component is destroyed
  componentWillUnmount() {

  }

  // New lifecycle method in React 16 for catching errors
  // This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component
  componentDidCatch() {

  }

  state = {
    toggle: true,
    input: 'Hello'
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  submit = () => {
    console.log(this.text.value);
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" toggle={this.state.toggle} />  
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.toggle}>Show / Hide</button>
        {this.state.toggle &&
          <p>This should show and hide</p>
        }

        <input type="text" ref={input => this.text = input} />
        <button onClick={this.submit}>Show Value</button>

        <h3>{this.state.input}</h3>
        <input type="text" onChange={this.updateInput} value={this.state.input} />

        {movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
      </div>
    );
  }
}

// Refs allow you to take a DOM element and assign it to a property on your component

// Uncontrolled inputs aren't attached to state and let the user control the input value
// Controlled inputs are bound to state, which is updated onChange

// Uncontrolled inputs are fine when you don't need to modify the input value
// Controlled inputs give you full control of the input and allow you to access and modify the input (e.g. change the value to be uppercase or filter based on the value)

class Welcome extends Component {
  render() {
    // Object destructuring pulls out text property from this.props object
    const {text, toggle} = this.props;
    console.log(toggle);
    return (
      <h1 className="App-title">{text}</h1>
    );
  }
}

export default App;
