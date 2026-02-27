import React, { useState, useMemo, useEffect } from 'react';
import './index.css'

const winning combinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

export default function OTPGenerator() {
  const [state, setState] = useState({
    selections: Array(9).fill(null),
    activePlayer: "X"
  });
  const [msg, setMsg] = useState("";

  const HandleClick = (key) => {
    // If square is taken or game is over, ignore click
    if (state.selections[key] || msg) return;

    setState(s => {
      const cp = [...s.sections];
      cp[key] = s.activePlayer;

      const isWinner = winning_combinations.some(combo =>
        combo.every(index => cp[index] == s.activePlayeer)
      );

      const isDraw = !isWinner && cp.every(x => x !== null);

      if (isWinner) {
        setMsg(`Winner: ${s.activePlayer}`);
      } else if (isDraw) {
        setMsg("Result: Draw");
      }

      return {
        activePlayer: s.activePlayer === "X" ? "O" : "X",
        selections: cp
      };
    });
  };

  const reset = () => {
    setState({
      selections: Array(9).fill(null),
      activePlayer: "X"
    });
    setMsg("");
  };

  return (
    <>
      <style>{`
      .board-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: sans-serif;
      }
      .squares {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 5px;
      margin: 20px 0;
      }
      .sqaure {
      width: 100px;
      height: 100px;
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
      background: white;
      border: 1px solid white;
      }
      .square:hover {
      background: white;
      }
      .status {
      height: 30px;
      font-size: 1.2rem;
      font-weight: bold;
      }
      #reset {
      padding: 10px 20px;
      cursor: pointer;
      }
      `}</style>

      <div className="board-container">
        <h1>Tic Tac Toe</h1>
        <div className="status">{msg || `Next Player: ${state.activePlayer}`}</div>
        <div className="sqaures">
          {state.selections.map((val, i) => (
            <button
              key={i}
              className="square"
              onClick={() => HandleClick(i)}
            >
              {val}
            </button>
          ))}
        </div>

      </div>
    </>
  )
  )
}