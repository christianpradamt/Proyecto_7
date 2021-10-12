function consultarMessage(){

    $.ajax({
        url: "https://g96183d7973509b-ciclo3db.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuestaMessage(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }
        
    });

}

function mostrarRespuestaMessage(items){
    let tabla = `<h3>Message Table</h3><table border="1">
                  <tr>
                    <th>ID</th>
                    <th>MESSAGETEXT</th>
                    <th>ACTIONS</th>
                  </tr>`;
                  
    
    for (let i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].messagetext}</td>
                   <td>
                    <button onclick="eliminar(${items[i].id})" class="button__delete">DELETE</button>
                    <a href="detalleMessage.html?id=${items[i].id}">EDIT</a>
                   </td> 
                   </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla-message").html(tabla);
}
