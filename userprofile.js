document.addEventListener("DOMContentLoaded", function () {
  // Simple alert on form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Message sent successfully!");
      this.reset();
    });

  // Simulated availability calendar
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "<p>Click to set availability</p>";

  calendar.addEventListener("click", function () {
    this.innerHTML = "<p>Available on weekends</p>";
    this.style.backgroundColor = "#4caf50";
    this.style.color = "white";
  });
});
