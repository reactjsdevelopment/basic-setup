import React from 'react';

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red", show: true };
  }
  // called right before rendering the element(s) in the DOM.
  static getDerivedStateFromProps(props, state) {
    console.log(props, state, 'getDerivedStateFromProps');
  return {favoritecolor: props.favcol };
  }

  //  React should continue with the rendering or not. default value is true
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return false;
  }
  // render() method is required and will always be called, actually outputs the HTML to the DOM.
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <p>remoced</p>
    };
    return (
      <div>
        <h1> World!</h1>
        <h2>My Favorite Color is {this.state.favoritecolor}</h2>
        <button type="button" onClick={this.changeColor}>Change color</button>
        <div id="div1"></div>
        <div id="div2"></div>

        <button type="button" onClick={this.delHeader}>Delete Header</button>

      </div>

    );
  }

  // f the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');

    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  // called after the component is rendered.
  componentDidMount() {
    setTimeout(() => {
      console.log('componentDidMount');
      this.setState({ favoritecolor: "yellow" })
    }, 1000)
  }

  componentWillUnmount() {
    console.log("The component named Header is about to be unmounted.");
  }



  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  }

  delHeader = () => {
    this.setState({ show: false });
  }

}

export default Test;