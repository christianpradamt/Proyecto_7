function consultarComputer(){
    $.ajax({
        url: "https://g6f2d96fab458ab-ciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuestaComputer(respuesta.items);
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });
}

function mostrarRespuestaComputer(items){
    let tabla = `<h3>Computer Table</h3><table border="1">
                  <tr>
                    <th>ID</th>
                    <th>BRAND</th>
                    <th>MODEL</th>
                    <th>CATEGORY_ID</th>
                    <th>NAME</th>
                    <th>ACTIONS</th>
                  </tr>`;
                  
    
    for (let i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].brand}</td>
                   <td>${items[i].model}</td>
                   <td>${items[i].category_id}</td>
                   <td>${items[i].name}</td>
                   <td class="table__actions">
                        <button onclick="eliminar(${items[i].id})" class="button__delete">DELETE</button>
                        <a href="detalleComputador.html?id=${items[i].id}">EDIT</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla-computer").html(tabla);
}

