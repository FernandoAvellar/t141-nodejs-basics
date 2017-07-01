const http = require('http')
const fs = require('fs')
const PORT = 8080

function requestHandler(request, response) {
    console.log(request.url)
    fs.readFile('index.html', 'utf8', (error, fileContent) => {
        response.setHeader('Content-Type', "text/html")
        response.end(fileContent)
    })
}

http.createServer(requestHandler).listen(PORT, (error) => {
    if(error) throw error
    console.log('Server up at http://localhost:' + PORT)
})