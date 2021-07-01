import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { produce } from 'immer';
import SideBar from './SideBar';
import { useAppContext } from './AppContext';


function App() {
  const {
    gridSize,
    cellSize,
    emptyGrid,
    grid,
    setGrid,
    updateGrid } = useAppContext();
  const neighOps = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const [simulating, setSimulating] = useState(false);

  const simRef = useRef(simulating);
  simRef.current = simulating;

  const startSimulation = useCallback(() => {
    if (!simRef.current) {
      return;
    }

    setGrid && setGrid((grid) => {
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
    <>
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

              updateGrid(row);
            }}
          >
            Generate Random
          </button>
          <button
            onClick={() => {
              emptyGrid && updateGrid(emptyGrid(gridSize));
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
                  updateGrid(newGrid);
                }}
                style={{
                  width: cellSize,
                  height: cellSize,
                  // backgroundColor: grid[i][j] ? 'var(--accent)' : 'var(--bg)',
                  border: grid[i][j] ? '7px solid var(--accent)' : '1px solid var(--bgSec)'
                }}
              ></div>
            )))
          }
        </div>

        {/* Options */}

        <SideBar />

      </div>
      <div className="smolscreen">
        <p>Smol screen</p>
        <img src="https://icon2.cleanpng.com/20180401/zww/kisspng-shiba-inu-dogecoin-clip-art-doge-5ac19a4e7ef1f4.89995344152263739052.jpg" alt="" />
        <span>Fake png :(</span>
      </div>
    </>
  );
}

export default App;
