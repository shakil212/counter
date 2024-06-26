import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Box extends Component {
  state = {
    className: "btn btn-danger p-2"
  }

  increment = () => { this.props.onIncrement(this.props.id); }

  decrement = () => { this.props.onDecrement(this.props.id) ;}

  delete = () => { const { id } = this.props; this.props.onDelete(id); }

  render() {
    return (
      <div>
        <button type="button"className={this.state.className} onClick={this.decrement}> Decrement</button>

        <span style={{ fontSize: "20px" }} className="p-3">{ this.props.num }</span>

        <button type="button"className="btn btn-primary p-2"onClick={ this.increment }>Increment</button>

        <button type="button"className="btn btn-danger p-2 ms-2"onClick={ this.delete }>Delete</button>
      </div>
    );
  }
}

export default Box;
