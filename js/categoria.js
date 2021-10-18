function registro() {
    var elemento = {
        //id:$("#miId").val(),
        name:$("#miName").val(),
        description:$("#miDescripcion").val(),
        
    }

    var dataToSend = JSON.stringify(elemento);

    $.ajax({

        dataType: 'json',
        data: elemento,
        url: "http://localhost:80/api/Category/save",
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
        url: "http://localhost:80/api/Category/all",
        type: 'GET',

        success: function (response) {


            for (let i = 0; i < response.items.length; i++) {

                $("#miResultado").append("<tr>");            
                $("#miResultado").append("<td>" + response.items[i].name + "</td>");
                $("#miResultado").append("<td>" + response.items[i].description + "</td>");
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
        url: "http://localhost:80/api/Category/all",
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
        url: "http://localhost:80/api/Category/"+idItem,
        type: 'GET',

        success:function(response) {
            var item =response.items[0];

            $("#miName").val(item.name);
            $("#miDescripcion").val(item.description);

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizar(){
    var elemento={
        name:$("#miName").val(),
        description:$("#miDescripcion").val(),
      }
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"http://localhost:80/api/Category/all",
          type:'PUT',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
