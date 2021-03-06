import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'

// local imports
import './App.css';
import Cat from './components/Cat';
import Title from './components/Title';
import Nav from './components/Nav';

import cat1 from './images/cat.jpg';



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      image: cat1,
      activeItem: "Cat 1",
      active: true,
      count: 0

    };
  };

  changeImage = (cat, name ) => this.setState({
    activeItem: name,
    image: cat,
    count: 0
  });

  incrementCount = () => this.setState((prevState) => {
    return {
      count: prevState.count + 1
    };
  });

  render() {
    return (
      <div className="container">
        <Title />
        <Nav name={this.state.name} active={this.state.active} activeItem={this.state.activeItem} changeImage={this.changeImage}
        />
        <Cat image={this.state.image} count={this.state.count} incrementCount={this.incrementCount}/>
      </div>
      );
    };
  };
