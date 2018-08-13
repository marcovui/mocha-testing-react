import React, { Component } from 'react';
import Foo from "./Foo"

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      SeoTitle: 'ssss',
    };
  }

  render() {
    return (
      <header className="icon-star">
        <div className="container">
          <Foo />
          <Foo />
          <Foo />
        </div>
      </header>
    );
  }
}

export default MyComponent;