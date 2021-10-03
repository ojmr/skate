function registro() {
    var elemento = {
        id:$("#miId").val(),
        messagetext:$("#miMensaje").val()
    
    }

    var dataToSend = JSON.stringify(elemento);

    $.ajax({

        dataType: 'json',
        data: elemento,
        url: "https://g378944fbaa91b4-db202109231835.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',

        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

function obtenerItems() {

    $.ajax({
        dataType: 'json',
        url: "https://g378944fbaa91b4-db202109231835.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',

        success: function (response) {


            for (let i = 0; i < response.items.length; i++) {

                $("#miResultado").append("<tr>");
                $("#miResultado").append("<td>" + response.items[i].id + "</td>");
                $("#miResultado").append("<td>" + response.items[i].messagetext + "</td>");

                $("#miResultado").append('<td><button onclick = "borrar('+response.items[i].id+')">Borrar</button></td>');
                $("#miResultado").append('<td><button onclick="obtenerItemEspecifico('+response.items[i].id+')">Cargar</button></td>');
                $("#miResultado").append("<tr>");


            }

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}


function borrar(idElemento) {
    var elemento = {
        id:idElemento

    };

    var dataToSend = JSON.stringify(elemento);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "https://g378944fbaa91b4-db202109231835.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        contentType:'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function obtenerItemEspecifico(idItem) {
    $.ajax({
        dataType: 'json',
        url: "https://g378944fbaa91b4-db202109231835.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/"+idItem,
        type: 'GET',

        success:function(response) {
            var item =response.items[0];

            $("#miId").val(item.id);
            $("#miMensaje").val(item.messagetext);
            


        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizar(){
    var elemento={
        id:$("#miId").val(),
        messagetext:$("#miMensaje").val()
      }
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"https://g378944fbaa91b4-db202109231835.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
          type:'PUT',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
