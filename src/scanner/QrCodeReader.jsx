import React, { Component } from "react";
import QrReader from "react-qr-reader";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      result: "No result"
    };
  }

  componentDidMount() {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          video: true
        },
        function(localMediaStream) {},
        function(err) {
          alert("The following error occurred when trying to access the camera: " + err);
        }
      );
    } else {
      alert("Sorry, browser does not support camera access");
    }
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <QrReader
          delay={500}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
          ref={stream => {
            this.videoStream = stream;
          }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
