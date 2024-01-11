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



greeting()
greetingWithName ('Anna')
addition (1, 2)
division (1, 2)
area (20, 30)