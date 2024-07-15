import React, { useState } from 'react';
import { data } from './Question'; 

const App = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);

  const checkans = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        setLock(true);
        setScore(prevScore => prevScore + 1);
      } else {
        console.log('Incorrect');
        setLock(true);
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index + 1 < data.length) {
        setIndex(prevIndex => prevIndex + 1);
        setQuestion(data[index + 1]);
        setLock(false);
      } else {
        console.log('Quiz completed');
      }
    }
  };

  return (
    <div>
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li onClick={(e) => checkans(e, 1)}>{question.option1}</li>
        <li onClick={(e) => checkans(e, 2)}>{question.option2}</li>
        <li onClick={(e) => checkans(e, 3)}>{question.option3}</li>
        <li onClick={(e) => checkans(e, 4)}>{question.option4}</li>
      </ul>
      <button onClick={next} disabled={!lock}>Next</button>
      <p>Score: {score}</p>
    </div>
  );
};

export default App;
