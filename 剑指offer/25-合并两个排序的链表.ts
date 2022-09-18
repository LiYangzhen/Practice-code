/**
 * 剑指 Offer 25. 合并两个排序的链表
 *
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 */

import { ListNode } from "./types";

/**
 * 1.两路归并迭代
 * 
 * [O(m+n),O(1)]
 */
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  const h = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if (l1) {
    head.next = l1;
  }
  if (l2) {
    head.next = l2;
  }
  return h.next;
}
