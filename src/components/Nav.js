import React from 'react';
import { Menu } from 'semantic-ui-react';


import './Nav.css';


export default class Nav extends React.Component {

render() {

  let cats = {
    cat1: require('../images/cat.jpg'),
    cat2: require('../images/cat2.jpg'),
    cat3: require('../images/cat3.jpg'),
    cat4: require('../images/cat4.jpg')
  }

    return (
      <div className="nav">
      <Menu widths = '4'>
        <Menu.Item
          name='Cat 1'
          active= {this.props.activeItem === 'Cat 1'}
          onClick={() => this.props.changeImage(cats.cat1, 'Cat 1')}
      />
        <Menu.Item
          name= 'Cat 2'
          active={this.props.activeItem === 'Cat 2'}
          onClick={() => this.props.changeImage(cats.cat2, 'Cat 2')}
        />
        <Menu.Item
          name= 'Cat 3'
          active={this.props.activeItem === 'Cat 3'}
          onClick={() => this.props.changeImage(cats.cat3, 'Cat 3')}
        />
        <Menu.Item
          name= 'Cat 4'
          active={this.props.activeItem === 'Cat 4'}
          onClick={() => this.props.changeImage(cats.cat4, 'Cat 4')}
        />
      </Menu>
      </div>
    )
  }
}
