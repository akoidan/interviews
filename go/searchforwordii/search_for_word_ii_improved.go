type Node struct {
		Children [26]*Node
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
																		Children: [26]*Node{},
																				IsEnd:    false,
																						Word:     "",
																							}
																								exists := make(map[string]bool)
																									for _, word := range words {
																											cur := &root
																													for index, char := range word {
																																fmt.Printf("%d,", char)
																																			newNode := cur.Children[char-'a']
																																						isEnd := index == len(word)-1
																																									if newNode == nil {
																																													cur.Children[char-'a'] = &Node{
																																																		Children: [26]*Node{},
																																																							IsEnd:    isEnd,
																																																												Word:     cur.Word + string(char),
																																																																}
																																																																			}
																																																																						cur = cur.Children[char-'a']
																																																																									cur.IsEnd = cur.IsEnd || isEnd
																																																																											}
																																																																												}
																																																																													// s, _ := json.MarshalIndent(root, " ", "  ")


																																																																														visited := make(map[Point]bool, width*height)
																																																																															var dfs func(point Point, node *Node)
																																																																																fmt.Printf("\n----\n")
																																																																																	dfs = func(point Point, node *Node) {
																																																																																			if visited[point] || point.x < 0 || point.y < 0 || point.x >= width || point.y >= height {
																																																																																						return
																																																																																								}
																																																																																										char := rune(board[point.y][point.x])
																																																																																												nextNode := node.Children[char -'a']
																																																																																														if nextNode == nil {
																																																																																																	fmt.Printf("null\n")
																																																																																																				return
																																																																																																						}

																																																																																																								if nextNode.IsEnd {
																																																																																																											exists[nextNode.Word] = true
																																																																																																													}
																																																																																																															visited[point] = true
																																																																																																																	dfs(Point{point.y - 1, point.x}, nextNode)
																																																																																																																			dfs(Point{point.y, point.x - 1}, nextNode)
																																																																																																																					dfs(Point{point.y + 1, point.x}, nextNode)
																																																																																																																							dfs(Point{point.y, point.x + 1}, nextNode)
																																																																																																																									visited[point] = false
																																																																																																																										}

																																																																																																																											for y := 0; y < height; y++ {
																																																																																																																													for x := 0; x < width; x++ {
																																																																																																																																fmt.Printf("%d,%d\n", y,x)	
																																																																																																																																			dfs(Point{y, x}, &root)
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


																																																																																																																																																	//["a","b"]
																																																																																																																																																	//["a","a"]
}
