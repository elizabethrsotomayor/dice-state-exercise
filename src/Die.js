import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import "./Die.css";

class Die extends Component {
  render() {
    let dice = [
      faDiceOne,
      faDiceTwo,
      faDiceThree,
      faDiceFour,
      faDiceFive,
      faDiceSix,
    ]; // array of dice icon objects
    let curDie = this.props.num;

    return <FontAwesomeIcon icon={dice[curDie]} className="Die" />;
  }
}

export default Die;
