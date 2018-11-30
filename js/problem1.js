/** 
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. 
**/
var arr = [10, 15, 3, 7];
var k 	= 17;

function check(arr,k){
	var result = false;
	for (var i=0; i < arr.length; i++){
		for (var j=i+1; j < arr.length; j++){
			result = arr[i] + arr[j] == k;
			console.log(`${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`);		
		if (result){
			break;
		}
	}
	return result;
}

console.log(check(arr,k))