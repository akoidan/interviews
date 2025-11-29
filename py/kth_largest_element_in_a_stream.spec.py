import unittest

from py.kth_largest_element_in_a_stream import KthLargest


class TestKLargestElement(unittest.TestCase):

    def test_simple(self):
        kth_largest = KthLargest(3, [4,5,8,2])
        self.assertEqual(kth_largest.add(3), 4)
        self.assertEqual(kth_largest.add(5), 5)
        self.assertEqual(kth_largest.add(10), 5)
        self.assertEqual(kth_largest.add(9), 8)
        self.assertEqual(kth_largest.add(4), 8)

if __name__ == '__main__':
    unittest.main()