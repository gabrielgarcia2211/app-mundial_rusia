

function loadSe() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenedor").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "selecciones/colombia.html", true);
    xhttp.send();
  }

  function loadI() {
    location.reload();
  }

  function loadC() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenedor").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "formulario.html", true);
    xhttp.send();
  }

  
  function loadP() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenedor").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "partidos.html", true);
    xhttp.send();
    carga();
  
  }

  //LLAMADA DE DATOS .JSON
   function carga(){
    let template = '';
        $.getJSON('partidos.json', function(datos){
          $("#contenido").html("");
       
            $.each(datos["partidos"], function(idx,partidos){
              template += `<tr>
                <td>${partidos.fecha}</td>
                <td>${partidos.equipo1}</td>
                <td>${partidos.equipo2}</td>
                </tr>`
            });
            $('tbody').html(template);
      });
   }
 

