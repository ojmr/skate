function guardarInformacion() {
    let elemento = {
        idMessage:$("#miId").val(),
        messageText:$("#miMensaje").val()
    
    };

    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        url: "http://localhost:80/api/Message/save",
        type: 'POST',
        data: JSON.stringify(elemento),

        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}


function traerInformacion() {
    $.ajax({
        url: "http://localhost:80/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable+="<td> <button onclick=' obtenerItemEspecifico("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrar("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#miResultado").html(myTable);
}


function borrar(idElemento) {
    var elemento = {
        id:idElemento

    };

    var dataToSend = JSON.stringify(elemento);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:80/api/Message/"+idElemento,
        type: 'DELETE',
        contentType:'application/json',
        success: function (response) {
            $("#miResultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function obtenerItemEspecifico(idItem) {
    $.ajax({
        dataType: 'json',
        url: "http://localhost:80/api/Message/"+idItem,
        type: 'GET',

        success:function(response) {
            var item =response.items[0];

            $("#miId").val(item.idMessage);
            $("#miMensaje").val(item.messageText);
            


        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizar(){
    var elemento={
        id:$("#miId").val(),
        messageText:$("#miMensaje").val()
      }
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"http://localhost:80/api/Message/update",
          type:'PUT',
          
          success:function(response) {
            $("#miResultado").empty();
            $("#miId").val("");
            $("#miMensaje").val("");
            traerInformacion();
            alert("se ha Actualizado correctamente el mensaje")
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
