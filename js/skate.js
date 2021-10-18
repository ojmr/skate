function registro() {
    var elemento = {
        id:$("#miId").val(),
        brand:$("#miBrand").val(),
        model:$("#miModel").val(),
        category_id:$("#miCategory_id").val(),
        name:$("#miName").val()
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

function traerInformacionCategorias(){
    $.ajax({
        url:"http://localhost:80/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#miResultado").html(myTable);
}


function guardarInformacionCategorias(){
    let var2 = {

        id:$("#miId").val(),
        brand:$("#miBrand").val(),
        model:$("#miModel").val(),
        category_id:$("#miCategory_id").val(),
        name:$("#miName").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://localhost:80/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
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
                $("#miResultado").append("<td>" + response.items[i].id + "</td>");
                $("#miResultado").append("<td>" + response.items[i].brand + "</td>");
                $("#miResultado").append("<td>" + response.items[i].model + "</td>");
                $("#miResultado").append("<td>" + response.items[i].category_id + "</td>");
                $("#miResultado").append("<td>" + response.items[i].name + "</td>");
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
        url: "http://localhost:80/api/Category",
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

            $("#miId").val(item.id);
            $("#miBrand").val(item.brand);
            $("#miModel").val(item.model);
            $("#miCategory_id").val(item.category_id);
            $("#miName").val(item.name);


        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizar(){
    var elemento={
        id:$("#miId").val(),
        brand:$("#miBrand").val(),
        model:$("#miModel").val(),
        category_id:$("#miCategory_id").val(),
        name:$("#miName").val()
      }
    
    
    var dataToSend=JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
          dataType: 'json',
          data:dataToSend,
          contentType:'application/json',
          url:"https://g378944fbaa91b4-db202109231835.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
          type:'PUT',
          
          success:function(response) {
            console.log(response);
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
    
    }
