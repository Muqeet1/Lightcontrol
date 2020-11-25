import React from "react";

const CircleButton = ({ text }) => {

  let styles = {
    circle: {
      width: "100px",
      height: "100px",
      border: "7px solid white",
      borderRadius: "100%",
      margin: "auto",
    },
    fill: {
      borderBottomLeftRadius: "50px",
      borderBottomRightRadius: "50px",
      backgroundColor: "white",
      width: "100%",
      height: "50%",
      marginTop: "50%",
    },
    text: {
      marginTop: "3%",
    },
  };

  if (text == "All on") {
    styles.circle.backgroundColor = "white"
  } else if (text == "70%") {
      styles.fill.height = "75%"
      styles.fill.marginTop = "30%"
  } else if (text == "30%") {
      styles.fill.height = "35%"
      styles.fill.marginTop = "65%"
  } else if (text == "All off") {
      styles.fill.backgroundColor = "transparent"
  }

  return (
    <>
      <div style={styles.circle}>
        <div style={styles.fill}></div>
      </div>
      <div style={styles.text}>{text}</div>
    </>
  );
};



export default CircleButton;
