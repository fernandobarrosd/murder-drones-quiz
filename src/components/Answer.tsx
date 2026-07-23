import { useEffect, useRef } from "react";

export type AnswerType = {
    id: number;
    value: string;
}

type AnswerProps = {
    answer: AnswerType;
    onSelect: (answer: AnswerType) => void;
    correctAnswerID: number;
}

export function Answer({ answer, onSelect, correctAnswerID } : AnswerProps) {
    const answersRef = useRef<NodeListOf<HTMLLIElement>>(null);

    useEffect(() => {
        answersRef.current = document.querySelectorAll(".answers");
    }, []);

    function handleSelect() {
        if (answer.id === correctAnswerID) {
            
        }
        answersRef.current?.forEach(answer => {
            const answerKey = Number(answer.dataset.key as string);

           if (answerKey === correctAnswerID) {
            answer.classList.replace("bg-purple-600", "bg-green-600");
            answer.classList.replace("hover:bg-purple-600/50", "hover:bg-green-600/50");
            return;
           }
           answer.classList.replace("bg-purple-600", "bg-red-600");
           answer.classList.replace("hover:bg-purple-600/50", "hover:bg-red-600/50");
           
        });
        
        onSelect(answer);
    }

    return (
        <li 
        className={`text-white rounded text-center bg-purple-600 
        cursor-pointer px-10 py-4 hover:bg-purple-600/50 answers`}
        data-key={answer.id}
        key={answer.id} onClick={handleSelect}>
            { answer.value }
        </li>
    )
}