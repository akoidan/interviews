package longestrepeatingcharacterreplacement

func characterReplacement(s string, k int) int {
	chars := make(map[rune]int)
	l := 0
	mostF := rune(s[0])
	maxSize := 0
	for r, rChar := range s {
		if _, ok := chars[rChar]; ok {
			chars[rChar]++
			if chars[rChar] > chars[mostF] {
				mostF = rChar
			}
		} else {
			chars[rChar] = 1
		}
		for r-l+1-chars[mostF] > k {
			chars[rune(s[l])]--
			l++
		}
		maxSize = max(maxSize, r-l+1)
	}
	return maxSize
}
