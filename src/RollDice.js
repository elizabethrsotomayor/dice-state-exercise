import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    nums: [0, 1, 2, 3, 4, 5],
  };

  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      isRolling: false,
    };

    this.roll = this.roll.bind(this);
  }

  roll() {
    let nums = RollDice.defaultProps.nums;

    let randNum1 = nums[Math.floor(Math.random() * nums.length)];

    let randNum2 = nums[Math.floor(Math.random() * nums.length)];

    this.setState({ num1: randNum1, num2: randNum2, isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="RollDice-dice">
          <Die num={this.state.num1} isRolling={this.state.isRolling} />
          <Die num={this.state.num2} isRolling={this.state.isRolling} />
        </div>
        <button
          className="RollDice-button"
          id="RollDice-btn"
          onClick={this.roll}
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
