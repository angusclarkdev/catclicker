import React from 'react';

// local imports
import './Cat.css';

export default class Cat extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = (e) => {
      this.props.incrementCount();
    };
  };

  render() {
    return(
      <div className="cat">
        <img src={this.props.image} alt="cute cat" onClick={this.handleClick}/>
        <h1> {this.props.count} </h1>
      </div>

    )
  };
};
