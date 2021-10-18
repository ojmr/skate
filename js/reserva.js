
function traerInformacion() {
    $.ajax({
        url: "http://localhost:80/api/Reservation/all",
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
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].idClient + "</td>";
        myTable += "<td>" + respuesta[i].nombre + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].calificacionReserva + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#miResultado").html(myTable);
}

function guardarInformacion() {
    let var2 = {
        startDate: $("#miDateInicial").val(),
        devolutionDate: $("#miDateEntrega").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://localhost:80/api/Reservation/save",


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