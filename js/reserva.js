
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
        myTable += "<td>" + respuesta[i].idReservation + "</td>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable+="<td> <button onclick=' obtenerItemEspecifico("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrar("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#miResultado").html(myTable);
}

function data(tiempo){
    
    return tiempo
}

function guardarInformacion() {
    let var2 = {
        startDate: $("#miDateInicial").val(),
        devolutionDate: $("#miDateEntrega").val(),
        
    };

    var d = new Date();
    var tiempo2 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
    
    

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
function borrar(idElemento){
    var elemento={
        id:idElemento
    };

    var dataToSend=JSON.stringify(elemento);
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://localhost:80/api/Reservation/"+idElemento,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            $("#miResultado").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}


//Will return 14:37:36