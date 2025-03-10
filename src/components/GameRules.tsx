
const GameRules = () => {
    return (
        <div className="flex justify-center items-center z-10 ">
          <div className=" max-w-lg w-full text-left">
            <h1 className="text-xl font-bold text-green-600 shadow-3xl">JUEGO DE MEMORIA</h1>
            
            <div className="text-sm">
              <div>
                <h2 className="font-semibold text-xl text-blue-500 shadow-3xl">Cómo Jugar:</h2>
                <p className="mt-2 text-white">
                  El objetivo del juego es emparejar todas las cartas, descubriéndolas de dos en dos.
                </p>
              </div>
    
              <div className="space-y-2">
                <h2 className="font-semibold text-xl text-blue-500 shadow-3xl">Reglas:</h2>
                <ul className="list-disc list-inside text-left text-white">
                  <li><strong>Inicio:</strong> Las cartas comienzan cubiertas, con su reverso visible.</li>
                  <li><strong>Revelar cartas:</strong> El jugador hace clic en las cartas para revelarlas. Solo puede revelar hasta 2 cartas a la vez.</li>
                  <li><strong>Emparejar cartas:</strong> Si las dos cartas reveladas tienen la misma imagen, se quedan visibles y se marcan como "adivinadas".</li>
                  <li><strong>Diferentes cartas:</strong> Si las dos cartas reveladas no coinciden, se vuelven a cubrir después de 1 segundo.</li>
                  <li><strong>Final del juego:</strong> El juego termina cuando todas las cartas han sido emparejadas correctamente.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
}

export default GameRules
