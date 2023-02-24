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
  
  // Add an event listener to the form submit event
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();
  
    // Call the validateForm function and check its return value
    if (validateForm()) {
      // If the form is valid, add a message and submit the form
      const message = document.createElement("p");
      message.textContent = "Form passed validation!";
      form.insertAdjacentElement("beforebegin", message);
      form.reset();
    }
  });
  
  
  