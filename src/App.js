import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import audiomp3 from "./audio.mp3";
function App() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthorized");
    if (storedAuthState === "true") {
      setShowContent(false);
    }
  }, []);
  const handlePasswordSubmit = () => {
    if (password === "1108") {
      setIsAuthorized(true);
      localStorage.setItem("isAuthorized", "true");
      const audio = new Audio(audiomp3);
      audio.play().catch((err) => {
        console.log("Audio play failed:", err);
      });
    } else {
      alert("Неправильный пароль. Попробуйте еще раз.");
    }
  };

  return (
    <div className="App">
      {showContent ? (
        <div>
          {/* <audio ref={audioRef} src={audio} controls preload="auto"></audio> */}
          {!isAuthorized ? (
            <div className="password-container">
              <h2>Введите пароль, чтобы увидеть сообщение</h2>
              <input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={handlePasswordChange}
                className="password-input"
              />
              <button
                onClick={handlePasswordSubmit}
                className="password-button"
              >
                Отправить
              </button>
            </div>
          ) : (
            <header className="App-header">
              Дорогая Айлар, я знаю, что поступил неправильно, и хочу искренне
              извиниться перед тобой. Каждый из этих 31 цветка символизирует,
              как сильно я ценю тебя. 30 из них — живые, такие же прекрасные,
              как ты. А один искусственный цветок говорит о том, что моя любовь
              к тебе никогда не увянет, как и этот цветок. Пожалуйста, прими мои
              извинения. Я очень сожалею о том, что произошло. Ты невероятно
              дорога мне, и я надеюсь, что смогу заслужить твое прощение. С
              любовью.
            </header>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
