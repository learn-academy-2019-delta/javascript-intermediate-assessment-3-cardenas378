// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
"1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811"

// function fibonacci(arr){
//   let newArr = []
//     for(let i=0; i< arr.length; i++){
//       if (arr[i] < 56){
//       newArr.push(arr[i])
//       }
//     }
//   return newArr
// }

let getFib = (n) => {
  if (n === 1 ){
    return [0,1]
  }else {
    let fib = getFib (n-1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])
      return fib;
  }
}
  console.log(getFib(10))

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

// const onlyOdds = fullArr1.filter(function(number){
//   return number % 2 ===1 && typeof value === "number"
// })

// console.log(onlyOdds)
// let number1= fullArr1.filter(value=>typeof value ==="number" && value%2 !==0)
// let number2= fullArr2.filter(value => typeof value === "number" && value % 2 !==0)

// console.log(number1)
// console.log(number2)

// 3. Given the object below, complete the console.log to find specific information:

// var bicycle = {
// 	type: "Roadbike",
// 	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
// 	wheels: {
// 		count: 2,
// 		specs: ["road tires", "AX-7563", "80-115 PSI"],
// 		brand: "Trek"
// 	}
// }

// Log the type of bicycle:
// console.log(bicycle.type )

// // Log the bell:
// console.log(bicycle.gear[2])

// // Log the PSI:
// console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

// var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
// var originalArray2 = ["a", "t", "l", "e", "d"]
// Expected output: ["d", "e", "l", "t", "a"]

// Array.prototype.reverse.call(originalArray1)
// Array.prototype.reverse.call(originalArray2)

// console.log(originalArray1, originalArray2)


// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })


// let arr1 = [3, 4, 5]
// let arr2 = [23, -9, 0]
// let arr3 = [4.5, -4.5, 12]

// const multTwo = (array) => {
//   return array.map(array => array*2)
// }
 

// console.log(multTwo(arr1))
// console.log(multTwo(arr2))
// console.log(multTwo(arr3))


// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

// var ourString = "Hello Learn Students!"
// Expected output: 3

// let letterCounter= (str) =>{
//   let arr =str.toLowerCase().split('')
//   let letterCount = 0
//   let letter = "l"

// for(let i=0; i< ourString.length; i++){
// if(arr[i].includes(letter))
//   letterCount +=1

//   }return letterCount
// }
// console.log(letterCounter(ourString))



// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// var middleLetters1 = "hello"
// Expected output: “l”
// var middleLetters2 = "lamas"
// Expected output: “am”


// let letters=(str)=>{
// let newLetters = str.split('')
// let i=0
// for(i=0; i<newLetters.length / 2; i++){

// }
// return newLetters[i-1]
// }
// console.log(letters(middleLetters1))
// console.log(letters(middleLetters2))


// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)




// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

// var myCar = {
//   make: "VW",
//   model: "Jetta",
//   specs: {
//     doors: 4,
//     transmission: "manual",
//   }
// }

// let { doors, transmission } = myCar.specs
// console.log(doors,transmission)


// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
// var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
// var numbersToAdd3 = []
// Expected output: []
