


// take screenshot
$("button[name='submit']").on("click", function(){
    
    document.querySelector('a-scene').components.screenshot.capture('perspective');

});