function guardar(){
    console.log("ejecutando funcion para guardar");

    let computador = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val()
    };

    console.log(computador);

    $.ajax({
        url: "https://g6f2d96fab458ab-ciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha registrado el computador');
            }
        },
    });

}