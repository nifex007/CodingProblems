''' 
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. 
'''


def findpair(list1, k):
	for i in range(0, len(list1)):		
		for j in range(1, len(list1)):
			print(list1[i], list1[j])
			if k == list1[i] + list1[j]:				
				return True
		return False;
	

print(findpair(nums, k)) #True