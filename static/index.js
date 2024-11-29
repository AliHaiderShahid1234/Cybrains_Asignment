document.addEventListener('DOMContentLoaded', function() {

    // Get the currently logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const navbar = document.querySelector('.navbar-nav');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const logoutItem = document.getElementById('logout-item');

    // Handle login and logout functionality in the navbar
    if (loggedInUser) {
        // Hide login and signup buttons
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
        logoutItem.style.display = 'block'; // Show logout button

        // Create and append Dashboard item to the navbar
        const dashboardItem = document.createElement('li');
        dashboardItem.classList.add('nav-item');
        dashboardItem.innerHTML = `<a class="nav-link" href="/dashboard">Dashboard</a>`;
        navbar.appendChild(dashboardItem);

        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            window.location.href = '/';
        });
    } else {
        // Show login and signup buttons
        loginForm.style.display = 'block';
        signupForm.style.display = 'block';
        logoutItem.style.display = 'none'; // Hide logout button
    }
});