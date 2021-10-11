function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");

    let computador = {
        id: +identificador
    };

    console.log(computador);

    $.ajax({
        url: "https://g6f2d96fab458ab-ciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
            }
        },
    });


}