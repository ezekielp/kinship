import React, { Component } from 'react';
import './dropdown.css';
import CONVERTFEILDS from '../../util/convert_feilds';



class Dropdown extends Component {
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
    const { arr, cb } = this.props;
    if (this.state.showDropdown) {
      const items = arr.map((el, i) => {
        const newEl = el.replace("_show", "");
        return (
          <section key={i} onClick={() => {
            cb(el);
            this.hideDropdown();
          }}>
            {CONVERTFEILDS[newEl]}
          </section>
        )
      });

      return (
        <div className="dropdown-items-container">
          {items}
        </div>
      )
    }
    return null;
  }

  render() {
    return (
      <div
        className="dropdown-container"
        onBlur={() => this.hideDropdown()}
        onFocus={() => this.showDropdown()}
        tabIndex="0">

        <header onMouseDown={() => this.toggleDropdown()}>Add a field</header>
        {this._dropdownList()}
      </div>
    )
  }
}

export default Dropdown;