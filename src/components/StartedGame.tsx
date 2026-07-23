import { useEffect, useRef, useState } from "react";
import { quesions } from "../quiz.json";
import { Answer, type AnswerType } from "./Answer";
import { useGame } from "../providers/GameProvider";
import cynAudio from "../assets/audios/cyn-voice-stab.mp3";
//import cynAudio2 from "../assets/audios/Voicy_get snuck upon.mp3";
import { QuestionLevel, type QuestionLevelType } from "./Level";


const CYN_STAB_AUDIO = new Audio(cynAudio);
//const CYN_GET_SNUCK_UPON_AUDIO = new Audio(cynAudio2);
//const SHUFFLE_QUESTIONS_KEY = "@murder-drones-quiz/shuffle-questions";


export function StartedGame() {
    const { correctAnswers, incorrectAnswers, resetGame, incrementCorrectAnswers, incrementIncorrectAnswers } = useGame();

    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
    const currentQuestion = quesions[currentQuestionIndex];
    const answersRef = useRef<NodeListOf<HTMLLIElement>>(null);
    

    const isLastQuestion = currentQuestionIndex === quesions.length - 1;

    useEffect(() => {
        answersRef.current = document.querySelectorAll(".answers");
    }, []);

    function resetAnswersColor() {
        answersRef.current?.forEach(answer => {
            answer.classList.replace("bg-green-600", "bg-purple-600", );
            answer.classList.replace("hover:bg-green-600/50", "hover:bg-purple-600/50", );

           answer.classList.replace("bg-red-600", "bg-purple-600", );
           answer.classList.replace("hover:bg-red-600/50", "hover:bg-purple-600/50", );
           
        });
    }
    

    async function handleSelectAnswer(answer: AnswerType) {
        if (answer.id == currentQuestion.correctAnswerId) {
            incrementCorrectAnswers();
        }

        if (answer.id  !== currentQuestion.correctAnswerId) {
            incrementIncorrectAnswers();
            await CYN_STAB_AUDIO.play();
        }

        setTimeout(() => {
            resetAnswersColor();
            if (!isLastQuestion) {
                setCurrentQuestionIndex((prevIndex => prevIndex + 1));
                return;
            }
            resetGame();
                
            }, 3500);
    }


    return (
        <main className="mt-24">
            <div className="fixed top-0 left-0 p-4 text-white
            text-xl flex gap-4">
                <span className="text-[1rem]">
                    Acertos: {correctAnswers}
                </span>
                <span className="text-[1rem]">
                    Erros: {incorrectAnswers}
                </span>
            </div>
            <div className="flex flex-col items-center text-white 
            justify-center">
                { currentQuestion.image && (
                    <img 
                    src={currentQuestion.image}
                    alt={`Question ${currentQuestionIndex + 1} image`}
                    title={`Question ${currentQuestionIndex + 1} image`}
                    className="w-36 mb-8"/>
                ) }
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="bg-purple-600 size-4 p-4 rounded-full
                    flex justify-center items-center font-bold
                    md:text-xl md:p-5">
                        { currentQuestionIndex + 1 }
                    </div>
                    <h1 className="md:text-xl">
                        {currentQuestion.title}
                    </h1>
                </div>
                <QuestionLevel level={currentQuestion.level as QuestionLevelType}/>
                <ul className="grid grid-cols-2 gap-4 mt-8">
                    { currentQuestion.answers.map(answer => (
                        <Answer answer={answer}
                        key={answer.id}
                        correctAnswerID={currentQuestion.correctAnswerId}
                        onSelect={handleSelectAnswer}/>
                    )) }
                </ul>
            </div>
        </main>
    )
}