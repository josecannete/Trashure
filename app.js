function send_answer(query, res) {
  query.on('row', function(row, result)  {
    result.addRow(row);
    console.log(row);
  });

  query.on('end', function(result)  {
    return res.send(JSON.stringify(result.rows));
  });
}

var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var path    = require("path");

var pg = require('pg');

var connectionString = "postgres://postgres:hackaton@173.255.116.116:5432/postgres";
var pgClient = new pg.Client(connectionString);
pgClient.connect();

app.use('/', express.static(__dirname));

app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/dominios.html'));
});

app.listen(3000);

app.post('/accepted', function (req, res) {
  const name = req.body.name;
  const user = req.body.user;
  const mail = req.body.mail;
  const pass = req.bosy.pass;

  //const query = pgClient.query("SELECT * FROM submissions WHERE verdict = 'ok' AND contest_id = $1 AND index = $2 ;", [id, indice]);

  const query = pgClient.query("INSERT INTO users ($1, $2, $3, $4)", [user, pass, mail, name]);
  send_answer(query, res);
});


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
