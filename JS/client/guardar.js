function guardarCliente(){
    console.log("ejecutando funcion para guardar");

    let client = {
        id: +$("#id-client").val(),
        name:  $("#name-client").val(),
        email: $("#email-client").val(),
        age: +$("#age-client").val()
    };

    console.log("voy a guardar", client);

    $.ajax({
        url: "https://g1d69904e0a312d-computer.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha registrado el cliente');
            }
        },
    });
    
}