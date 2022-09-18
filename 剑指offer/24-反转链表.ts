/**
 * 剑指 Offer 24. 反转链表
 *
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 */

import { ListNode } from "./types";

/**
 * 1.迭代
 * [O(n),O(1)]
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  while (head != null) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
}
