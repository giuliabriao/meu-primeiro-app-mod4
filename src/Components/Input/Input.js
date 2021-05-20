import React, { Component } from 'react';

export default class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div>
          <label>
            {this.props.labelName}
            <input type={this.props.inputType} value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
          </label>
        </div>

      );
    }
  }

  