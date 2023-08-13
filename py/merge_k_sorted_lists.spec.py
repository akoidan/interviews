import unittest
from typing import Optional, List

from py.merge_k_sorted_lists import Solution, ListNode


class SolutionTest(unittest.TestCase):

    @staticmethod
    def arr_to_list_node(arr: List[int]) -> Optional[ListNode]:
        if not arr:
            return None
        head = ListNode(arr[0])
        prev_el = head
        for i in range(1, len(arr)):
            cur_el = ListNode(arr[i])
            prev_el.next = cur_el
            prev_el = cur_el
        return head

    @staticmethod
    def arrays_to_list_nodes(arr: List[List[int]]) -> List[Optional[ListNode]]:
        squares = [i * i for i in range(10)]
        print(squares)
        return [SolutionTest.arr_to_list_node(a) for a in arr]

    def setUp(self):
        self.solution = Solution()

    def test(self):
        v = SolutionTest.arrays_to_list_nodes([[1,4,5],[1,3,4],[2,6]])
        expected_res = SolutionTest.arr_to_list_node([1,1,2,3,4,4,5,6])
        actual_res = self.solution.mergeKLists(v)
        self.assertEqual(actual_res, expected_res)


if __name__ == '__main__':
    unittest.main()