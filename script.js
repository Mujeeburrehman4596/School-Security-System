// Get elements from the DOM
const webcamElement = document.getElementById('webcam');
const captureButton = document.getElementById('captureButton');
const attendanceStatus = document.getElementById('attendanceStatus');
const visitorForm = document.getElementById('visitorForm');
const alertMessages = document.getElementById('alertMessages');

// Function to start webcam stream
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamElement.srcObject = stream;
    } catch (error) {
        alert('Unable to access webcam: ' + error);
    }
}

// Simulated face recognition function
function recognizeFace() {
    // In a real scenario, you would integrate a face recognition model
    const randomNum = Math.random();
    return randomNum < 0.8; // 80% chance of successful recognition
}

// Event listener for the capture button
captureButton.addEventListener('click', () => {
    const recognized = recognizeFace();

    if (recognized) {
        attendanceStatus.style.display = 'block';
        attendanceStatus.textContent = 'Face recognized! Attendance marked successfully.';
    } else {
        attendanceStatus.style.display = 'block';
        attendanceStatus.textContent = 'Face not recognized! Please try again.';
    }
});

// Visitor Registration Function
visitorForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const visitorName = document.getElementById('visitorName').value;
    const visitorPurpose = document.getElementById('visitorPurpose').value;

    alert(`Visitor Registered:\nName: ${visitorName}\nPurpose: ${visitorPurpose}`);
    visitorForm.reset(); // Clear the form
});

// Simulated Alert Function (You can replace this with actual logic)
setInterval(() => {
    const randomNum = Math.random();
    if (randomNum < 0.2) { // 20% chance of generating an alert
        alertMessages.style.display = 'block';
        alertMessages.textContent = 'Alert! Unauthorized access detected!';
    } else {
        alertMessages.style.display = 'none'; // Hide alert if no alert is generated
    }
}, 5000); // Check every 5 seconds

// Start webcam stream on page load
startWebcam();
