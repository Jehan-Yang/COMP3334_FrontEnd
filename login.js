const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Perform login check here

    window.location.href = 'home.html';
});
