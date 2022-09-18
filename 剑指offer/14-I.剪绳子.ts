/**
 * 剑指 Offer 14- I. 剪绳子
 *
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
 * 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1]可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 */

/**
 * 1.动态规划
 * 当 i≥2 时，假设对正整数 i拆分出的第一个正整数是 j（1≤j<i），则有以下两种方案：
 * 将 i 拆分成 j 和 i−j 的和，且 i−j 不再拆分成多个正整数，此时的乘积是 j×(i−j)；
 * 将 i 拆分成 j 和 i−j 的和，且 i−j 继续拆分成多个正整数，此时的乘积是 j×dp[i−j]。
 * 
 * [O(n^2),O(n)]
 */
function cuttingRope(n: number): number {
  const dp: number[] = [0, 0];
  for (let i = 2; i <= n; i++) {
    let curMax = 0;
    for (let j = 1; j < i; j++) {
      curMax = Math.max(curMax, Math.max(j * (i - j), j * dp[i - j]));
    }
    dp.push(curMax);
  }
  return dp[n];
}

/**
 * 2.数论
 * 任何大于1的数都可由2和3相加组成（根据奇偶证明）
 * 因为2*2=1*4，2*3>1*5, 所以将数字拆成2和3，能得到的积最大
 * 因为2*2*2<3*3, 所以3越多积越大
 *
 * [O(1),O(1)]
 */
function cuttingRope1(n: number): number {
  if (n <= 3) return n - 1;
  const quotient = Math.floor(n / 3);
  const remainder = n % 3;
  if (remainder == 0) {
    return Math.pow(3, quotient);
  } else if (remainder == 1) {
    return Math.pow(3, quotient - 1) * 4;
  } else {
    return Math.pow(3, quotient) * 2;
  }
}

console.log(cuttingRope(2));
