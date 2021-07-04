# Conway's Game of Life

This is a React Typescript project bootstrapped with [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html).

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. 
It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. 
One interacts with the Game of Life by creating an initial configuration and observing how it evolves. 

It is Turing complete and can simulate a universal constructor or any other Turing machine.

[# Rules](#rules) <br>
[# What I learnt](#what-i-learnt)

## Rules

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
```
1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
```

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
```
1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
```   
      
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.


[Read More](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

[Visit](https://ninjaasmoke.github.io/game-of-life/)

## What I learnt

1. Never used ```useCallback``` React hook.

   * This helped me understand exactly when to use this hook.

2. How to handle grid type data better.
3. How to [properly mutate state](https://github.com/ninjaasmoke/game-of-life/blob/f7ca49f5e3a25c6907556770e38934730f989492/src/App.tsx#L38) in React using [Immer](https://www.npmjs.com/package/immer).
4. How to work with [ChartJS](https://www.chartjs.org/).
5. Game of Life algorithm
