const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const avatar = document.getElementById('avatar');

avatar.addEventListener('click', () => {
    window.location.href = 'property.html?authority=self';
});
