// Set the date we're counting down to
var countDownDate = new Date(document.getElementById("countdown").getAttribute("getTime")).getTime();

// Update the count down every 1 second 
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = 
  "<span>" + days + "<small> Days </small>" + "</span>" + 
  "<span>" + hours + "<small> Hours </small>" + "</span>" + 
  "<span>" + minutes + "<small> Minutes </small>" + "</span>" + 
  "<span>" + seconds + "<small> Seconds </small>" + "</span>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }

  // Output the result in an element with id="countdownTwo"
  document.getElementById("countdownTwo").innerHTML = 
  "<span>" + days + "<small> Days </small>" + "</span>" + 
  "<span>" + hours + "<small> Hours </small>" + "</span>" + 
  "<span>" + minutes + "<small> Minutes </small>" + "</span>" + 
  "<span>" + seconds + "<small> Seconds </small>" + "</span>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownTwo").innerHTML = "EXPIRED";
  }

}, 1000);