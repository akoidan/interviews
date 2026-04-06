package permutationinstring

// checkInclusion returns true if any rearrangement of s1's characters exists as a contiguous substring of s2.
// https://neetcode.io/problems/permutation-string/question?list=neetcode150
func checkInclusion(s1 string, s2 string) bool {
	required := [26]int{}
	for _, s := range s1 {
		required[s-'a']++
	}
	found := [26]int{}
	foundCount := 0
	for i, s := range s2 {
		if required[s-'a'] == 0 || found[s-'a'] >= required[s-'a'] {
			if rune(s2[i-foundCount]) != s {
				found = [26]int{}
				foundCount = 0
			}
			continue
		}
		foundCount++
		found[s-'a']++
		if found == required {
			return true
		}
	}
	return false
}
