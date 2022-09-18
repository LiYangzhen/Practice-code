/**
 * 剑指 Offer 18. 删除链表的节点
 *
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head?.val === val) {
    return head.next;
  }
  let node = head;
  while (node?.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
      return head;
    }
    node = node.next;
  }
  return head;
}
