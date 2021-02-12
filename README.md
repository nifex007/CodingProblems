# CodingProblems

1. Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
	- For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
		- [answer in js](js/problem1.js)
		- [answer in py](py/problem1.py)
2. Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
	- For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
		- [answer in js](js/problem2.js)		
3. You have a friend who runs a bakery. They are competing to be the most efficient bakery in their city.  They are very precise about the amount of each ingredient that they put into their food, and they would like to know exactly  how much of each ingredient will remain after following each recipe.  
	- Your algorithm should accept 2 parameters:
	An array of integers that will represent the proportion of the recipe made up by an item (e.g. the recipe will be a[1] parts item 1 and a[2] parts of item 2.
	An array of integers that will represent the number of grams available of each item. Your algorithm should output an array of integers that will represent the number of grams remaining of each ingredient after making the largest item possible, based on their recipe.
		- [answer in js](js/problem3.js)
			-   |    Expected array Inputs    | Expected Result       |
				| ------------- |:-------------:|
				| [1, 2, 3], [25, 18, 72]   | [6, 0, 45]|
				| [1, 3, 2], [25, 18, 72]   | [19, 0, 60]|
				| [1, 6, 2], [25, 72, 18]   | [16, 18, 0]|


4. Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
Examples
	- 	Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
			- Output: 1,4,13
	- 	Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
	 		- Output: 1,9,10
		- [answer in js](js/findIntersection.js)
