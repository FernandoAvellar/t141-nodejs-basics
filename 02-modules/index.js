const module1 = require('./module-1')
const module2 = require('./module-2')

console.log('main-module')
module1.sayHello(module2.getName())

console.log(module1.getEncapsulatedVariable())