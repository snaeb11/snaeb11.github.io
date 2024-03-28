document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('button');

    loginButton.addEventListener('click', function() {
         login();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            loginButton.click();
        }
    });


    function login() {
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;
    
        if (email !== '' && password !== '') {
            if (email === 'admin@admin.com' && password === 'admin123') {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Admin',
                    timer: 1000,
                    showConfirmButton: false
                }).then(function() {
                    window.location.href = 'admin.html';
                });
            } else if (email === 'user@gmail.com' && password === 'user123') {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome User',
                    timer: 1000,
                    showConfirmButton: false
                }).then(function() {
                    window.location.href = 'userprofile.html';
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Email or Password"
                  });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter credentials"
              });
        }
    }
    
    
});
