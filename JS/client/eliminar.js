function eliminarCliente(identificador){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificador
    };

    console.log(client);

    $.ajax({
        url: "https://g1d69904e0a312d-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el Cliente');
            }
        },
    });


}