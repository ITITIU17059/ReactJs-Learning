// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Le Minh Quan",
    address: "Hoi Dan IT",
    age: 26,
  };

  // JSX
  // han che JSX se chi cho ra 1 khoi html
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
