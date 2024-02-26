var age = prompt("give me your age")
var isStudent = prompt("are you a student? (yes/no)")
var ticketPricen;

if(age < 12){
    ticketPrice = 5
}else if (age > 12 && age < 18){
     if(isStudent=='yes'){
        ticketPrice = 8
     }else{
        ticketPrice = 10
     }
}else{
    ticketPrice = 12
}

alert("YOUR TICKET PRICE : $"+ticketPrice)