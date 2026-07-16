import { StartGame } from "./components/StartGame";
import { useLocalStorage } from "./hooks/useLocalStorage";

const MAX_ATTEMPTS = 5;
const GAME_STATE_KEY = "@murder-drones-quiz/game-state";

export function App() {
  const [ gameState, setGameState ] = useLocalStorage(GAME_STATE_KEY, {
    isStarted: false,
    isWin: false,
    attemptCount: MAX_ATTEMPTS
  });

  console.log(gameState);

  return (
    <StartGame onStartGame={() => {}}/>
  )
}