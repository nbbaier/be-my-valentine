import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pretty please?!",
  "Come on, it'll be fun!!",
  "Don't do this to me!",
  "I'm gonna cry...",
  "You're breaking my heart :(",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 24;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <>
      <div
        className="valentine-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {yesPressed ? (
          <>
            <img
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="bears kissing"
            />
            <div className="text">YAY!!!!</div>
          </>
        ) : (
          <>
            {" "}
            <>
              <img
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                alt="Bear asking you to be my valentine"
              />
              <div className="text">Will you be my valentine?</div>
              <div className="button-container">
                <button
                  className="yes-button"
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => {
                    setYesPressed(true);
                  }}
                >
                  <b>Yes!</b>
                </button>

                <button
                  className="no-button"
                  onClick={() => {
                    handleNoClick();
                  }}
                >
                  {getNoButtonText()}
                </button>
              </div>
            </>
          </>
        )}
      </div>
    </>
  );
}

export default App;
