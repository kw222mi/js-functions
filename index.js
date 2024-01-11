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




greeting()
greetingWithName ('Anna')
addition (1, 2)
division (1, 2)
area (20, 30)
greetingWithName ('Anna', 'Andersson')
distanceConverter (4.3)
temperatureConverter (10)