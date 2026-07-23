import { Game } from "./components/Game";
import { GameProvider } from "./providers/GameProvider";

export function App() {
  return (
    <GameProvider>
      <Game/>
    </GameProvider>
  )
}