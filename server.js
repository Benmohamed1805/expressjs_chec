const express = require('express');
const app = express();
const router = express.Router();


app.use(function (req, res, next) {
    let time = new Date()
    let x = time.getHours()
    console.log('Time:', new Date());
    if (x < 9 || x > 23) {

        res.send("<center><h1>Hello World,we are closed</h1></center>")
    } else { next(); }

}) 


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})


app.get('/Services', (req, res) => {
    res.sendFile(__dirname + '/services.html')
})

app.get('/Contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})


app.listen(3000, (err) => {
    if (err) console.log('server is not runnig')
    else console.log('server is running on port 3000')
})
