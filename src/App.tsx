import { useState } from "react";
import backgroundImage from "./assets/background.jpg";

import CountDownTimer from "./components/CountDownTimer";
import TheGame from "./components/TheGame";
import GameRules from "./components/GameRules";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);

  const [pauseClock, setPauseClock] = useState(false);

  return (
    <div
      className="relative h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative h-5/6 w-11/12 p-4 md:w-4/5">
        <div className="absolute inset-0 bg-black opacity-70 rounded-xl z-0"></div>

        {startGame && !endGame ? (
          <>
            {!pauseClock && (
              <CountDownTimer onCompleteFunction={() => setEndGame(true)} />
            )}

            <TheGame
              setPauseClock={setPauseClock}
              setStartGame={setStartGame}
              setEndGame={setEndGame}
            />
          </>
        ) : (
          <div className="flex flex-col h-full justify-center items-center">
            {!endGame && <GameRules />}

            {endGame && (
              <div className="z-10 flex flex-col justify-center items-center w-full md:w-auto">
                <h1 className="text-3xl font-bold text-red-500 mb-4">
                  Perdiste!
                </h1>
                <button
                  onClick={() => {
                    setStartGame(false);
                    setEndGame(false);
                  }}
                  className="px-6 py-2 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 z-10 w-full md:w-auto"
                >
                  Reglas
                </button>
              </div>
            )}
            <button
              onClick={() => {
                setStartGame(true);
                setEndGame(false);
                setPauseClock(false)
              }}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 z-10 mt-6 md:mt-0 w-full md:w-auto"
            >
              {`${!endGame ? "Iniciar Juego" : "Reiniciar"}`} 
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
