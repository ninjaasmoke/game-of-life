import { useState } from 'react';
import { useContext, createContext } from 'react';

interface AppProp {
    gridSize: number,
    setGridSize: React.Dispatch<React.SetStateAction<number>> | null,
    cellSize: number,
    setCellSize: React.Dispatch<React.SetStateAction<number>> | null,
    emptyGrid: ((gridN?: number) => number[][]) | null,
    grid: number[][],
    setGrid: React.Dispatch<React.SetStateAction<number[][]>> | null,
    updateGridSize: (size: number) => void,
    updateGrid: (grid: number[][]) => void
}

const AppContext = createContext<AppProp>({
    gridSize: 20,
    setCellSize: null,
    setGridSize: null,
    cellSize: 20,
    emptyGrid: null,
    grid: [[]],
    setGrid: null,
    updateGridSize: (size: number) => { },
    updateGrid: (grid: number[][]) => { }
});

export default function AppWrapper({ children }: { children: any }) {
    const emptyGrid = (gridN: number = gridSize) => {
        const grid = [];
        for (let i = 0; i < gridN; i++) {
            grid.push(
                Array.from(Array(gridN), () => 0)
            );
        }
        return grid;
    }
    const [gridSize, setGridSize] = useState(30);

    const updateGridSize = (size: number) => {
        setGridSize(size);
    }

    const [cellSize, setCellSize] = useState(14);

    const [grid, setGrid] = useState<number[][]>(() => emptyGrid());

    const updateGrid = (grid: number[][]) => {
        setGrid(grid);
    }

    return (
        <AppContext.Provider
            value={{
                gridSize,
                setGridSize,
                cellSize,
                setCellSize,
                emptyGrid,
                grid,
                setGrid,
                updateGridSize,
                updateGrid
            }}>
            {children}
        </AppContext.Provider>
    )

}

export function useAppContext() {
    return useContext(AppContext);
}