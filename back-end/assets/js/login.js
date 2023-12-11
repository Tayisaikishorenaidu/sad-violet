// Function to handle login process
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // API endpoint for login
    const loginUrl = 'http://localhost/public/ideation/FashionEcom/api/admin/loginApi.php'; // Replace with your actual API endpoint

    // Data to be sent in the POST request
    const loginData = {
        username: username,
        password: password
    };

    // Sending a POST request to the login endpoint
    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        // Check login response from the server
        if (data.status === 'success') {
            // Successful login
            console.log('Login successful');
            window.location.href = "http://localhost/public/ideation/FashionEcom/back-end/index.html";

            // You can redirect the user to a different page or perform actions here upon successful login
        } else {
            // Failed login
            console.error('Login failed:', data.message);
            // Display an error message to the user or handle the failure appropriately
        }
    })
    .catch(error => {
        // Error in fetch request
        console.error('Error:', error);
        // Handle errors, such as network issues or server problems
    });
}

// Call loginUser() function when the button is clicked
document.getElementById('login-button').onclick = loginUser;
