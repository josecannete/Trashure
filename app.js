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

var connectionString = "postgres://postgres:postgres@localhost:5432/postgres";
var pgClient = new pg.Client(connectionString);
//pgClient.connect();


pg.connect(connectionString, function(err, client, done){
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    else{
      console.log("todo salio bien");
    }
  });


app.use('/', express.static(__dirname));



app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/register.html'));
});

app.listen(3000);

console.log(path.join(__dirname+'/register.html'));

app.post('/accepted', function (req, res) {
  const name = req.body.name;
  const user = req.body.user;
  const mail = req.body.mail;
  const pass = req.body.pass;

  //const query = pgClient.query("SELECT * FROM submissions WHERE verdict = 'ok' AND contest_id = $1 AND index = $2 ;", [id, indice]);

  //const query = pgClient.query("INSERT INTO users VALUES ($1, $2, $3, $4);", [user, pass, mail, name]);
  const query = pgClient.query("SELECT * FROM users;");
  console.log(query);
  send_answer(query, res);
});

app.post('/login', function (req, res) {
  const user = req.body.user;
  const pass = req.body.pass;

  //const query = pgClient.query("SELECT * FROM submissions WHERE verdict = 'ok' AND contest_id = $1 AND index = $2 ;", [id, indice]);
  const query = pgClient.query("",[]);
  send_answer(query, res);
});

app.post('/search', function (req, res) {
  const tag = req.body.tag;

  //const query = pgClient.query("SELECT * FROM submissions WHERE verdict = 'ok' AND contest_id = $1 AND index = $2 ;", [id, indice]);
  const query = pgClient.query("", []);
  send_answer(query, res);
});

app.post('/publicacion', function (req, res) {
  const title = req.body.title;
  const desc = req.body.desc;
  const user = req.body.user;

  //const query = pgClient.query("SELECT * FROM submissions WHERE verdict = 'ok' AND contest_id = $1 AND index = $2 ;", [id, indice]);
  const query = pgClient.query("", []);
  send_answer(query, res);
});
