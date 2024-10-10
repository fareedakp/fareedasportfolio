const scriptURL = 'https://script.google.com/macros/s/AKfycbyRLTRWOV5I1u-MsaulcBNSGyVba9pb7bdcCtYs3MOeSqCagWBz57wL8SeZoQfk85Zc/exec'
const form  = document.forms['contact-form']

form.addEventListener('submit', e=>{
 
  
  e.preventDefault()
  validateForm()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you ! Your enquiry is submitted success fully."))
  .then(() => {  window.location.reload(); } )
  .catch(error => console.error('Error !', error.message))

   



  
})

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mob = document.getElementById('mob').value;
  const sub = document.getElementById('sub').value;
  const msg = document.getElementById('msg').value;

  // Name validation
  if (name === '') {
    alert('Please enter your name');
    return false;
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Invalid email format');
    return false;
  }

  // Mobile number validation
  const mobRegex = /(7|8|9)\d{9}/;
  if (!mobRegex.test(mob)) {
    alert('Invalid mobile number. Please enter 10 digits');
    return false;
  }
 
  // Subject validation
  if (sub === '') {
    alert('Please enter a subject');
    return false;
  }

  // Message validation
  if (msg === '') {
    alert('Please enter a message');
    return false;
  }

  // If all fields are valid, submit the form
  alert('Form submitted successfully!');
  form.submit();
}
