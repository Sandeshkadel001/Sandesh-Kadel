function updateClock() {
    const timeDisplay = document.getElementById('time');
  
    const now = new Date();
    let hours = now.getHours(); // Get current hours (24-hour format)
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If 0 (midnight), set to 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Display the time in 12-hour format with AM/PM
    timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial clock update
  updateClock();
  