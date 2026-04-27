// Word Search II - https://leetcode.com/problems/word-search-ii/
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells (horizontally or vertically).
// The same cell may not be used more than once in a word.
package searchforwordii

type Node struct {
	Children [26]*Node // hashmap where key is character (26 of english character) can be represented with array
	IsEnd    bool
	Word     string
	Count    int
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
	root := getTrie(words)
	// s, _ := json.MarshalIndent(root, " ", "  ")

	exists := make(map[string]bool)
	var dfs func(point Point, node *Node)
	dfs = func(point Point, node *Node) {
		if point.x < 0 || point.y < 0 || point.x >= width || point.y >= height ||
			board[point.y][point.x] == '#' || node.Count == 0 { // # - node is visited on current path
			return
		}
		char := rune(board[point.y][point.x])
		nextNode := node.Children[char-'a']
		if nextNode == nil {
			return
		}

		if !exists[nextNode.Word] && nextNode.IsEnd {
			exists[nextNode.Word] = true
			// --- eliminate redundant branches
			// we keep how many times each character occurs at this position for each word
			// if that count is 0, this means that we dont need to explore brancher further,
			// the words next to this char has been already added
			cur := root
			for _, ch := range nextNode.Word {
				cur.Count--
				cur = cur.Children[ch-'a']
			}
			// ----
		}
		tmp := board[point.y][point.x]
		board[point.y][point.x] = '#' // mark node as visited
		// it's performance less heavy due to we dont need rehashing like in set
		dfs(Point{point.y - 1, point.x}, nextNode)
		dfs(Point{point.y, point.x - 1}, nextNode)
		dfs(Point{point.y + 1, point.x}, nextNode)
		dfs(Point{point.y, point.x + 1}, nextNode)
		// mark node unvisited for further searches
		board[point.y][point.x] = tmp
	}

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			dfs(Point{y, x}, root)
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

func getTrie(words []string) *Node {
	root := Node{
		Children: [26]*Node{},
		IsEnd:    false,
		Word:     "",
		Count:    len(words) + 1,
	}
	for _, word := range words {
		cur := &root
		for index, char := range word {
			newNode := cur.Children[char-'a']
			isEnd := index == len(word)-1
			if newNode == nil {
				cur.Children[char-'a'] = &Node{
					Children: [26]*Node{},
					IsEnd:    isEnd,
					Count:    0,
					Word:     cur.Word + string(char),
				}
			}
			cur = cur.Children[char-'a']
			cur.IsEnd = cur.IsEnd || isEnd
			cur.Count++
		}
	}
	return &root
}

//["a","b"]
//["a","a"]
