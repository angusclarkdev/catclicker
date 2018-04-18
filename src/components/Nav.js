import React from 'react';
import { Menu } from 'semantic-ui-react';


import './Nav.css';


export default class Nav extends React.Component {

render() {
    return (
      <div className="nav">
      <Menu widths = '4'>
        <Menu.Item
          name='Cat 1'
          active= {this.props.activeItem === 'Cat 1'}
          onClick={() => this.props.changeImage('/static/media/cat.9a205e6f.jpg', 'Cat 1')}
      />
        <Menu.Item
          name= 'Cat 2'
          active={this.props.activeItem === 'Cat 2'}
          onClick={() => this.props.changeImage('/static/media/cat2.ff86d15c.jpg', 'Cat 2')}
        />
        <Menu.Item
          name= 'Cat 3'
          active={this.props.activeItem === 'Cat 3'}
          onClick={() => this.props.changeImage('/static/media/cat3.027a8443.jpg', 'Cat 3')}
        />
        <Menu.Item
          name= 'Cat 4'
          active={this.props.activeItem === 'Cat 4'}
          onClick={() => this.props.changeImage('/static/media/cat4.b233fa59.jpg', 'Cat 4')}
        />
      </Menu>
      </div>
    )
  }
}
