
function query3(name, user, mail, pass){
  $.post('accepted', {name:name, user:user, mail:mail, pass:pass}, null, 'json')
    .done(function (respuesta) {
      console.log(JSON.stringify(respuesta));
    })
    .fail(function() {
      alert("fallo");
      //pretty_table(respuesta);
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

function query4(titulo, descripcion, usuario){
  $.post('publicacion', {title:titulo, desc:descripcion, user:usuario}, null, 'json')
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
