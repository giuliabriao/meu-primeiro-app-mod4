import React from "react";

const RelogioEffect = () => {
    const [data, setData] = React.useState(new Date());
  
    const tick = () => {
      setData(new Date());
    };
    
    React.useEffect(() => {
      const timer = setInterval(() => tick(), 1000);
      return () => clearInterval(timer);
    });
    return <h1>A hora é: {data.toLocaleTimeString()}</h1>;
  };
  
  export default RelogioEffect;

/*export default Timer

import React, { Component } from "react";

export default class Relogio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({ data: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h1>A hora é: {this.state.data.toLocaleTimeString()}</h1>;
  }
}*/