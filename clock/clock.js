time = setInterval(showtime,1000)
        
         function showtime(){
           let d = new Date();
           let hour = d.getHours();
           let min = d.getMinutes();
           let sec = d.getSeconds();
           am_pm = "AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
           console.log(hour+ ':'+ min+ ":"+ sec + am_pm);
           document.getElementById("hour").innerHTML = hour;
           document.getElementById("minutes").innerHTML = min;
           document.getElementById("seconds").innerHTML = sec;
           document.getElementById("ampm").innerHTML = am_pm;
           
         }