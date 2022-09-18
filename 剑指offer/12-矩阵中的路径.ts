/**
 * 剑指 Offer 12. 矩阵中的路径
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，
 * 返回 true ；否则，返回 false。单词必须按照字母顺序，通过相邻的单元格内的字母构成，
 * 其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 */

/**
 * 1.递归回溯 (DFS)
 * [O(MN·3^L),O(min(L,MN))
 */
function exist(board: string[][], word: string): boolean {
  const dfs = function (i: number, j: number, index: number): boolean {
    // overflow or not match
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      (board[i] && board[i][j] !== word[index])
    ) {
      return false;
    }

    // exists
    if (index === word.length - 1) {
      return true;
    }

    // stage current value
    const currentValue = board[i][j];
    // set current value empty
    board[i][j] = "";
    const res =
      dfs(i - 1, j, index + 1) ||
      dfs(i + 1, j, index + 1) ||
      dfs(i, j - 1, index + 1) ||
      dfs(i, j + 1, index + 1);
    board[i][j] = currentValue;

    return res;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
