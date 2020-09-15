import React, { useState } from 'react';

import QuizGame from "./QuizGame";

const App = () => {
    const [gameId, setGameId] = useState(1);
    return <QuizGame key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default App;



