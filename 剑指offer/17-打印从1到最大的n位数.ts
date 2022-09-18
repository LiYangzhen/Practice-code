/**
 * 剑指 Offer 17. 打印从1到最大的n位数
 *
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
 * 比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */

/**
 * 1.不考虑大数
 */
function printNumbers(n: number): number[] {
  return Array.from({ length: Math.pow(10, n) - 1 }).map((_, i) => i + 1);
}

/**
 * 2.考虑大数
 */
function printNumbers1(n: number): string[] {
  let result: string[] = [];
  const dfs = (r: string[], x: number) => {
    if (x === n) {
      return result.push(r.join(""));
    }
    for (let i = 0; i <= 9; ++i) {
      dfs([...r, "" + i], x + 1);
    }
  };
  dfs([], 0);
    result.shift();
  return result;
}

console.log(printNumbers1(1));
