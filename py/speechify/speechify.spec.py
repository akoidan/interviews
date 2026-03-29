import unittest
from py.speechify.speechify import Solution

class SpeechifyTest(unittest.TestCase):

    def test_a(self):
        s = Solution()
        slide_window = s.subsets([1,3,-1,-3,5,3,6,7])
        self.assertEqual(slide_window, [])

if __name__ == '__main__':
    unittest.main()