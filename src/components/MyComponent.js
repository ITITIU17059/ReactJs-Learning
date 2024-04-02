// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  // JSX
  // han che JSX se chi cho ra 1 khoi html
  render() {
    return (
      <div>
        my first component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;
