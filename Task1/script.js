document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'Admin') {
        if (password === 'Admin@123') {
            message.style.color = 'green';
            message.textContent = 'Login success';
        } else {
            message.style.color = 'red';
            message.textContent = 'Incorrect password';
        }
    } else {
        message.style.color = 'red';
        message.textContent = 'Incorrect username';
    }
});
