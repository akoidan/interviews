package groupanagrams

func groupAnagrams(strs []string) [][]string {
	results := [][]string{}
	allString := make(map[[26]int][]string)
	for _, str := range strs {
		key := [26]int{}
		for _, c := range str {
			key[int(c)-int('a')]++
		}
		allString[key] = append(allString[key], str)
	}
	for _, v := range allString {
		results = append(results, v)
	}
	return results
}
