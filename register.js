
var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var path    = require("path");

var pg = require('pg');

var connectionString = "postgres://cc3201:cc3201@localhost:5432/cc3201";
var pgClient = new pg.Client(connectionString);
pgClient.connect();

app.use('/', express.static(__dirname));

app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/dominios.html'));
});

app.listen(3000);

function query3(nombre, usuario, email, contrasena){
  $.post('accepted', {name:nombre, user:user, mail:mail, pass:contrasena}, null, 'json')
    .done(function(respuesta) {
      console.log(JSON.stringify(respuesta));
    })
    .fail(function() {
      alert("fallo");
    })
    return false;
}

function query2(id, indice){

}

function query1(id, indice){

}

// ################################################
