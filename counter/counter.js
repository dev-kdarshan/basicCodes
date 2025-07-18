let value = 0
function increment(){  
  if(increase)  
    value++
    document.getElementById("counter").innerHTML = value
    document.getElementById("result").innerHTML = "ohh,Incrementing!"
    document.getElementById("counter").style.color = "green";
}

function decrement(){
  if(decrease)
    value--
    document.getElementById("counter").innerHTML = value
    document.getElementById("result").innerHTML = "ohh,Decrementing!"
    document.getElementById("counter").style.color = "red";
}

function reset(){ 
  if(reset)
    value = 0
    document.getElementById("counter").innerHTML = value
    document.getElementById("result").innerHTML = "let's Go Again!"
    document.getElementById("counter").style.color = "black";
}