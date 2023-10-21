// Assuming script.js content

// Get the target date for the countdown
const targetDate = new Date("Oct 31, 2023 18:30:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function () {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `Party starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, clear the interval
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Party time!";
  }
}, 1000);
