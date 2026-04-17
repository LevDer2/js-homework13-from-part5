import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleModalEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleModalEscClose);
  }

  handleModalEscClose = (evt) => {
    if (evt.code === "Escape") {
      this.props.isOpen();
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.isOpen();
    }
  };

  render() {
    const { isOpen, isClick, clicks } = this.props;
    return (
      <div className="backdrop" onClick={this.handleBackdropClick}>
        <div className="modal">
          <button className="modalClose" onClick={isOpen}>
            Close a game
          </button>
          <div>
            <button type="button" className="clicks" onClick={isClick}>
              You click: {clicks} times!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
