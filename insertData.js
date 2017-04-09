
app.post('/accepted', function (req, res) {
  const name = req.body.name;
  const user = req.body.user;
  const mail = req.body.mail;
  const pass = req.bosy.pass;

  //const query = pgClient.query("SELECT * FROM submissions WHERE verdict = 'ok' AND contest_id = $1 AND index = $2 ;", [id, indice]);

  const query = pgClient.query("INSERT INTO users ($1, $2, $3, $4)", [user, pass, mail, name]);
  send_answer(query, res);
});
