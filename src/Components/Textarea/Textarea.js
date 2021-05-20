import React, { Component } from 'react';

export default class Textarea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Please, send us a message!'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
          <label>
            {this.props.labelName}
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
      );
    }
  }