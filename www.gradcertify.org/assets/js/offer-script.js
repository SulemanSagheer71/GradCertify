 /* <script>
    // Countdown Timer Script
const countdown = () => {
  const endDate = new Date("January 1, 2025 00:00:00").getTime();
  const timer = document.getElementById("countdown");

  const updateTimer = () => {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      timer.querySelector("#days").textContent = days;
      timer.querySelector("#hours").textContent = hours;
      timer.querySelector("#minutes").textContent = minutes;
      timer.querySelector("#seconds").textContent = seconds;
    } else {
      clearInterval(interval);
      timer.innerHTML = "Offer has expired!";
    }
  };

  const interval = setInterval(updateTimer, 1000);
  updateTimer(); // Initialize immediately
};

window.onload = countdown;
</script> 
*/