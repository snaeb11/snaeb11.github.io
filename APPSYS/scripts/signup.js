document.addEventListener('DOMContentLoaded', function(){
    var signupButton = document.getElementById('sgbut');

    signupButton.addEventListener('click', function() {
        signup();
   });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            signupButton.click();
        }
    });

    function passwordCheck() {
        var email = document.getElementById('emailInput').value;
        var password1 = document.getElementById('pass1input').value;
        var password2 = document.getElementById('pass2input').value;
        var designation = document.querySelector('input[name="designation"]:checked');
    
        if (email === '' || password1 === '' || password2 === '' || !designation) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields."
            });
            return false;
        }
    
        if (!isValidEmail(email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid email address."
            });
            return false;
        }
    
        if (password1 !== password2) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwords do not match."
            });
            return false;
        }
        
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Account successfully created."
        }).then(function() {
            window.location.href = 'login.html';
        });
        return true;
    }
    

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function signup(){
        isValidEmail();
        passwordCheck();
    }


});