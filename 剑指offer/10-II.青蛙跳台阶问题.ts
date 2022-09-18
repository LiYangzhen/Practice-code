/**
 * 剑指 Offer 10- II. 青蛙跳台阶问题
 *
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */

function numWays(n: number): number {
  if (n <= 1) {
    return 1;
  }
  let a = 1;
  let b = 1;
  let c = a + b;
  for (let i = 3; i <= n; i++) {
    a = b;
    b = c;
    c = (a + b) % (1e9 + 7);
  }
  return c;
}
