/**
 * 剑指 Offer 15. 二进制中1的个数
 *
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），
 * 返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量）。
 */

// ts不支持无符号数，以下代码仅供阅读
function hammingWeight(n: number) {
  let ans = 0,
    index = 31;
  while (index-- != 0) {
    if ((n & 1) == 1) {
      ans++;
    }
    n >>>= 1;
  }
  return ans + (n & 1);
}
