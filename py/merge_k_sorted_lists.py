import heapq
from typing import List, Optional


class ListNode:
    def __eq__(self, other):
        return other is not None and other.val == self.val

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class NodeInfo:
    def __eq__(self, other):
        return other is not None and other.node.val == self.node.val

    def __gt__(self, other):
        return self.node.val > other.node.val

    def __lt__(self, other):
        return self.node.val < other.node.val

    def __init__(self, val: ListNode, pos_in_input: int):
        self.node = val
        self.pos_in_input = pos_in_input


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        list_info: [NodeInfo] = []
        for i, current_list in enumerate(lists):
            if current_list:
                info = NodeInfo(current_list, i)
                heapq.heappush(list_info, info)

        if not list_info:
            return None

        min_value_node: NodeInfo = heapq.heappop(list_info)
        head: ListNode = ListNode(min_value_node.node.val)
        prev_el: ListNode = head
        if lists[min_value_node.pos_in_input].next is not None:
            input__next = lists[min_value_node.pos_in_input].next
            heapq.heappush(list_info, NodeInfo(input__next, min_value_node.pos_in_input))

        while list_info:
            min_value_node = heapq.heappop(list_info)
            prev_el.next = ListNode(min_value_node.node.val)
            prev_el = prev_el.next
            if min_value_node.node.next is not None:
                heapq.heappush(list_info, NodeInfo(min_value_node.node.next, min_value_node.pos_in_input))

        return head
