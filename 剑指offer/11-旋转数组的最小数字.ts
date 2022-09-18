/**
 * 剑指 Offer 11. 旋转数组的最小数字
 *
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 给你一个可能存在重复元素值的数组 numbers，它原来是一个升序排列的数组，
 * 并按上述情形进行了一次旋转。请返回旋转数组的最小元素。
 *
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。
 *
 * 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次的结果为
 * 数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
 */

/**
 * 1.二分寻找旋转点
 * [O(logn),O(1)]
 */

function minArray(numbers: number[]): number {
  const n = numbers.length;
  let l = 0,
    r = n - 1;
  while (l < r && numbers[0] == numbers[r]) r--;
  while (l < r) {
    const mid = (l + r + 1) >> 1;
    if (numbers[mid] >= numbers[0]) l = mid;
    else r = mid - 1;
  }
  return r + 1 < n ? numbers[r + 1] : numbers[0];
}

console.log(minArray([3, 4, 5, 1, 2]));
