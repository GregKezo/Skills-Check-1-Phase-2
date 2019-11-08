//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Write a function called dragonMapper that takes in an 
//array and maps over each element, adding the string 
//'...here be dragons' to the end of each element. 
//dragonMapper should return the the new array. You should
//use the built-in array method .map
  
  //Code here

const dragonMapper = (arr) => {
  return arr.map(ele => `${ele}...here be dragons` )
}


//////////////////PROBLEM 2////////////////////

//Write a function called cookieLoversOnly that takes 
//in an array and filters out every object that
//does NOT have the key favoriteCookie.
//cookieLoversOnly should return the filtered array.
  
  //Code here
  
const cookieLoversOnly = arr => arr.filter( elem => elem.favoriteCookie !== undefined )



//////////////////PROBLEM 3////////////////////

//Write a function called changeValue that takes 
//in an array, and a callback function.
//changeValue should invoke the callback function 
//for every element in the array. 
//changeValue should pass the current element into 
//the callback function as an argument every time it is invoked.
//Hint: there is an array method for this.


  //Code here

const changeValue = (arr, cb) => {
  arr.forEach(callback = ele => {
    cb(ele)
  })
  return arr
}

//////////////////PROBLEM 4////////////////////

//Write a function called findProduct that takes in 
//an array, and uses .reduce to find the product of 
//the elements (here the word product means the result 
//of multiplying all the elements together)
//Return the product.
  
  //Code here
const findProduct = arr => arr.reduce((acc, curr) => acc * curr)
  

//////////////////PROBLEM 5////////////////////

//Write a function called cipherize that takes in 
//an array, and a string. It should use the 
//array method .indexOf to find the index of the passed-in 
//string in the array. Then, it should use the method .charAt
//to find the character at that index, in the string. 
//Return that character.

//EX: cipherize(["hello", "world", "wide", "web"], "wide")
// index of string in the array: 2
// character at index 2 of "wide": "d"
// cipherize will return: "d"

  //Code here
const cipherize = (arr, str) => {
  let position = arr.indexOf(str)
  let strArr = arr[position].charAt(position)
  return strArr
}


//////////////////PROBLEM 6////////////////////

//Write a function called reverseMe that takes in 
//a string, reverses it, and returns the reversed 
//string. Use built-in methods for taking the string 
//apart, reversing it, and putting it back together again.

  //Code here

  const reverseMe = str => str.split('')
    .reverse()
    .join('')
