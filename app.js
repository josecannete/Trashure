// connection module

var express = require("express");
var app     = express();
var path    = require("path");

app.use('/', express.static(__dirname));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index2.html'));
  //res.render('index.html');
//__dirname : It will resolve to your project folder.
});

app.listen(3000);

console.log("Running at Port 3000");
console.log(__dirname);

var pg = require('pg');

var connectionString = "postgres://postgres:hackaton@localhost/postgres";
var pgClient = new pg.Client(connectionString);
pgClient.connect();

/*
const query = pgClient.query("SELECT * FROM submissions WHERE handle = $1 ;", ['Petru'],
		function(err, result) {
      console.log(result.rows[0]) // output: brianc
    });


app.get('/query', function (req, res) {
  	const query = pgClient.query("SELECT * FROM submissions WHERE handle = $1 ;", ['Petru'],
                function(err, result) {
      res.send(result.rows[0]) // output: brianc
    });
});
*/
