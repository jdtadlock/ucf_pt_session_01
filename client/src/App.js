import React, { Component } from 'react';
import Header from './components/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Our Awesome App',
      details: '',
      count: 0
    };
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  testRequest() {
    axios.get('/notes')
      .then(res => console.log(res));
  }

  handleChange = (e) => {
    let prop = e.target.name;
    this.setState({
      [prop]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Header 
          title={this.state.title} 
          styles={{color: '#fff'}} 
          increase={this.increaseCount.bind(this)} />


        <h1>{this.state.count}</h1>

        <p>{this.state.details}</p>

        <button onClick={this.increaseCount.bind(this)}>Increase Count</button>
        <button onClick={this.testRequest.bind(this)}>Test Response</button>


        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="details" value={this.state.details} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;

// class Animal {
//   constructor() {
//     this.legs = 4;
//   }
// }

// class Bear extends Animal {
//   constructor(name) {
//     super();

//     this.name = name;
//   }
// }

// let smokey = new Bear('Smokey');

// console.log(smokey.legs);