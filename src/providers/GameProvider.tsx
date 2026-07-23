import { createContext, useContext, type PropsWithChildren } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type GameContextProps = {
    status: "started" | "stoped" | "finished";
    correctAnswers: number;
    incorrectAnswers: number;
    startGame: () => void;
    incrementCorrectAnswers: () => void;
    incrementIncorrectAnswers: () => void;
    finishGame: () => void;
    resetGame: () => void;
    restartGame: () => void;
}

type GameState = Pick<GameContextProps, "status" | "correctAnswers" | "incorrectAnswers">;

const GameContext = createContext({} as GameContextProps);
const GAME_STATE_KEY = "@murder-drones-quiz/game-state";
const initialState : GameState = {
    status: "stoped",
    correctAnswers: 0,
    incorrectAnswers: 0
}

export function GameProvider({ children } : PropsWithChildren) {
    const [ gameState, setGameState ] = useLocalStorage<GameState>(
        GAME_STATE_KEY,
        initialState
    );

    function startGame() {
        setGameState(prevGameState => ({
            ...prevGameState,
            status: "started"
        }))
    }

    function finishGame() {
        setGameState(prevGameState => ({
            ...prevGameState,
            status: "finished"
        }))
    }

    function resetGame() {
        console.log("reseted");
        setGameState(_ => ({
            ...initialState
        }));
    }

    function restartGame() {
        setGameState(_ => ({
            status: "started",
            correctAnswers: 0,
            incorrectAnswers: 0
        }));
    }

    function incrementCorrectAnswers() {
        setGameState(prevGameState => ({
            ...prevGameState,
            correctAnswers: prevGameState.correctAnswers + 1
        }))
    }

    function incrementIncorrectAnswers() {
        setGameState(prevGameState => ({
            ...prevGameState,
            incorrectAnswers: prevGameState.incorrectAnswers + 1
        }))
    }

    return (
        <GameContext.Provider value={{
            ...gameState,
            startGame,
            incrementCorrectAnswers,
            incrementIncorrectAnswers,
            resetGame,
            restartGame,
            finishGame
        }}>
            { children }
        </GameContext.Provider>
    )
}


export const useGame = () => useContext(GameContext);