console.log('module-1')

let encapsulatedVariable = 10

function sayHello(name = ''){
    console.log(`Hello ${name}`);
}

function getEncapsulatedVariable() {
    return encapsulatedVariable
}

module.exports = { sayHello, getEncapsulatedVariable }