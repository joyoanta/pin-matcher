// Generate Pin Button 

document.getElementById("generate-pin").addEventListener('click', function(){
    let pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("display-pin").value = pin; 

})


// document.getElementById("seven").addEventListener("click",function(){
//     let number =  document.getElementById("seven").innerText; 
//     let newnumber=  document.getElementById("display-number").value 
//     document.getElementById("display-number").value = newnumber + number;
// })

// Number Digit button 

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

// Number Digit function 

function keyStroke(id){
    document.getElementById(id).addEventListener("click",function(){
    let number =  document.getElementById(id).innerText; 
    let newnumber=  document.getElementById("display-number").value 

    document.getElementById("display-number").value = newnumber + number;
    })
}

// submitBtn buttion 

document.getElementById("submitBtn").addEventListener('click', function(){

    let pinDigit =  document.getElementById("display-pin").value ; 
    let inputDigit = document.getElementById("display-number").value ; 

if (pinDigit == inputDigit) {

document.getElementById("display-number").value = "" ;
document.getElementById("right").style.display = "block"; 
document.getElementById("wrong").style.display = "none";
   
}

else {

    document.getElementById("display-number").value = "" ;
    document.getElementById("wrong").style.display = "block";  
    document.getElementById("right").style.display = "none"; 

    action.innerText--;
    // var tryLeft = document.getElementById("action").innerText
    // var newtryLeft = tryLeft - 1; 
    // document.getElementById("action").innerText = newtryLeft;
    
}

// Button Disable 

if (action.innerText < 1){
    submitBtn.disabled = true;                  
    submitBtn.style.background = '#717277';
    action.innerText = 'Sorry no more';
}
})

// C button 

document.getElementById("clear").addEventListener('click', function(){

    document.getElementById("display-number").value = null; 
})

// > backspace button 

document.getElementById("remove").addEventListener('click', function(){

    var backspace = document.getElementById("display-number")
    backspace.value =backspace.value.substring(0, backspace.value.length - 1);
    
})
