const express = require('express')
const app = express()

app.use(express.static(__dirname + '/nameFolder'))

app.get('/', function(req, res) {
    res.send('Hello World!\n')
});

app.listen(4000, function() {
    console.log('server running on port 4000')
});