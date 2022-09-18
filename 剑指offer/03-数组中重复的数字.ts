/**
 * 剑指 Offer 03. 数组中重复的数字
 *
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 */

/**
 * 1.使用hash表暴力对比
 * [O(n^2),O(n)]
 */
function findRepeatNumber(nums: number[]): number {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
  return -1;
}

/**
 * 2.改变下标对比
 * [O(n),O(1)]
 */
function findRepeatNumber1(nums: number[]): number {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === i) i++;
    else if (nums[i] === nums[nums[i]]) {
      return nums[i];
    } else {
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
}

console.log(findRepeatNumber1([3, 4, 2, 1, 1, 0]));

