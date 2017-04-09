
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
