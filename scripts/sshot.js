


// take screenshot
$("button[name='screenshot']").on("click", function(){
    
    document.querySelector('a-scene').components.screenshot.capture('perspective');

});