import { useGame } from "../providers/GameProvider"
import { StartedGame } from "./StartedGame";
import { StartGame } from "./StartGame";

export function Game() {
    const { status } = useGame();

    if (status == "started") {
        return <StartedGame/>
    }

    if (status === "stoped") {
        return <StartGame/>
    }

    if (status === "finished") {
        return <></>
    }
}