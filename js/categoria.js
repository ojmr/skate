function borrar(idElemento) {
    var elemento = {
        id: idElemento

    };

    var dataToSend = JSON.stringify(elemento);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:80/api/Category/all",
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

}

function actualizar() {
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
        url: "http://localhost:80/api/Category/all",
        type: 'PUT',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}


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