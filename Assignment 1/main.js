<<<<<<< HEAD
window.onload =  () => {
    var minute = 59;
    var seconds = 58; 
    var tens = 00; 
    var hour = 00;
    var appendMinute = document.getElementById("minute")
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendHours = document.getElementById("hour");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick= () => {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick= () => {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = () => {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
        minute="00";
        hour="00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinute.innerHTML = minute;
        appendHours.innerHTML= hour;
    }
    
     
    
    let startTimer = () => {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }

      if(seconds>59){
        console.log("minute");
        minute++;
        appendMinute.innerHTML="0"+minute;
        seconds=0;
        appendSeconds.innerHTML = "0" + 0;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      if(minute>9){
        appendMinute.innerHTML=minute;
      }
      if(minute>59){
        console.log("hour");
        hour++;
        appendHours.innerHTML="0"+hour;
        minute=0;
        appendMinute.innerHTML="0"+0;
        seconds=0;
        appendSeconds.innerHTML = "0" + 0;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      if(hour>9){
        appendHours.innerHTML=hour;
      }

    }
    
  
  }
=======
window.onload =  () => {
    var minute = 00;
    var seconds = 00; 
    var tens = 00; 
    var hour = 00;
    var appendMinute = document.getElementById("minute")
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendHours = document.getElementById("hour");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick= () => {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick= () => {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = () => {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
        minute="00";
        hour="00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinute.innerHTML = minute;
        appendHours.innerHTML= hour;
    }
    
     
    
    let startTimer = () => {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }

      if(seconds>59){
        console.log("minute");
        minute++;
        appendMinute.innerHTML="0"+minute;
        seconds=0;
        appendSeconds.innerHTML = "0" + 0;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      if(minute>9){
        appendMinute.innerHTML=minute;
      }
      if(minute>59){
        console.log("hour");
        hour++;
        appendHours.innerHTML="0"+hour;
        minute=0;
        appendMinute.innerHTML="0"+0;
        seconds=0;
        appendSeconds.innerHTML = "0" + 0;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      if(hour>9){
        appendHours.innerHTML=hour;
      }

    }
    
  
  }
>>>>>>> 083dd4c7b65b513ca59b6d88ccd94e7be7728b85
