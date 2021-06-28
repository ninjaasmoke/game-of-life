import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { produce } from 'immer';


function App() {

  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);

  const [cellSize, setCellSize] = useState(18);

  const emptyGrid = (rows: number, col: number = cols) => {
    let row = [];
    for (let i = 0; i < rows; i++) {
      row.push(Array.from(Array(col), () => 0));
    }
    return row;
  }


  useEffect(() => {
    // const c = Math.floor((window.innerWidth) / 20);
    // const r = Math.floor((window.innerHeight) / 20);
    // setRows(r);
    // setCols(c);

    // console.log(r, c)

    setGrid(emptyGrid(30, 30));
  }, []);


  const [grid, setGrid] = useState<number[][]>([[]]);


  const neighOps = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
  ];

  const [simulating, setSimulating] = useState(false);

  const simRef = useRef(simulating);
  simRef.current = simulating;

  const startSimulation = useCallback(() => {
    if (!simRef.current) {
      return;
    }

    setGrid((grid) => {
      return produce(grid, (gridCopy: number[][]) => {
        for (let i = 0; i < rows; i++) {
          for (let k = 0; k < cols; k++) {
            let neighbors = 0;
            neighOps.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < rows && newK >= 0 && newK < cols) {
                neighbors += grid[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (grid[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });

    });

    setTimeout(startSimulation, 200);

  }, [])

  return (
    <div className="App">

      {/* control buttons */}

      <div className="buttons">
        <button
          onClick={() => {
            setSimulating(!simulating);
            if (!simulating) {
              simRef.current = true;
              startSimulation();
            }
          }}
        >
          {simulating ? "Stop" : "Start"} Sim
        </button>
        <button
          onClick={() => {
            const row = [];
            for (let i = 0; i < cols; i++) {
              row.push(
                Array.from(Array(rows), () => (Math.random() > 0.8 ? 1 : 0))
              );
            }

            setGrid(row);
          }}
        >
          Generate Random
        </button>
        <button
          onClick={() => {
            setGrid(emptyGrid(rows, cols));
          }}
        >
          Clear All
        </button>
      </div>

      {/* Simulation grid */}

      <div className="grid"
        id="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`
        }}
      >
        {
          grid.map((rows, i) => rows.map((cols, j) => (
            <div className="cell"
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: cellSize,
                height: cellSize,
                // backgroundColor: grid[i][j] ? 'var(--accent)' : 'var(--bg)',
                border: grid[i][j] ? '6px solid var(--accent)' : '1px solid var(--bgSec)'
              }}
            ></div>
          )))
        }
      </div>
    </div>
  );
}

export default App;
