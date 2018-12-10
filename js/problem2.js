/**
This problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
**/

function compute(arr){
	var returned_arr = [];
	for(var i=0; i<=arr.length - 1; i++){
		var product = 1;					
			for (var j=0; j<=arr.length - 1; j++){
				if( arr[i] == arr[j]){
					continue;
				}
				product = product * arr[j];				
			}
			returned_arr.push(product);
			 // console.log(returned_arr);
		}
		
		return returned_arr;
}


console.log(compute([3, 2, 1]));