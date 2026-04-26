type Node struct {
	Children map[rune]Node 
	IsEnd bool
}

type Point struct {
	y,x int
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
	root := Node {
		Children: make(map[rune]Node),
	}
	exists := make(map[string]bool)
    for _, word := range words {
		cur := root
		for index, char := range word {
			fmt.Printf("%d,", char)
			currValue, ok := cur.Children[char]
			if !ok {
				cur.Children[char] = Node {
					Children: make(map[rune]Node),
					IsEnd: index == len(word) -1,
				}
			} else {
				currValue.IsEnd = currValue.IsEnd || index == len(word) -1
			}
			cur = cur.Children[char]
		}
		fmt.Printf("\n")
	}
	fmt.Printf("\n\n\n")

	// b, _ := json.MarshalIndent(root, "", "  ")
	// fmt.Println("???")
	// fmt.Println(string(b))
	// fmt.Println("???")
	var dfs func(point Point, visited map[Point]bool, node Node, s string) 
	dfs = func(point Point, visited map[Point]bool, node Node, s string) {
		if visited[point] || point.x < 0 || point.y < 0 || point.x >= width || point.y >= height {
			fmt.Printf("%s%v!", s, point)
			return
		}
		visited[point] = true
		char := rune(board[point.y][point.x])
		nextNode, ok := node.Children[char]
		fmt.Printf("===%v===", char)
		if !ok {
			fmt.Printf("%s%v|",s, point)
			return
		}
		fmt.Printf("%s%v\n", s,point)	
		if nextNode.IsEnd {
			exists[s+string(char)] = true
		}
		
		dfs(Point{point.y-1, point.x}, cloneMap(visited), nextNode, s + string(char))
		dfs(Point{point.y, point.x-1}, cloneMap(visited), nextNode, s + string(char))
		dfs(Point{point.y+1, point.x}, cloneMap(visited), nextNode, s + string(char))
		dfs(Point{point.y, point.x+1}, cloneMap(visited), nextNode, s + string(char))
	}

	for y := 0; y< height; y++ {
		for x := 0; x< width; x++ {
			dfs(Point{y,x}, make(map[Point]bool), root, "") 
			fmt.Printf("\n\n")
		}
	}
	res := []string {}
	for k, _ := range exists {
		res = append(res, k)
	}
	return res
}

func cloneMap(in map[Point]bool) map[Point]bool {
	res := map[Point]bool{}
	for k,v := range in {
		res[k] = v
	}
	return res
}
