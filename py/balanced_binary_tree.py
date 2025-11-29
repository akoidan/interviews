# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:

    def get_height(self, element: Optional[TreeNode]) -> int:
        if element is None:
            return 0


    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        if abs(self.get_height(root.left) - self.get_height(root.right)) > 1:
            return False
        return True
