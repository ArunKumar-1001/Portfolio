// script.js

function hireMe() {
  alert(
    "Thank you for your interest! You can reach me via the contact form below."
  );
}

// Optional greeting change based on time
window.onload = function () {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }
};
