///LAST 3 ARE JUST BONUS

/*
1.(in class he gave a dif way) Write a function which takes an array of numbers and returns the mode of that array.
[2, 4, 4, 4, 6, 6, 1] - > 4
[0, 0, 0, 10] -> 0
[1] -> 1
*/

function mode(arr) {
	var counts = [];
	var i, j;
	var maxcount = 1;
	var maxnum = arr[0];


var testArray = [2, 4, 4, 4, 6, 6, 1]


	//count the numbers in arr, into counts
	for (i = 0; i < arr.length; i++) {
		if (counts[arr[i]] === undefined) {
			counts[arr[i]] = 0;
		}
		counts[arr[i]] = counts[arr[i]] + 1;
	}

	//find the max number in the counts array
	for (j = 0; j < counts.length; j++) {
		if (counts[j] > maxcount) {
			maxcount = counts[j];
			maxnum = j;
		}
	}
	return maxnum;
}

console.log(mode([2, 4, 4, 4, 6, 6, 1]) === 4)

;
console.log(mode([0, 0, 0, 10]) === 0);
console.log(mode([1]) === 1);


//
// 2. Write a funciton which, given a year as a number, returns whether that number is a leap year.
//
// 2000 -> true
// 1900 -> false
// 2016 -> true

year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);


//
// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

var testArray = [1,2,5]
var firstMissingInt = function(numbers) {
  for ( var i = 1; true; i++) {
		//true?
    if ( numbers.indexOf(i) === -1 ) {
      return i
    }
  }

}
console.log(firstMissingINt(testArray))


/*
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]

https://stackoverflow.com/questions/13912004/remove-duplicates-from-integer-array?answertab=votes#tab-top
*/

var list = [1,1,2,3,1,2,3];


var newarr = (function(list){
  var m = {}
	var newlist = []
	//m = empty object
	//assigns newlist to an empty array
  for (var i=0; i<list.length; i++) {
		//Iterates, or runs through the array, through the "list" array by one increment (++) at a time
		var v = list[i];
		//Assigns a variable to each individual iteration through the array/"list" (++), that you will then push the non-duplicated instance of the array into
    if (!m[v]) {
		//Conditional statement that determines whether or not the current increment of the array/"list" is already in the "m" object
      newlist.push(v);
		//If the increment of the "list" array is not (!) already within the object "m", use the built in JavaScript push method to add it to the new array
      m[v]=true;
		//If the condition is met or "true", the if/else function reads it and then does nothing with it since it doesn't satisfy the condition of being a new instance/or that it isn't a duplicate
    }
  }
	//A function has to return something at the end, so once the for loop has run through the entirety of the array, using the length method, return the new array, or "newlist"
  return newlist;
})(arr);




var list = [1,4,4,4,2,2,4,4,4];



/*
5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

"The quick brown fox" -> "Hetay uickqay rownbay oxfay".

(source: https://adriann.github.io/programming_problems.html)
*/

function translate(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else {
    // Find how many consonants before the firs vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
/*
6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
[], [] -> true
[2, 3, 4], [1, 2, 3] -> false
["a", "c", "b"], ["a", "b", "c"] -> true
[1, 1, 1], [1, 1, 1, 1] -> false
*/

/*
7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
[1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
[1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
*/


/*
8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

-> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
-> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
*/

/*
9. Write a function which takes two sorted lists and merges them into a new sorted list.

[1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
[], [] -> []
[-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]

(Source: https://adriann.github.io/programming_problems.html)
*/

/*
10. Write a function which, given an array, determines the subarray with the largest sum.

[1, 1, 1, -1] -> [1, 1, 1]
[1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
[2, 2, -10, 5, -10, 2, 2] -> [5]
[1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]



*/
//in class and not finished

var numbers = [1, 5, -4, 3, 2, -3]
var largestSubArray = function(inputArray, subSize){
		var start = 0
		for ( var i = 0; i < inputArray.length - subSize; i++ ){
				for ( var j = start; j < start+subSize; i++ )
				console.log(j)
		}
			 {


		}
}

largestSubArray(numbers, 3)





Old answer from Ex10
function returnSubArr(arr) {
	var sumOfStuff = 0;
	for (var i = Things.length - 1; i >= 0; i--) {
		for (var j = 0; j < arr.length; j++) {
			if (sumOfStuff < sumArr(arr.slice(i,j)))
			sumOfStuff = sumArr(arr.slice(i,j));
		}

	}
	return sumOfStuff
}


function sumArr(arr) {
	var subArray
}

(Source: http://venus.cs.qc.edu/~ryba/cs111/Array.pdf with edits, which may no longer be accessable)



/*
11. One way of encoding a message is called a "square code". Given a message like:

"Have a nice day!"

We determine an appropriate size of a square or rectangle to contain this message without spaces like so:

have
anic
eday
!

We then read the square in columns, which gives us our encoded message:

hae! and via ecy

Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.

(source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)

Raph didnt finish in class and 12
*/

var inputString = "Have a nice day!"
var square = function(input){


		// consol.log(root)
		inputAsArray = input.split('')
		inputAsArray.forEach.('')
		var root = Math.sqrt(inputAsArray.length)
		if (root ! == Math.floor(root) ){
			root++
		}

		var output = [ ]
		for ( var i = ; i < root; i++)


	for ( var i = 0; i < output.length; i++ ) {
			for ( var j = 0; j < 4; j++ ) {
				output[i].push(inputAsArray.shift())
			}
	}

	console.log(output)
	for ( var i = 0; i < output.length; i++) {
			output[i] = output[i].join('')

	for ( var i = 0; i < output.length; i++) {
			output[i] = output[i].join('')

}
console.log(square(inputString))

var unsquare= function (input)() {
		return input.split('\n').join('')
}
/*
12. Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur.

Example output:
th 2.37%
in 2.20%
fj 2.00%
...


(source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)
*/



////////////////////////////////////////

//IN class functions assign more important
//'twins' problem
var input = []
var badInput = []
var twins = function(inputString){
	if ( inputString.length % 2 !==0 ) {
		return false
	}
	for ( var i = 0; i < inputString.length; i +=2 ) {
		if ( inputString[i]  !==inputString[i+1] ) {
			return false
		}
	}
		return true
}

conslole.log (twins(input))
onslole.logtwins ((badInput))
onslole.logtwins ((oddElements))
