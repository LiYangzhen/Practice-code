/**
 * 剑指 Offer 10- I. 斐波那契数列
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
 *
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 *
 * 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */

/**
 * 1.动态规划
 * [O(n),O(n)]
 */
function fib(n: number): number {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7);
  }
  return dp[n];
}

/**
 * 2.迭代
 * [O(n),O(1)]
 */
function fib1(n: number): number {
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  let c = a + b;
  for (let i = 3; i <= n; i++) {
    a = b;
    b = c;
    c = (a + b) % (1e9 + 7);
  }
  return c;
}

console.log(fib(44));
