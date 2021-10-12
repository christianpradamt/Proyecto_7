function consultarClient(){
    $.ajax({
        url: "https://g1d69904e0a312d-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuestaClient(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
    });
}

function mostrarRespuestaClient(items){
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>ACCIONES</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].age}</td>
                   <td>
                   <button onclick="eliminarCliente(${items[i].id})">Eliminar</button>
                   <a href="detalle.html?id=${items[i].id}">Editar</a>
                   </td> 
                   </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla-client").html(tabla);
}