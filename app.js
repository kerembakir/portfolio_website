var express = require('express');
var app = express();

app.set('views', './src.views');
app.set('view engine', 'jade');

app.get('/', function (req, res){
  res.render('index');
});

var server = app.listen(3000, function(){
    console.log('Example app listening on port: ' + server.addres.port)
})















const express = require('express');
const app = express()

app.use('/'), express.static('public'))

app.get('/ping', (request, response) => {
  console.log('request.query is: ', request.query)
  response.send('<p style="color: purple">Hey</p>)
})

app.post('/', (request, response) => {
  console.log(request.body)
})

const listener = app.listen(8080, () => {
  console.log('server has started at ', listener.address().port)
})
