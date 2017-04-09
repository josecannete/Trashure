
function query3(nombre, usuario, email, contrasena){
  $.post('accepted', {name:nombre, user:usuario, mail:email, pass:contrasena}, null, 'json')
    .done(function (respuesta) {
      console.log(JSON.stringify(respuesta));
    })
    .fail(function() {
      alert("fallo");
    })
    return false;
}

function query2(usuario, contrasena){
  $.post('login', {user:usuario, pass:contrasena}, null, 'json')
    .done(function(respuesta) {
      console.log(JSON.stringify(respuesta));
    })
    .fail(function() {
      alert(id);
      alert("fallo");
    })
    return false;
}

function query1(tags){
  $.post('search', {tag:tags}, null, 'json')
    .done(function(respuesta) {
      console.log(JSON.stringify(respuesta));
      //pretty_table(respuesta);
    })
    .fail(function() {
      alert("fallo");
    })
    return false;

}

// ################################################
