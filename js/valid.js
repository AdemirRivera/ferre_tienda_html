function validar(){
  var  name,lstape,mail,tel,text;

  name = document.getElementsByName("nombre").value;
  lstape = document.getElementsByName("ape").value;
  mail = document.getElementsByName("email").value;
  tel = document.getElementsByName("tel").value;
  text = document.getElementsByName("mensaje").value;

if(name === "" || lstape === "" || mail === "" || tel === "" || text === ""){
alert("Todos los campos son obligatorios");
return false;
}
else if(name.length>30){
  alert("El nombre es muy largo");
  return false;
}
else if(lstape.length>30){
  alert("El apellido es muy largo");
  return false;
}
else if(mail.length>30){
  alert("El email es muy largo");
  return false;
}
else if(tel.length>8){
  alert("El telefono es muy largo");
  return false;
}
}
