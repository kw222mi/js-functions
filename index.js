function greeting () {
    console.log('Hello there my friend!')
}

function greetingWithName (userName) {
    console.log(`Hello there my friend! You must be ${userName}! `)
}

function addition (number1, number2) {
    let result = number1 + number2
    console.log(`The result is: ${result}`)
}

function division (number1, number2) {
    if ( number2 === 0){
        console.log('Cant divide by zero')
    }
    else {
    let result = number1 / number2
    console.log(`The result is: ${result}`)
    }
}

function area (width, length) {
    let result = width * length
    console.log(`The area is: ${result}`)
}

function greetingWithName (firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}! How are you doing? `)
}

function distanceConverter (distance) {
    let miles = distance * 0.62
    console.log(`${distance} km is ${miles} miles`)
}

function temperatureConverter (temp) {
    let f = temp * 9/5 + 32
    console.log(`${temp} celcius is ${f} farenheit`)
}


function meanValue (numbersArray) {
    let sum = 0
    for ( let i=0; i<numbersArray.length; i++ ) {
        sum = sum + numbersArray[i]
    }
    let mean = sum /numbersArray.length
    console.log(`The mean value of the array is ${mean} `)
}

function systembolaget (age) {
    if (0 < age && age <= 14 ) {
        console.log("Get out of here!")
    }
    else if (15 <= age && age <= 17) {
        console.log("Sorry, you are not old enough")
    }
    else if (18 <= age && age <= 19) {
        console.log("Sorry, you must be atleast 20. Why don't you try a bar instead?")
    }
     else if (20 <= age && age <= 80) {
        console.log("Thank you! Welcome!")
    }
     else if ( age > 80) {
        console.log("I'm sorry, where is your caretaker?")
    }
    else {
        console.log("I'm sorry, you are to young to be alive")
    }
}

function arraySum (numbersArray) {
    let sum = 0
    for ( let i=0; i<numbersArray.length; i++ ) {
        sum = sum + numbersArray[i]
    }
   
    console.log(`The sum of the numbers in the array is ${sum} `)
}

let person = {
    name: 'Nisse',
    age: 33,
    city: 'Stockholm',
    skills: ["Pokemon Master", "Kung Fu Legend", "Football Ninja", "Home chef", "Javascript Pro"]
}

function listSkills (person) {
    let skills = person.skills
    console.log(`The skills of ${person.name} is: `)
    for ( let i=0; i<skills.length; i++ ) {
        console.log( skills[i])
    }
}



greeting()
greetingWithName ('Anna')
addition (1, 2)
division (1, 2)
area (20, 30)
greetingWithName ('Anna', 'Andersson')
distanceConverter (4.3)
temperatureConverter (10)
meanValue ([1,2,3,4,5,6,7])
systembolaget (20)
arraySum ([1,2,3,4,5,6,7,8,9,10])
listSkills (person)