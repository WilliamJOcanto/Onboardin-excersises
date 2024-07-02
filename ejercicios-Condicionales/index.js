// Ejercicios:

// Dificultad baja;


// 1ra parte:
// Archivo word Condicionales (1ra parte)


// 2da parte:
// Archivo word Condicionales (2da parte)


// 3ra parte:
// Foto diagrama 1


// 4ta parte: (Foto Diagrama 2)
// let num1 = 4
// let num2 = 5
// if(num1 > num2){
//     console.log(num1)
// }
// else{
//     console.log(num2)
// }


// 5ta parte: (Foto Diagrama 3)
// if(num1 > num2){
//     console.log(num1)
// }else if(num1 < num2){
//     console.log(num2)
// }else{
//     console.log(`Los numeros son iguales`);
// }


// 6ta parte: 
// if(num1 === num2){
//     console.log(`Los numeros son iguales`);
// }else{
//     console.log(`Los numeros son diferentes`);
// }


// 7ma parte:
// let fecha1 = "2018-9-2"
// let fecha2 = "2023-7-5"

// if(fecha1 > fecha2){
//     console.log(`La fecha ${fecha1} es mayor a ${fecha2}`);
// }else if(fecha1 < fecha2){
//     console.log(`La fecha ${fecha2} es mayor a ${fecha1}`)
// }else{
//     console.log(`Las fechas son iguales`);
// }


// 8va parte:
// fecha1 = "2023-7-5"
// fecha2 = "2023-7-5"

// if(fecha1 > fecha2){
//     console.log(`La fecha ${fecha1} es mayor a ${fecha2}`);
// }else if(fecha1 < fecha2){
//     console.log(`La fecha ${fecha2} es mayor a ${fecha1}`)
// }else{
//     console.log(`Las fechas son iguales`);
// }


// 9na parte:
// let numero1 = 1
// let numero2 = 2
// let numero3 = 3

// if(numero1 > numero2 && numero1 > numero3){
//     console.log(`El numero ${numero1} es el mas grande`);
// }else if(numero2 > numero1 && numero2 > numero3){
//     console.log(`El numero ${numero2} es el mas grande`)
// }else{
//     console.log(`El numero ${numero3} es el mas grande`)
// }



// Dificultad media


// 1ra parte:
// Archivo word Condicionales (1ra parte)


// 2da parte:
// Archivo word Condicionales (2da parte)


// 3ra parte:
// Archivo word Condicionales (3ra parte)


// 4ta parte:
// let color = prompt("Escriba un color entre rojo, azul o verde").toLowerCase
// ()
// switch (color){
//     case "rojo":
//     console.log(`El color de la pasion`);
//     break

//     case "azul": 
//     console.log(`El color del mar`);
//     break

//     case "verde":
//     console.log(`El color de la naturaleza`);   
//     break 

//     default:
//     console.log(`Respuesta invalida, elija solo entre 'rojo', 'azul' o 'verde'`);
// }


// 5ta parte: (Foto Diagrama 4)
// let primerNumero = prompt("Ingrese el primer numero")
// let segundoNumero = prompt("Ingrese el segundo numero")
// primerNumero = parseFloat(primerNumero)
// segundoNumero = parseFloat(segundoNumero)
// let tipoOperacion = prompt("Elija un tipo de operacion entre: 'Suma', 'resta', 'multiplicacion' o 'division'").toLowerCase()

// if(!isNaN(primerNumero) && !isNaN(segundoNumero)){
//     switch(tipoOperacion){
//         case "suma":
//         console.log(`La suma de ${primerNumero} y ${segundoNumero} es ${primerNumero + segundoNumero}`);
//         break
    
//         case "resta":
//         console.log(`La resta de ${primerNumero} y ${segundoNumero} es ${primerNumero - segundoNumero}`)
//         break
    
//         case "multiplicacion":
//         console.log(`La multiplicacion de ${primerNumero} y ${segundoNumero} es ${primerNumero * segundoNumero}`)
//         break
    
//         case "division":
//             if(segundoNumero === 0){
//                 console.log("No se puede dividir por cero");
//             }else{
//                 console.log(`La division de ${primerNumero} y ${segundoNumero} es ${primerNumero / segundoNumero}`)
//             }
//         break
    
//         default:  
//         console.log("El tipo de operacion ingresado es invalido");      
//     }
// }else{
//     console.log("Debe insertar solo numeros");
// }

// 6ta parte:
// let person1 = {
//     name:"Juan",
//     age:40,
//     height:1.69
// }
// let person2 = {
//     name:"Maria",
//     age:12,
//     height:1.50
// }

// if(person1.height > person2.height && person1.age > person2.age){
//     console.log(`${person1.name} es mas alto y mayor que ${person2}`)
// }else if(person1.height < person2.height && person1.age < person2.age){
//     console.log(`${person2.name} es mas alto y mayor que ${person1.name}`)
// }else{
//     console.log(`${person1.name} y ${person2.name} tienen la misma edad y altura`);
// }


// 7ma parte:
// let nombre = prompt("Ingrese su nombre")
// let consultarEdad = prompt("Ingrese su edad")
// if(isNaN(consultarEdad)){
//     alert("You must enter a valid number")
// }else if(parseFloat(consultarEdad) < 18){
//     alert("Debes tener al menos 18 años para poder conducir")
// }else{
//     let altura = prompt("Ingrese su altura (en cm)")
//     if(isNaN(altura)){
//         alert("You must enter a valid number")
//     }else if(parseFloat(altura) >= 110){
//         let vision = prompt("¿En el rengo del 1 al 10, que nivel de vision tiene?")
//         if(isNaN(vision)){
//             alert("You must enter a valid number")
//         }else if(parseFloat(vision) > 8){
//             alert(`¡Congratulations ${nombre}! You are qualified to drive`)
//         }else{
//             alert("Debe tener una vision de al menos 8 para calificar")
//         }
//     }else{
//         alert("Debes tener mas de 110cm de altura para calificar")
//     }
// }

// 8va parte:
// let ingreseEdad = prompt("¿How old are you?")

// if(isNaN(ingreseEdad)){
//     alert("You must enter a valid number")
// }else if(parseFloat(ingreseEdad) >= 0 && parseFloat(ingreseEdad) <= 12){
//     alert(`Infant: your age is ${ingreseEdad}`);
// }else if((ingreseEdad) >= 13 && parseFloat(ingreseEdad) <= 18){
//     alert(`Adolescent: your age is ${ingreseEdad}`);
// }else if((ingreseEdad) >= 19 && parseFloat(ingreseEdad) <= 45){
//     alert(`Older young: your age is ${ingreseEdad}`);
// }else if((ingreseEdad) > 45 && parseFloat(ingreseEdad) <= 100){
//     alert(`Ederly: your age is ${ingreseEdad}`);
// }else{
//     alert("You really are so old?");
// }


// 9na parte:
//   let numeroOpcion = prompt("Enter a number (from 1 to 3) to select the operation")
 
//   if((parseFloat(numeroOpcion) == 1 || parseFloat(numeroOpcion) == 2 || parseFloat(numeroOpcion) == 3)){
//     let numeroDato = prompt("Enter number to operate")
//     if(!isNaN(numeroDato)){
//         switch (numeroOpcion){
//             case "1":
//                 alert(`The number entered is [${numeroDato}]`)
//                 break
//            case "2":
//                 alert(`Twice the number entered is [${numeroDato*2}]`)
//                 break
//             case "3":
//                 alert(`Three times the number entered is [${numeroDato*3}]`)
//         }
//     }else{
//         alert("You must enter a valid number")
//     }
//  }else{
//     alert("This value is not allowed")
//  }



//  Dificultad alta:

//  1ra parte:
//  let costumeName = prompt("Enter your name").toLowerCase()

//  if(costumeName == "will"){
//     alert(`Welcome ${costumeName}`)
//  }else{
//     let passType = prompt("What type of pass do you have? (VIP or normal)").toLowerCase()
//     if(passType != "vip" && passType != "normal"){
//         alert ("You must answer 'vip' or 'normal'")
//     }else{
//         if(passType == "vip"){
//             alert(`Welcome ${costumeName}`)
//         }else{
//             let entrance = prompt("Do you have a ticket? Answer 'yes' or 'no'").toLowerCase()
//             if(entrance != "yes" && entrance != "no"){
//                 alert ("You must answer 'yes' or 'no'")
//             }else{
//                 if(entrance == "yes"){
//                    let useTicket = prompt("Do you want to use your ticket? Answer 'yes' or 'no'").toLowerCase()
//                    if(useTicket != "yes" && useTicket != "no"){
//                     alert ("You must answer 'yes' or 'no'")
//                    }else{
//                         if(useTicket == "yes"){
//                             alert(`Welcome ${costumeName}`) 
//                         }else{
//                             alert("See you later, have a nice day")
//                         }
//                    }
//                 }else{
//                     let buyTicket = prompt("Do you want to buy a ticket?").toLowerCase()
//                     if(buyTicket != "yes" && buyTicket != "no"){
//                         alert ("You must answer 'yes' or 'no'")
//                     }else{
//                         if(buyTicket == "yes"){
//                             let moneyAvailble = prompt("How much money do you have available?")
//                             if(isNaN(moneyAvailble)){
//                                     alert("Please, you must enter a valid number")
//                             }else{  
//                                 if(parseFloat(moneyAvailble) > 1000){
//                                     alert("successful sale")
//                                 }else{
//                                     alert("Rejected sale, insufficient funds")
//                                 }
//                             }
//                         }else{
//                             alert("See you later, have a nice day")
//                         }
                       
//                     }
//                 }
//             }
//         }
//     }
//  }



  