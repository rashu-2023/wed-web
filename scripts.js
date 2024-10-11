// Show RSVP Form
document.getElementById('rsvp-button').addEventListener('click', function() {
    document.getElementById('rsvp-modal').classList.remove('hidden');
    document.getElementById('rsvp-modal').style.display = 'block';
});

// Close RSVP Form
document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('rsvp-modal').classList.add('hidden');
    document.getElementById('rsvp-modal').style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('rsvp-modal')) {
        document.getElementById('rsvp-modal').classList.add('hidden');
        document.getElementById('rsvp-modal').style.display = 'none';
    }
});

// Submit the RSVP Form
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Send data to Google Sheets (Add your Web App URL)
    fetch('https://script.google.com/macros/s/AKfycbw49YXQRCe0K10wqhVjUlLKEUCCGA2_QPbAPbjv5L5vEuf0cL3LTKPqGVHwBdjwpLpy/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${name}&phone=${phone}`,
    })
    .then(response => response.text())
    .then(result => {
        alert('RSVP Submitted! Thank you.');
        document.getElementById('rsvp-modal').classList.add('hidden');
        document.getElementById('rsvp-modal').style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});