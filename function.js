document.getElementById("generate-pin").addEventListener('click', function(){

    let pin = Math.floor(1000 + Math.random() * 9000);
    

    document.getElementById("display-pin").value = pin; 

})