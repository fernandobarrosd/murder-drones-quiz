export type QuestionLevelType = "easy" | "medium" | "hard";


const levels : Record<QuestionLevelType, { text: string, color: string }>= {
    "easy": {
        text: "Fácil",
        color: "bg-green-600"
    },
    "medium": {
        text: "Médio",
        color: "bg-yellow-600"
    },
    "hard": {
        text: "Dificil",
        color: "bg-red-600"
    }
}


type QuestionLevelProps = {
    level: QuestionLevelType;
}

export function QuestionLevel({ level } : QuestionLevelProps) {
    const questionLevel = levels[level as QuestionLevelType] || "";

    return (
        <span className={`${questionLevel.color}
            px-6 py-1 rounded text-white mt-4
            cursor-default`}>
                {questionLevel.text}
        </span>
    )
}