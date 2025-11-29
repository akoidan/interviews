import unittest

from py.balanced_binary_tree import Solution, TreeNode


class TestBalancedBinaryTree(unittest.TestCase):

    def test_simple(self):
        solution = Solution()
        head = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
        self.assertEqual(solution.isBalanced(head), true)


if __name__ == '__main__':
    unittest.main()