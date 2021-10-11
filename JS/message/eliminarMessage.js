function eliminar(identificador){
    console.log("Ejecutando función para eliminar");
    let message = {
        id: +identificador
    }
    console.log(message);

    $.ajax({
        url: "https://g96183d7973509b-ciclo3db.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el mensaje');
            }
        },
    });
}