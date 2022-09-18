/**
 * 剑指 Offer 04. 二维数组中查找
 *
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 */


/**
 * 1.区间缩小
 * 将矩阵逆时针旋转 45° ，并将其转化为图形式，发现其类似于二叉搜索树，
 * 即对于每个元素，其左分支元素更小、右分支元素更大。
 * [O(n+m),O(1)]
 */
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  let i = matrix.length - 1;
  let j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      i--;
    }
  }
  return false;
}

console.log(
  findNumberIn2DArray(
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ],
    19
  )
);
