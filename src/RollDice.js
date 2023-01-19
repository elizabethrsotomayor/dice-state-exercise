import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 1,
      num2: 1,
    };

    this.roll = this.roll.bind(this);
  }

  roll() {
    let nums = RollDice.defaultProps.nums;

    let randNum1 = nums[Math.floor(Math.random() * nums.length)];

    let randNum2 = nums[Math.floor(Math.random() * nums.length)];

    this.setState({ num1: randNum1, num2: randNum2 });
  }

  render() {
    return (
      <div>
        <div className="RollDice-Dice">
          <Die num={this.state.num1} /> <Die num={this.state.num2} />
        </div>
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

RollDice.defaultProps = {
  nums: [0, 1, 2, 3, 4, 5],
};

export default RollDice;
