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
    let tabla = `<h3>Client Table</h3><table border="1">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>ACTIONS</th>
                  </tr>`;
                  
    
    for (let i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].age}</td>
                   <td>
                   <button onclick="eliminarCliente(${items[i].id})" class="button__delete">DELETE</button>
                   <a href="detalle.html?id=${items[i].id}">EDIT</a>
                   </td> 
                   </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla-client").html(tabla);
}