import React, { useState, useRef } from "react";
import "./main.css";

const Main = () => {
  const [positions, setPositions] = useState([
    "pOne",
    "pTwo",
    "pThree",
    "pFour",
    "pFive",
  ]);
  const [animate, setAnimate] = useState([
    "dummy",
    "dummy",
    "dummy",
    "dummy",
    "dummy",
  ]);

  const animateData = [
    [
      "one-to-five",
      "two-to-one",
      "three-to-two",
      "four-to-three",
      "five-to-four",
    ],
    [
      "five-to-four",
      "one-to-five",
      "two-to-one",
      "three-to-two",
      "four-to-three",
    ],
    [
      "four-to-three",
      "five-to-four",
      "one-to-five",
      "two-to-one",
      "three-to-two",
    ],
    [
      "three-to-two",
      "four-to-three",
      "five-to-four",
      "one-to-five",
      "two-to-one",
    ],
    [
      "two-to-one",
      "three-to-two",
      "four-to-three",
      "five-to-four",
      "one-to-five",
    ],
  ];

  const handleClick = () => {
    setAnimate(animateData[positions.indexOf("pOne")]);

    setTimeout(() => {
      setAnimate(["dummy", "dummy", "dummy", "dummy", "dummy"]);

      const newArr = [
        positions[0],
        positions[1],
        positions[2],
        positions[3],
        positions[4],
      ];
      let last = newArr.pop();
      newArr.unshift(last);
      setPositions(newArr);
    }, 3000);
  };

  // const afterAnimation = () => {
  //   let last = positions.pop();
  //   positions.unshift(last);
  //   return positions;
  // };

  return (
    <div>
      <div className="mainDiv" onClick={handleClick}>
        <div className="circle-big">
          <div className={`circle one ${positions[0]} ${animate[0]}`}></div>
          <div className={`circle two ${positions[1]} ${animate[1]}`}></div>
          <div className={`circle three ${positions[2]} ${animate[2]}`}></div>
          <div className={`circle four ${positions[3]} ${animate[3]}`}></div>

          <div className={`circle five ${positions[4]} ${animate[4]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
