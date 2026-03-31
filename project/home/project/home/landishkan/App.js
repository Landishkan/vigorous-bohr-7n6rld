import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [scene, setScene] = useState("room"); // 'room' или 'desktop'
  const [activeWindow, setActiveWindow] = useState(null); // 'video', 'profile' или null

  // 1. Экран комнаты (Начало)
  const RoomScene = () => (
    <div
      className="scene room"
      style={{ backgroundImage: url("/mainwindow.jpg") }}
    >
      <div className="overlay-text">Cyber Kvestor v0.1</div>
      <div className="monitor-trigger" onClick={() => setScene("desktop")}>
        <div className="glow-effect"></div>
        <p>ВКЛЮЧИТЬ</p>
      </div>
    </div>
  );

  // 2. Экран рабочего стола (KinitoPET Style)
  const DesktopScene = () => (
    <div className="scene desktop">
      {/* НЕВИДИМЫЕ АКТИВНЫЕ ЗОНЫ ПОВЕРХ ИКОНОК НА КАРТИНКЕ */}

      {/* Зона для иконки "My Computer" (Референс 2, верхний левый угол) */}
      <div
        className="icon-zone"
        style={{ top: "3%", left: "3%", width: "10%", height: "10%" }}
        onClick={() => setActiveWindow("profile")} // Пусть это будет Профиль
      ></div>

      {/* Зона для иконки "Pause Game" (Референс 2, нижний левый угол) */}
      <div
        className="icon-zone"
        style={{ bottom: "3%", left: "3%", width: "10%", height: "10%" }}
        onClick={() => setScene("room")} // Назад в комнату
      ></div>

      {/* ... и так далее для других иконок */}

      {/* ОКНО (появляется поверх всего) */}
      {activeWindow === "profile" && (
        <div className="window">{/* Код окна из прошлого сообщения */}</div>
      )}
    </div>
  );

  return (
    <div className="App">
      {scene === "room" ? <RoomScene /> : <DesktopScene />}
    </div>
  );
}
