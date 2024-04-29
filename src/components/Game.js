import React, { useState } from 'react';
import { Button } from 'antd';

const choices = ['سنگ', 'کاغذ', 'قیچی'];

const Game = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [numOfUserWins, setNumOfUserWins] = useState(0);
  const [numOfComputerWins, setNumOfComputerWins] = useState(0);
  const [numOfTies, setNumOfTies] = useState(0);

  const handleChoice = (choice) => {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerSelection);
    setResult(getResult(choice, computerSelection));
    updateWinCounts(choice, computerSelection);
  };

  const getResult = (user, computer) => {
    if (user === computer) return 'مساوی';
    if (
      (user === 'سنگ' && computer === 'قیچی') ||
      (user === 'کاغذ' && computer === 'سنگ') ||
      (user === 'قیچی' && computer === 'کاغذ')
    ) {
      return 'من بردم';
    }
    return 'کامپیوتر برد';
  };

  const updateWinCounts = (user, computer) => {
    if (user === computer) {
      setNumOfTies(numOfTies + 1);
    } else if (
      (user === 'سنگ' && computer === 'قیچی') ||
      (user === 'کاغذ' && computer === 'سنگ') ||
      (user === 'قیچی' && computer === 'کاغذ')
    ) {
      setNumOfUserWins(numOfUserWins + 1);
    } else {
      setNumOfComputerWins(numOfComputerWins + 1);
    }
  };

  return (
    <div style={{ alignItems: 'center', width: '100%' }}>
      <h1>سنگ و کاغذ و قیچی</h1>
      <div className="choices">
        {choices.map((choice) => (
          <Button
            style={{ marginRight: '90px', marginLeft: '90px', padding: '0 40px' }}
            key={choice}
            onClick={() => handleChoice(choice)}
          >
            {choice}
          </Button>
        ))}
      </div>
      <div className="result">
        {userChoice && computerChoice && (
          <>
            <h3>انتخاب من: {userChoice}</h3>
            <h3>انتخاب کامپیوتر: {computerChoice}</h3>
            <h1>{result}</h1>
            <p>تعداد برد من: {numOfUserWins}</p>
            <p>تعداد برد کامپیوتر: {numOfComputerWins}</p>
            <p>تعداد مساوی: {numOfTies}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;