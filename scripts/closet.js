
// preview clothes
$("input[name='clothes']").change(function(){
    
    var cloth = $('input[type=radio][name=clothes]:checked').prop('id');
    var model = cloth.replace("cloth_", "");

    $("#valky-clothes").attr("src", "/img/closet/" + model + ".png");

});


// start web render
$("button[name='submit']").on("click", function(){
    
    var cloth = $('input[type=radio][name=clothes]:checked').prop('id');
    var model = cloth.replace("cloth_", "");

    window.open("/webgl?model=" + model, "_self");

});