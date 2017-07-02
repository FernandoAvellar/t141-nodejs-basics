function operation1() {
    console.log('Operation1')
}

function operation2() {
    setTimeout(() => console.log('Operation2'), 300)
}

function operation3() {
    setTimeout(() => console.log('Operation3'), 100)
}

operation1();
operation2();
operation3();