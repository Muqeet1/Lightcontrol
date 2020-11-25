import React from "react";
import "./App.css";
import Header from "./components/Header";
import CircleButton from "./components/CircleButton";
import socket, { SITEKEY } from "./socket";

function App() {
  const activateScene = (sceneId) => {
    console.log(sceneId);
    socket.on("site", ({ siteKey, data }) => {
      socket.emit("apply/scene", {
        siteKey: SITEKEY,
        data: { sceneId },
      });
    });
  };

  socket.on("connect", () => {
    socket.emit("subscribe", { siteKey: SITEKEY });
  });

  socket.on("siteKeyFound", ({ siteKey, data }) => {
    console.log(data);
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="item" onClick={() => activateScene("allOn")}>
          <CircleButton text="All on" />
        </div>
        <div className="item" onClick={() => activateScene("all:70")}>
          <CircleButton text="70%" />
        </div>

        <div className="item" onClick={() => activateScene("all:30")}>
          <CircleButton text="30%" />
        </div>

        <div className="item" onClick={() => activateScene("allOff")}>
          <CircleButton text="All off" />
        </div>
      </div>
    </div>
  );
}

export default App;
