import React, { Component } from "react";
import "./App.css";
import Modal from "./component/Modal";

export default class App extends Component {
  state = {
    isOpen: false,
    clicks: 0,
  };

  handleOpenModal = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleClicks = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Clicker!</h1>
        <button onClick={this.handleOpenModal}>Open a Clicker</button>
        {this.state.isOpen && (
          <Modal
            isOpen={this.handleOpenModal}
            isClick={this.handleClicks}
            clicks={this.state.clicks}
          />
        )}
      </>
    );
  }
}
