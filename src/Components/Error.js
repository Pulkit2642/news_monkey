import React, { Component } from 'react'

export default class Error extends Component {
  render(props) {
    return (
      <div className="container text-center my-3">
        <h1>Error Occured</h1>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
