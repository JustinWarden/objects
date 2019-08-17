// Instantiate and assign a variable called `myName` that holds the value of your name as a string
// Instantiate and assign a variable called `numberOfPets` that stores the number of pets you have as a number.
// Instantiate and assign a variable called `birthday` that holds your birthday as a string
// Use string interpolation to build a sentence about yourself using the three variables you just created
// Log the sentence to the console

// var myName = "Justin Warden"

// var numberOfPets = 33

// var birthday = "Sept. 5th 1982"

// var me = `my name is ${myName} my number of pets are ${numberOfPets} my birthday is ${birthday}`

// console.log (me)


// var pets= ["mouse", "jiggle","wiggle","pickle"]

// console.log (pets[0])
// console.log (pets[1])
// console.log (pets[2])
// console.log (pets[3])

// ------------------------- lightning exercises --------------------//
// Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// var ford ={
//     make : "ford",
//     model : "mustang",
//     color : "red",
//     year : 2015
// }

// Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// var animalNames = ["kippers", "jack", "gypsy", "Angus","Seymour Bouts", "Sharky"]

// Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// var familyMembers =[
// {
//     name: "brent",
//     age : 27,
//     eye: "brown"
// }
// {
//     name: "chantry",
//     age : 25,
//     eye : "green"
// }

// ]

// Given the object below, output the wardrobe's width to the console
// Output its manufacturer
// Output the first item in its `contents` array to the console

// var wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
//   };

//   console.log(wardrobe.width)
//   console.log(wardrobe.manufacturer)
//   console.log(wardrobe.contents[0])

// 1. Write a function called `addToCart` that takes one argument of `itemName`
// 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.
// 3. Call the function three times and pass in three different items that you might buy at a grocery store

// function addToCart (itemName){
// console.log(`the ${itemName} has been added to your cart!`)

// }
// addToCart("mouse")
// addToCart("house")
// addToCart("louse")

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

//     if (currentNumber % 5 === 0) {
//         console.log("chicken") 
//     } 
//     else if (currentNumber % 7 === 0)
//             console.log("monkey")
        
//            else (currentNumber % 7 && 5 === 0)
//             console.log("chicken monkey")

// }


// let bandNumber = 1

// function takeNumber (bandName) {
//   const bandSentence= `${bandNumber}`+" "+`${bandName}`;
//   bandNumber++
//   return bandSentence
//     }
// const scum = takeNumber("Galactic Scum")
// console.log(scum)  

// const under = takeNumber("Underdogs")
// console.log(under)  

// const scary = takeNumber("scaryRex")
// console.log(scary) 

//const gerbil = takeNumber("GerbilKing")
// console.log(gerbil) // 

// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// const cookedFood = [];

// function grill (currentObject) {

//     // Modify the food so that it is cooked
//     currentObject.cooked = true

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
 
    
// };

// grill(foods[0]) 
// grill(foods[1]) 
// grill(foods[2]) 
// grill(foods[3]) 
// grill(foods[4]) 
// console.log(cookedFood)


