import React, { Component } from 'react';
import './dropdown.css';

export default class dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  showDropdown() {
    this.setState({ showDropdown: true });
  }

  hideDropdown() {
    this.setState({ showDropdown: false });
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  _dropdownList() {
    const { arr } = this.props;
    if (this.state.showDropdown) {
      const items = arr.map((el, i) => {
        <section key={i}>
          {el}
        </section>
      });

      return (
        <div className="dropdown-items-container">
          {items}
        </div>
      )
    }
    
  }

  render() {
    return (
      <div
        className="dropdown-container"
        onBlur={() => this.hideDropdown()}
        onFocus={() => this.showDropdown()}
        tabIndex="0">
      >
        <header>Add a field</header>
        {this._dropdownList()}
      </div>
    )
  }
}
