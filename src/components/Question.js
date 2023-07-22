import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

    // add useEffect code

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? 
          prevTime - 1 : 10))
  ;
      }, 1000);
  
      return () => {
        clearTimeout(timer);
        if (timeRemaining === 1) {
          onAnswered(false);
        }
      };
    }, [question,timeRemaining,onAnswered]);

  const { id, prompt, answers, correctIndex, handleAnswer } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;