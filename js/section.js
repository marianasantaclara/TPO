function play() {
    document.querySelector(".textosection").className = "textosection";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector(".textosection").className = "textosection changing";
      });
    });
  }

  document.querySelector(".navenlace").addEventListener("click", play, false);

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  function Enviar() {
    if (document.form-horizontal.name.value.length==0){
      alert("Tiene que escribir su nombre")
      document.form-horizontal.name.focus()
      return 0;

      alert("Muchas gracias por enviar el formulario");
      document.form-horizontal.submit();

      /*
    evento.preventDefault();
    var usuario = document.getElementById('fname').value;
    if(fname.length == 0) {
      alert('Ingrese su nombre');
      return;
    }
    this.submit();
  }