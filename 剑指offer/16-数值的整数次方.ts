/**
 * 剑指 Offer 16. 数值的整数次方
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
 */

/**
 * 1.快速幂 + 迭代
 * 当指数 nn 为负数时，我们可以计算 x^-n 再取倒数得到结果，因此我们只需要考虑 n 为自然数的情况。
 *
 * [O(logn),O(1)]
 */
function myPow(x: number, n: number): number {
  if (x === 0 && n === 0) return 1;
  if (x === 0) return 0;
  let ans = 1;
  let num = n;
  if (num < 0) {
    num = -num;
    x = 1 / x;
  }
  while (num) {
    if (num & 1) {
      ans *= x;
    }
    x *= x;
    num >>>= 1;
  }
  return ans;
}

console.log(myPow(2.1000, 3));
