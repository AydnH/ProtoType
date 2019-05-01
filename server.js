
const express = require('express');
const debug = require('debug')('ProtoType');
const path = require('path');


const app = express();
const port = process.env.PORT || 8000;

var bodyParser=require("body-parser");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/createEmp', function(req, res){  
console.log(req.body);
}); 

app.get('/createEmp', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
console.log();
});

app.listen(port, () => {
  debug(`Example app listening on port ${port}!`);

});
console.log('debug'. debug + console.log());