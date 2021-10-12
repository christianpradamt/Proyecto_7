$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id_com')){
        let id = searchParams.get('id_com')
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
        url: "https://g6f2d96fab458ab-ciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            if (respuesta.items.length==1){
                llenarDatos(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra el computador con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    $("#id_com").val(item.id);
    $("#brand_com").val(item.brand);
    $("#model_com").val(item.model);
    $("#category_id").val(item.category_id);
    $("#name_com").val(item.name);
}



