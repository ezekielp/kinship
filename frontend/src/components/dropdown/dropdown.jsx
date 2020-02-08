import React, { Component } from 'react';
import './dropdown.css';
import CONVERTFIELDS from '../../util/convert_fields';



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
    const { inputFields, showInput } = this.props;
    if (this.state.showDropdown) {
      const dropdownList = inputFields.map((field, i) => {
        const newEl = field.replace("_show", "");
        return (
          <section key={i} onClick={() => {
            showInput(field);
            this.hideDropdown();
          }}>
            {CONVERTFIELDS[newEl]}
          </section>
        )
      });

      return (
        <div className="dropdown-items-container">
          {dropdownList}
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