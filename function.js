document.getElementById("generate-pin").addEventListener('click', function(){
    let pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("display-pin").value = pin; 
})


// document.getElementById("seven").addEventListener("click",function(){
//     let number =  document.getElementById("seven").innerText; 
//     let newnumber=  document.getElementById("display-number").value 
//     document.getElementById("display-number").value = newnumber + number;
// })

    keyStroke("one");
    keyStroke("two");
    keyStroke("three");
    keyStroke("four");
    keyStroke("five");
    keyStroke("six");
    keyStroke("seven");
    keyStroke("eight");
    keyStroke("nine");
    keyStroke("zero");



function keyStroke(id){
    document.getElementById(id).addEventListener("click",function(){
    let number =  document.getElementById(id).innerText; 
    let newnumber=  document.getElementById("display-number").value 
    document.getElementById("display-number").value = newnumber + number;
    })
}
