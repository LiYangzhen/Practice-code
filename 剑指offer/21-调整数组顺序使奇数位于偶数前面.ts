/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 */

/**
 * 1.双指针法
 * 结果稳定
 * 
 * [O(n),O(1)]
 */
function exchange(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n).fill(0);
  let left = 0,
    right = n - 1;
  for (const num of nums) {
    if (num & 1) {
      res[left++] = num;
    } else {
      res[right--] = num;
    }
  }
  return res;
}
