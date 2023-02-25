function validateForm() {
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
  
    let valid = true;
    if (name === "") {
      valid = false;
      alert("Please enter your name.");
    }
    if (subject.length < 10) {
      valid = false;
      alert("Subject must be at least 10 characters long.");
    }
    if (!validateEmail(email)) {
      valid = false;
      alert("Please enter a valid email address.");
    }
    if (address.length < 25) {
      valid = false;
      alert("Address must be at least 25 characters long.");
    }
  
    return valid;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  const form = document.getElementById("myForm");
  const message = document.getElementById("message");
  
  // Add an event listener to the form submit event
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();
  
    // Call the validateForm function and check its return value
    if (validateForm()) {
      // If the form is valid, add a message below the submit button
      message.textContent = "Message Received! We Will Reply To You Within 14 Days";
      message.classList.add("success-message");
      form.reset();
    }
  });
  
  
  
  