import { useGame } from "../providers/GameProvider"

export function StartGame() {
    const { startGame } = useGame();
    
    return (
        <main className="flex justify-center mt-30">
            <div className="flex flex-col items-center gap-2 text-white">
                <img src="/absolute-solver.png"
                className="w-80"/>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl">
                        Murder Drones Quiz
                    </h1>
                    <h2>Teste o seu conhecimento em Murder Drones</h2>
                    <h2 className="text-sm font-poppins-400
                    font-bold">
                        Criado por Fernando de Barros
                    </h2>
                </div>
                <button className="text-sm bg-purple-500
                px-8 py-4 rounded cursor-pointer font-bold mt-8"
                onClick={startGame}>
                    Start game
                </button>
            </div>
        </main>
    )
}