/*function borrar(idElemento) {
    var elemento = {
        id: idElemento

    };

    var dataToSend = JSON.stringify(elemento);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:80/api/Category/"+idItem,
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}*/
/*function obtenerItemEspecifico(idItem) {
    $.ajax({
        dataType: 'json',
        url: "http://localhost:80/api/Category/" + idItem,
        type: 'GET',

        success: function (response) {
            var item = response.items[0];

            $("#miName").val(item.name);
            $("#miDescripcion").val(item.description);

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}*/
/*function actualizar() {
    var elemento = {
        name: $("#miName").val(),
        description: $("#miDescripcion").val(),
    }


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',
        url: "http://localhost:80/api/Category/update",
        type: 'PUT',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}*/


function traerInformacionCategorias() {
    $.ajax({
        url: "http://localhost:80/api/Category/all",
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
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#miResultado").html(myTable);
}

function obtenerItems(){

    $.ajax({
        dataType: 'json',
        url:"http://localhost:80/api/Category/all",
        crossOrigin:true,
        type:'GET',
        success:function(response) {
            console.log(response);
            var misItems=response;

            for(i=0;i<misItems.length;i++){

                $("#miResultado").append("<tr>");
                $("#miResultado").append("<td>"+misItems[i].name+"</td>");
               // $("#miResultado").append("<td>"+misItems[i].price+"</td>");
                $("#miResultado").append("<td>"+misItems[i].description+"</td>");
                $("#miResultado").append('<td><button onclick="borrar('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function obtenerItemEspecifico(idItem){
    //alert(idItem)
    alert("entro")
    $.ajax({
        dataType: 'json',
        url:"http://localhost:80/api/Category/"+idItem,
        type:'GET',
       
        success:function(response) {
            console.log(response);
            myFunc(response)
            var testVar=99;    
            console.log(myFunc(testVar));
            var item=response.items[0];
            $("#miName").val(item.name);
            $("#miDescripcion").val(item.description);
        
            
           



        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}
function myFunc(inVar) {
    if (inVar === undefined) {
          console.log(inVar.not)
    }
    return inVar;
  }
  

function borrar(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://localhost:80/api/Category/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}

function guardarInformacionCategorias() {
    let var2 = {
        name: $("#miName").val(),
        description: $("#miDescripcion").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://localhost:80/api/Category/save",


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

function actualizar(){
    var elemento={
        id:$("#miId").val(),
        name:$("#miName").val(),
        description:$("#miDescripcion").val(),
        
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:80/api/Category/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}
