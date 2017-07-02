const fs = require('fs')

//Por favor, tente nao fazer da forma abaixo porque ela é blocked e
//vc vai perder o porder do NodeJs
// const fileContent = fs.readFileSync('./student.txt', 'utf8');
// console.log(fileContent);
// console.log("Sera imprimido so no final da listagem que esta blocked acima")

//maneira correta
function printFileContent(error, data) {
    if (error) {
        console.log("Falha ao ler o arquivo!" + error)
        return
    }
    console.log(data)
}

fs.readFile('./student.txt', 'utf8', printFileContent)
console.log('Xurupitas\'s Farm')  //Sera executado antes porque 
                                  //a chamada acima é assincrona