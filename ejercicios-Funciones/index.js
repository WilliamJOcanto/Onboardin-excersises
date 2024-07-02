// Ejercicios:

// Dificultad baja:
// 1ra parte:
// function add(){
//     console.log(100 * 20)
// }

// 2da parte:
// function add(){
//     console.log(100 * 20)
// }
// add()

// 3ra parte:
// function add(parametro1, parametro2){
//   console.log(parametro1 * parametro2)
// }
// add()

// 4ta parte:
//  function add(parametro1, parametro2){
//    console.log(parametro1 * parametro2)
//  }
//  let numero1 = 100
//  let numero2 = 20
//  add(numero1, numero2)

// 5ta parte:
//   function add(parametro1, parametro2){
//     let resultado = parametro1 * parametro2
//     return resultado
//   }
//   let numero1 = 100
//   let numero2 = 20
//   console.log(add(numero1, numero2)); 

// 6ta parte:
//   let multiplicar = function (parametro1, parametro2){
//     let resultado = parametro1 * parametro2
//     return resultado
//   }
//   let numero1 = 100
//   let numero2 = 20
//   console.log(multiplicar(numero1, numero2));


// Dificultad media:


// 1ra parte:
// function greet(name){
//     return `Hi ${name}, welcome!`
// }
// console.log(greet("Will"));


// 2da parte:
// let productOperation = function(multiple1, multiple2){
//     let product = multiple1 * multiple2
//     return product
// }
// console.log(productOperation(20, 30));


// 3ra parte:
// function area(base, height){
//     let areaTriangle = (base * height)/2
//     return areaTriangle
// }
// console.log(area(4, 7));


// 4ta parte:
// function perimeter(side1, side2, side3){
//     let resultperimeter = side1 + side2 + side3
//     return resultperimeter
// }
// console.log(perimeter(3, 3, 4));


// 5ta parte:
// function calculatePrice(price, amount){ 
//     let discount 
//     if(!isNaN(price) && !isNaN(amount)){
//         if(amount >= 10 && amount < 20){
//             discount = (price*10)/100
//         }else if(amount >= 20){
//             discount = (price*20)/100
//         }else{
//             discount = 0
//         }
//     }else{
//        return "enter a valid number"
//     }
//     return price - discount
// }
// console.log(calculatePrice(100, 23));


// 6ta parte:
// function isAnAdult(age){
//     if(!isNaN(age)){
//         if(age >= 18){
//             return "you are an adult"
//         }else if(age < 18){
//             return "you are not an adult"
//         }
//     }else{
//         return "enter a valid number"
//     }
// }
// console.log(isAnAdult(23));


// Dificultad alta:

//  1ra parte:
//  function impuestos(ingreso){
//      if(parseFloat(ingreso) <= 10000){
//          return ((ingreso*10)/100); 
//      }else if(parseFloat(ingreso) > 10000 && parseFloat(ingreso) <= 20000){
//          return ((ingreso*15)/100); 
//      }else{
//          return ((ingreso*20)/100); 
//      }
//  }
//  (impuestos(prompt("Coloque su ingreso anual para el calculo de sus impuestos")))


// 2da parte: 
// function checkDay(day){
//     let message
//     if(!isNaN(day)){
//         switch(parseFloat(day)){
//             case 1:
//                 return alert("It is a business day")
//                 break
//             case 2:
//                 return alert("It is a business day")
//                 break
//             case 3:
//                 return alert("It is a business day")
//                 break
//             case 4:
//               return alert("It is a business day")
//               break  
//             case 5:
//                 return alert("It is a business day")
//                 break
//             case 6:
//                 return alert("It´s the weekend")
//                 break
//             case 7:
//                 return alert("It´s the weekend")
//                 break  
//         }
//     }else{
//         return message = alert("enter a valid number")
//     }
// }
// console.log(checkDay(7));


// 3ra parte: 
// function personalInfo(information){
//     information = {
//         name: "",
//         lastName: "",
//         age: ""
//     }
//     information.name = prompt("Enter your Name")
//     if(information.name !== " " && information.name !== ""){
//         information.lastName = prompt("Enter your Last Name")
//         if(information.lastName !== " " && information.lastName !== ""){
//             information.age = prompt("Enter your Age")
//             if(information.age !== " " && information.age !== ""){
//                 if(!isNaN(information.age)){
//                     information = {
//                         name: `${information.name}`,
//                         lastName: `${information.lastName}`,
//                         age: `${information.age}`
//                     }
//                 }else{
//                     return console.log("enter a valid number")
//                 }
//             }else{
//                 return console.log("The Age cannot be empty") 
//             }
//         }else{
//             return console.log("The Last Name cannot be empty")
//         }
//     }else{
//         return console.log("The Name cannot be empty")
//     }
//     return console.log(information);
// }

// let enterInfo = {}
// console.log(personalInfo(enterInfo))


// 4ta parte: 
// function greetUser(name){
//     name = prompt("Please, enter your name")
//     if(name != " " && name != ""){
//         return `Hello! my name is ${name}`
//     }else{
//         return "The Name cannot be empty"
//     }
// }

// function calculateAge(yearBirth, currentYear){
//     let age 
//     yearBirth = prompt("Enter the year of your birth")
//     if(yearBirth != " " && yearBirth != ""){
//         if(!isNaN(yearBirth)){
//             currentYear = prompt("Enter current year")
//             if(currentYear != " " && currentYear != ""){
//                 if(!isNaN(currentYear)){
//                     age = currentYear - yearBirth
//                     return age
//                 }else{
//                     return "enter a valid date" 
//                 }
//             }else{
//               return "The current year cannot be empty" 
//             }
//         }else{
//            return "enter a valid date"
//         }
//     }else{
//         return "The year birth cannot be empty" 
//     }
// }

// function userPresentation(greetFunction, ageFunction){
//    let finalPresentation = `${greetFunction}, and i have ${ageFunction} years old`
//    return alert(finalPresentation)
// }

// userPresentation(greetUser(), calculateAge())