import { act, renderHook } from "@testing-library/react-hooks";

import { Player, useTicTacToe } from "../useTicTacToeEngine";

jest.useFakeTimers();

describe("useTicTacToe Hook", () => {
  it("should initialize with an empty board and correct states", () => {
    const { result } = renderHook(() => useTicTacToe(true));
    expect(result.current.state.board).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    expect(result.current.state.isLoading).toBe(false);
    expect(result.current.state.winner).toBe(null);
  });

  it("should allow the player to make a move", () => {
    const { result } = renderHook(() => useTicTacToe(true));

    act(() => {
      result.current.makeMove(0, 0);
    });

    expect(result.current.state.board[0][0]).toBe(Player.Human);
  });

  it("should prevent moves on occupied spaces", () => {
    const { result } = renderHook(() => useTicTacToe(true));

    act(() => {
      result.current.makeMove(0, 0);
      result.current.makeMove(0, 0);
    });

    expect(result.current.state.board[0][0]).toBe(Player.Human);
  });

  it("should allow the computer to make a move after the player", () => {
    const { result } = renderHook(() => useTicTacToe(true));

    act(() => {
      result.current.makeMove(0, 0);
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.state.board.flat().includes(Player.Computer)).toBe(
      true,
    );
  });
});
