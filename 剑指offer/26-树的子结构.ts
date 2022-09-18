/**
 * 剑指 Offer 26. 树的子结构
 *
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 * B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 */

/**
 * 1.先序遍历
 *
 * [O(MN),O(M)]
 */
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  return (
    A !== null &&
    B !== null &&
    (walkTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
  );
}

function walkTree(A: TreeNode | null, B: TreeNode | null): boolean {
  if (B === null) return true;
  if (A === null || A.val !== B.val) return false;
  return walkTree(A.left, B.left) && walkTree(A.right, B.right);
}
