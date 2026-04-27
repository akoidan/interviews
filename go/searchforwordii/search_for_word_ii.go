// Word Search II - https://leetcode.com/problems/word-search-ii/
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells (horizontally or vertically).
// The same cell may not be used more than once in a word.
package searchforwordii

import (
	"fmt"
)

type Node struct {
	Children map[rune]*Node
	IsEnd    bool
	Word     string
}

type Point struct {
	y, x int
}

func findWords(board [][]byte, words []string) []string {
	height := len(board)
	if height == 0 {
		return []string{}
	}
	width := len(board[0])
	if width == 0 {
		return []string{}
	}
	root := Node{
		Children: make(map[rune]*Node),
		IsEnd:    false,
		Word:     "",
	}
	exists := make(map[string]bool)
	for _, word := range words {
		cur := &root
		for index, char := range word {
			fmt.Printf("%d,", char)
			_, ok := cur.Children[char]
			isEnd := index == len(word)-1
			if !ok {
				cur.Children[char] = &Node{
					Children: make(map[rune]*Node),
					IsEnd:    isEnd,
					Word:     cur.Word + string(char),
				}
			}
			cur = cur.Children[char]
			cur.IsEnd = cur.IsEnd || isEnd
		}
	}

	var dfs func(point Point, visited map[Point]bool, node *Node)
	dfs = func(point Point, visited map[Point]bool, node *Node) {
		if visited[point] || point.x < 0 || point.y < 0 || point.x >= width || point.y >= height {
			return
		}
		visited[point] = true
		char := rune(board[point.y][point.x])
		nextNode, ok := node.Children[char]
		if !ok {
			return
		}

		if nextNode.IsEnd {
			exists[nextNode.Word] = true
		}

		dfs(Point{point.y - 1, point.x}, cloneMap(visited), nextNode)
		dfs(Point{point.y, point.x - 1}, cloneMap(visited), nextNode)
		dfs(Point{point.y + 1, point.x}, cloneMap(visited), nextNode)
		dfs(Point{point.y, point.x + 1}, cloneMap(visited), nextNode)
	}

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			dfs(Point{y, x}, make(map[Point]bool), &root)
		}
	}
	res := []string{}
	for _, word := range words {
		if exists[word] {
			res = append(res, word)
		}
	}
	return res
}

func cloneMap(in map[Point]bool) map[Point]bool {
	res := map[Point]bool{}
	for k, v := range in {
		res[k] = v
	}
	return res
}

//["a","b"]
//["a","a"]
