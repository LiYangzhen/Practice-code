/**
 * 剑指 Offer 06. 从尾到头打印链表
 *
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reversePrint(head: ListNode | null): number[] {
  let node = head;
  const list: number[] = [];
  while (node) {
    list.unshift(node.val);
    node = node.next;
  }
  return list;
}

