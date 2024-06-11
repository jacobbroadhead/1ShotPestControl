document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    console.log(formData); // Here you would send data to your API
    
    // Reset form
    document.getElementById('contact-form').reset();
    
    alert('Your message has been sent!');
});

document.getElementById('phone').addEventListener('input', function(event) {
    let input = event.target.value;
    input = input.replace(/\D/g, ''); // Remove all non-numeric characters
    if (input.length <= 3) {
        input = input.replace(/^(\d{0,3})/, '($1');
    } else if (input.length <= 6) {
        input = input.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    } else {
        input = input.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
    }
    event.target.value = input;
});
