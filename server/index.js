const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = 4224,
      td = require('./controllers/controller');

app.use(bodyParser.json())


//Endpoints
app.get('/todos', td.getTodos);

app.get('/test', () => {
    console.log('test');
})

app.listen(port, () => {console.log(`Skating at ${port} MPH!!`)})