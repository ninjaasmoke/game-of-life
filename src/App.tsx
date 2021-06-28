import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { produce } from 'immer';


function App() {

  const [gridSize, setGridSize] = useState(20);

  const [cellSize, setCellSize] = useState(22);

  const emptyGrid = (gridN: number = gridSize) => {
    const grid = [];
    for (let i = 0; i < gridN; i++) {
      grid.push(
        Array.from(Array(gridN), () => 0)
      );
    }
    return grid;
  }



  const [grid, setGrid] = useState<number[][]>(() => emptyGrid());


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
        for (let i = 0; i < gridSize; i++) {
          for (let k = 0; k < gridSize; k++) {
            let neighbors = 0;
            neighOps.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < gridSize && newK >= 0 && newK < gridSize) {
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
            for (let i = 0; i < gridSize; i++) {
              row.push(
                Array.from(Array(gridSize), () => (Math.random() > 0.8 ? 1 : 0))
              );
            }

            setGrid(row);
          }}
        >
          Generate Random
        </button>
        <button
          onClick={() => {
            setGrid(emptyGrid(gridSize));
          }}
        >
          Clear All
        </button>
      </div>

      {/* Simulation grid */}

      <div className="grid"
        id="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, ${cellSize + 1}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${cellSize + 1}px)`,
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
