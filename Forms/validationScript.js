    // JavaScript code for form validation
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e) {
	// Prevent form from submitting
  e.preventDefault();

  // Retrieve the input field value
  let inputField = document.getElementById('inputField');
  let inputValue = inputField.value;
  // Regular expression pattern for alphanumeric input
  let regex = /^[a-zA-Z0-9]*$/;
  // Check if the input value matches the pattern
  if (regex.test(inputValue)) {
    // Valid input: display confirmation and submit the form
    alert('Form submitted successfully!');
    myForm.submit();
  } else {
    // Invalid input: display error message
    alert('Invalid format!');
  }
});
