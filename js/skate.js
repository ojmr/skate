
function traerInformacion() {
    $.ajax({
        url: "http://localhost:80/api/Skate/all",
        //url: "http://129.159.57.27/api/Skate/all",
        type: "GET",
        datatype: "JSON",
        success:function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].model + "</td>";
        myTable += "<td>" + respuesta[i].category_id + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += ('<td><button onclick = "borrar(' + respuesta[i].id + ')">Borrar</button></td>');
        myTable += ('<td><button onclick="obtenerItemEspecifico(' + respuesta[i].id + ')">Cargar</button></td>');
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#miResultado").html(myTable);
}
function guardarInformacion() {
    let var2 = {

        id:$("#miId").val(),
        brand:$("#miBrand").val(),
        model:$("#miModel").val(),
        category_id:$("#miCategory_id").val(),
        name:$("#miName").val()
    };

    $.ajax({
        type:'POST',
        contentType:"application/json; charset=utf-8",
        dataType:'JSON',
        data:JSON.stringify(var2),

        url:"http://localhost:80/api/Skate/save",
        //url: "http://129.159.57.27/api/Skate/save",


        success:function (respuesta) {
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error:function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}




function borrar(idElemento) {
    var elemento = {
        id: idElemento

    };

    var dataToSend = JSON.stringify(elemento);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://129.159.57.27:80/api/Category",
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function obtenerItemEspecifico(idItem) {
    alert(idItem)
   // var url2 = "http://localhost:80/api/Skate/"+idItem
    //alert(url2)
    $.ajax({
        dataType:'json',
        url:"http://localhost:80/api/Skate/"+idItem,
        type:'GET',
        
        success:function(respuesta) {
            var item =respuesta.items[0];

            $("#miId").val(item.id);
            $("#miBrand").val(item.brand);
            $("#miModel").val(item.model);
            $("#miCategory_id").val(item.category_id);
            $("#miName").val(item.name);


        },
        error: function (jqXHR, textStatus, errorThrown){}
           
    });
    

}


function actualizar() {
    var elemento = {
        id: $("#miId").val(),
        brand: $("#miBrand").val(),
        model: $("#miModel").val(),
        category_id: $("#miCategory_id").val(),
        name: $("#miName").val()
    }


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',
        url: "https://g378944fbaa91b4-db202109231835.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: 'PUT',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}
