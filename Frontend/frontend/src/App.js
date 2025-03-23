import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { getQuizzes } from "./api";

function App() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuizzes().then(data => setQuizzes(data));
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>Список вікторин</h1>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>{quiz.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
