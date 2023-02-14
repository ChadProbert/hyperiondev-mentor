class Solution:
    def group_anagrams(self, strs):

        result = {}

        for i in strs:
            x = "".join(sorted(i))

            if x in result:
                result[x].append(i)

            else:
                result[x] = [i]

        return list(result.values())


solution = Solution()
print(solution.group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

# Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

# * This file contains the simulated student's code after the changes specified in CodeReview.md were applied
