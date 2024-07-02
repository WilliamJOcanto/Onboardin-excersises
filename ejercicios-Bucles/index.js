// Ejercicios:
// Dificultad baja:

// 1ra parte:
// Documento Word Bucles (1ra parte)


// 2da parte:
// Documento Word Bucles (2da parte)


// 3ra parte:
// Documento Word Bucles (3ra parte)


// 4ta parte:
// Documento Word Bucles (4ta parte)


// 5ta parte:
// Documento Word Bucles (5ta parte)

// 6ta parte:
// let enterNumber = prompt("Please, enter a number (between 1 and 100)")

// if(!isNaN(enterNumber)){
//     if(parseFloat(enterNumber) >=1 && parseFloat(enterNumber) <= 100){
//         for(let i = parseFloat(enterNumber); i >= 0; i--){
//             console.log(i);
//         }
//     }else{
//         alert("You must enter only a number between 1 and 100")
//     }
// }else{
//     alert("You must enter a valid number")
// }


// 7ta parte:
// let multiplicationTable = prompt("Please, enter a number (between 1 and 10) to show your multiplication table")

// if(!isNaN(multiplicationTable)){
//     if(parseFloat(multiplicationTable) >= 1 && parseFloat(multiplicationTable) <= 10){
//         for(let i = 1; i <= 10; i++){
//             console.log(`${i} x ${parseFloat(multiplicationTable)} = ${i*parseFloat(multiplicationTable)}`)
//         }
//     }else{
//         alert("You must enter only a number between 1 and 10")
//     }
// }else{
//     alert("You must enter a valid number")
// }


// 8va parte:
// let i = 1
// let acumulador1 = 0

// while(i > 0){
//     i = prompt("Enter numbers. Enter '0' to stop")
//     acumulador = acumulador + parseFloat(i)
// }
// console.log(acumulador)


// 9na parte:
// let iniciador
// let acumulador2 = 0

// do{
//     iniciador = prompt("Enter numbers. Enter '0' to stop")
//     acumulador2 = acumulador2 + parseFloat(iniciador)
// }while(iniciador > 0)
//     console.log(`The result of the sum is ${acumulador2}`)


// 10ma parte:
// let personInfo = {
//     name: "will",
//     lastName: "ocanto",
//     age: 29,
//     nationality: "Venezuelan",
//     gender: "male"
// }

// for(let key in personInfo){
//     console.log(key);
// }


// 11va parte:
// for(let key in personInfo){
//     console.log(personInfo[key]);
// }



// Dificultad media:
// 1ra parte:



// 2da parte:
// let dividingNumber = prompt("Please, enter a number to check its divisors")
// let i = parseFloat(dividingNumber)

// while(i > 0){
//     if(parseFloat(dividingNumber) % i === 0){
//         console.log(i);
//     }
//     i--;
// }


// 3ra parte:
// function RingBell() {
//     console.log("Ding Dong");
//     return "Ding Dong,"
// }
// let userNumber = parseFloat(prompt("Please, enter a number"))
// let phrase = []
// let i = 0
// while(i < userNumber){
//     phrase[i] = RingBell()
//     i++
// }
// console.log(phrase);


// 4ta parte:
// const dateLimit = "1997-8-3"
// const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for(let i = 0; i <= dates.length; i++){
//     if(dates[i] >= dateLimit){
//         console.log(dates[i]);
//     }
// }


// 5ta parte:
// let variousColors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White" ]

// for(color of variousColors){
//     console.log(color);
// }


// 6ta parte:
// let variousColors1 = ["Yellow", "Grey", "Blue", "Violet", "Brown", "Pink", "Orange" ]
// let variousColors2 = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White" ]

// function elementsList(anotherArray){
//     for(color of anotherArray){
//         console.log(color);
//     }
// }
// elementsList(variousColors1)


// 7ma parte:
// let numbersList = [2, 3, 4, 5, 10]

// for(number of numbersList){
//     console.log(`The number is ${number} and its double is ${number*2}`);
// }


// 8va parte:
// let familyMembers = [{name: "Roberto", lastName:"Hernandez", age: 40, role: "Father"}, 
//     {name: "Yaneth", lastName:"Hernandez", age: 45, role: "Mother"}, {name: "Carlos", lastName:"Hernandez", age: 14, role: "Son"}, 
//     {name: "Sharon", lastName:"Hernandez", age: 23, role: "Daughter"}]

// function showMembers(membersList){
//     for(let i=0; i<membersList.length; i++){
//         console.log(`Hello, I am ${membersList[i].name} ${membersList[i].lastName} (${membersList[i].role}) and I am ${membersList[i].age} years old.`);
//     }
// }
// showMembers(familyMembers)



// Dificultad alta:
// 1ra parte:
// let i = 1
// let sumPairNumber = 0
// let sumOddNumber = 0
// while(i > 0){
//     i = parseFloat(prompt("Enter a number to show both sums. Enter '0' to stop"))
//     if(i%2 === 0){
//         sumPairNumber = sumPairNumber + i
//     }else{
//         sumOddNumber = sumOddNumber + i
//     }
// }
// console.log(`Odd numbers: ${sumOddNumber}`)
// console.log(`Pair numbers: ${sumPairNumber}`)


// 2da parte:
// let arrayNumbers = [3,4,6,2,8,9,1,7,10,5]
// let largestNumber = arrayNumbers[0]

// for(let i=0; i<arrayNumbers.length; i++){
//     if(arrayNumbers[i]>largestNumber){   
//         largestNumber = arrayNumbers[i]
//     }
// }
// console.log(largestNumber);