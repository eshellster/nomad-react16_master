import React, { Component } from "react";

const MAX_PIZZAS = 5;

const eatPizza = (state, props) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZAS) {
    return {
      pizzas: pizzas + 1
    };
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    pizzas: 0
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have aten ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }
  _handleClick = () => {
    this.setState(eatPizza);
  };
}

class App extends Component {
  render() {
    return <Controlled />;
  }
}

export default App;

/*
import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";







const BoundaryHOC = ProtectedComponet => class Boundary extends Component {
  state = {
  hasError: false
  };
  componentDidCatch = () => {
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorFallback />;
    } else {
      return <ProtectedComponet />;
    }
  }
}

class ErrorMarker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneprayer"]
  };
  componentDidMount = () => {
    setTimeout(() =>{
      this.setState({
        friends: undefined
      });
    }, 2000);
  }
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend}`);
  }
}

const PErrorMarker = BoundaryHOC(ErrorMarker)

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchMe"));
  }
}

const PPortals = BoundaryHOC(Portals)

const Message = () => "Just touched it"

class ReturnTypes extends Component {
  render(){
    return "hello!";
  }
}


const ErrorFallback = () => " ====== Sorry something went wrong ======";

class App extends Component {
 
  render() {
    return (
      <Fragment>
        <ReturnTypes/>
        <PPortals />
        <PErrorMarker /> 
      </Fragment>
    );
  }
}

export default  BoundaryHOC(App);
*/
