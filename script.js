function sendMessage(event) {
  event.preventDefault();
  document.getElementById("form-status").innerText =
    "✅ Thanks for reaching out! I’ll get back to you soon.";
  event.target.reset();
}