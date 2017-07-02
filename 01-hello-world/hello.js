function getName() {
    return process.argv[2];
}

function sayHello(name = "") {
    console.log("Hello " + name);
}

sayHello(getName());