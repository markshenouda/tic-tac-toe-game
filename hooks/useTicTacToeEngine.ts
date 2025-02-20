import { useEffect, useRef, useState } from "react";

export enum Player {
  Human = "X",
  Computer = "O",
  None = "",
}

export type Board = Player[][];

export type GameState = {
  board: Board;
  isLoading: boolean;
  winner: Player | "Draw" | null;
};

const emptyBoard = (): Board =>
  Array(3)
    .fill(null)
    .map(() => Array(3).fill(Player.None));

const checkWinner = (board: Board): Player | "Draw" | null => {
  const lines = [
    // Rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // Columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // Diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (
      board[a[0]][a[1]] !== Player.None &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]];
    }
  }

  return board.flat().includes(Player.None) ? null : "Draw";
};

const minimax = (
  board: Board,
  depth: number,
  isMaximizing: boolean,
): number => {
  const winner = checkWinner(board);
  if (winner === Player.Computer) return 10 - depth;
  if (winner === Player.Human) return depth - 10;
  if (winner === "Draw") return 0;

  const scores: number[] = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === Player.None) {
        board[i][j] = isMaximizing ? Player.Computer : Player.Human;
        scores.push(minimax(board, depth + 1, !isMaximizing));
        board[i][j] = Player.None;
      }
    }
  }
  return isMaximizing ? Math.max(...scores) : Math.min(...scores);
};

const bestMove = (board: Board): [number, number] => {
  let bestScore = -Infinity;
  let move: [number, number] = [-1, -1];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === Player.None) {
        board[i][j] = Player.Computer;
        const score = minimax(board, 0, false);
        board[i][j] = Player.None;
        if (score > bestScore) {
          bestScore = score;
          move = [i, j];
        }
      }
    }
  }
  return move;
};

export const useTicTacToe = (playerFirst: boolean) => {
  const [state, setState] = useState<GameState>({
    board: emptyBoard(),
    isLoading: !playerFirst,
    winner: null,
  });

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!playerFirst) {
      timerRef.current = setTimeout(() => makeComputerMove(), 1000);
    }

    return () => clearTimeout(timerRef.current);
  }, [timerRef, playerFirst]);

  const makeMove = (row: number, col: number) => {
    if (
      state.board[row][col] !== Player.None ||
      state.isLoading ||
      state.winner
    )
      return;

    const newBoard = state.board.map((row) => [...row]);
    newBoard[row][col] = Player.Human;
    const winner = checkWinner(newBoard);

    setState({ board: newBoard, isLoading: !winner, winner });

    if (!winner) {
      setTimeout(() => makeComputerMove(), 1000);
    }
  };

  const makeComputerMove = () => {
    setState((prev) => {
      if (prev.winner) return prev;

      const move = bestMove(prev.board);
      if (move[0] === -1) return prev;

      const newBoard = prev.board.map((row) => [...row]);
      newBoard[move[0]][move[1]] = Player.Computer;
      const winner = checkWinner(newBoard);

      return { board: newBoard, isLoading: false, winner };
    });
  };

  return { state, makeMove };
};
