type StartGameProps = {
    onStartGame: () => void;
}

export function StartGame({ onStartGame } : StartGameProps) {
    return (
        <main className="flex justify-center h-screen pt-30">
            <div className="flex flex-col items-center gap-2 text-white">
                <img src="/absolute-solver.png"
                className="w-80"/>
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl">
                        Murder Drones Quiz
                    </h1>
                    <h2 className="text-sm font-poppins-400
                    font-bold">
                        Criado por Fernando de Barros
                    </h2>
                </div>
                <button className="text-sm bg-purple-500
                px-8 py-4 rounded cursor-pointer font-bold mt-8"
                onClick={onStartGame}>
                    Start game
                </button>
            </div>
        </main>
    )
}