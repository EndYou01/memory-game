/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { shuffleArray } from "../functions/globalFunctions";
import { cardsArray } from "../static/cardsArray";
import { cardInterface } from "../interfaces/staticInterfaces";
import Modal from "./GenericModal";

const TheGame = ({
  setPauseClock,
  setStartGame,
  setEndGame,
}: {
  setPauseClock: React.Dispatch<React.SetStateAction<boolean>>;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [initialArray, setInitialArray] = useState(shuffleArray(cardsArray));
  const [gameFinished, setGameFinished] = useState(false);
  const [attempts, setAttempts] = useState(0); // Contador de intentos

  useEffect(() => {
    // Comprobar si el juego ha terminado
    const showedCards = initialArray.filter((item) => item.value);
    const guessedCards = initialArray.filter((item) => item.guessed);

    if (showedCards.length === 2) {
      if (showedCards[0].imageSrc === showedCards[1].imageSrc) {
        setInitialArray(
          initialArray.map((item) => {
            if (showedCards.find((showedCard) => showedCard.id === item.id)) {
              return {
                ...item,
                guessed: true,
                value: false,
              };
            }
            return item;
          })
        );
      } else {
        setTimeout(() => {
          unshowLastTwoCards();
        }, 1000);
      }
      setAttempts((prevAttempts) => prevAttempts + 1); // Aumentar contador de intentos
    }

    if (guessedCards.length === 12) {
      setPauseClock(true);
      setGameFinished(true);
    }
  }, [initialArray]);

  const handleShowCard = (card: cardInterface) => {
    const showedCards = initialArray.filter((item) => item.value);
    if (!card.guessed && showedCards.length < 2) {
      setInitialArray(
        initialArray.map((item) => {
          if (item.id === card.id) {
            return {
              ...card,
              value: true,
            };
          }
          return item;
        })
      );
    }
  };

  const unshowLastTwoCards = () => {
    setInitialArray(
      initialArray.map((item) => {
        if (item.guessed) {
          return item;
        }

        return {
          ...item,
          value: false,
        };
      })
    );
  };

  const resetGame = () => {
    setInitialArray(shuffleArray(cardsArray));
    setGameFinished(false);
    setAttempts(0);
    setPauseClock(false);
  };

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 h-4/5 w-full justify-center items-center z-10">
        {initialArray.map((card, key) => (
          <div
            className="flex justify-center items-center z-10"
            onClick={() => handleShowCard(card)}
            key={key}
          >
            {card.guessed || card.value ? (
              <img
                src={card.imageSrc}
                alt={card.imageSrc.split("/")[2]}
                className="h-20 w-20 rounded-xl"
              />
            ) : (
              <img
                src="/assets/guess.jpg"
                alt="guess"
                className="h-20 w-20 rounded-3xl"
              />
            )}
          </div>
        ))}
      </div>

      <Modal state={gameFinished} close={() => setGameFinished(!gameFinished)}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-green-500 mb-4">
            ¡Felicidades!
          </h1>
          <p className="text-lg mb-6">¡Has ganado el juego! 🎉</p>
          <p className="text-lg mb-4">Intentos: {attempts}</p>
          {/* <p className="text-lg mb-4">Tiempo restante: {timeRemaining} segundos</p> */}
          <div className="flex justify-center items-center gap-x-2">
            <button
              onClick={() => {
                setStartGame(false);
                setEndGame(false);
              }}
              className="px-6 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 z-10 w-full md:w-auto"
            >
              Reglas
            </button>
            <button
              onClick={() => resetGame()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 w-full md:w-auto"
            >
              Reiniciar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TheGame;
