function actualizarMessage(){
    let mensaje = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(),
    };

    $.ajax({
        url: "https://g96183d7973509b-ciclo3db.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el mensaje');
            }
        },
    });

    console.log(mensaje);
}