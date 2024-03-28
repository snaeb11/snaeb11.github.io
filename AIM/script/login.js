function moveRight(){
    var loginWindow = document.getElementById('login-window');
    var registerWindow = document.getElementById('register-window');

    loginWindow.classList.remove('moveleft');
    registerWindow.classList.remove('move-right');

    loginWindow.classList.add('returnLogin');
    registerWindow.classList.add('returnReg');
}

function moveLeft(){
    var loginWindow = document.getElementById('login-window');
    var registerWindow = document.getElementById('register-window');

    loginWindow.classList.remove('returnLogin');
    registerWindow.classList.remove('returnReg');

    loginWindow.classList.add('moveleft');
    registerWindow.classList.add('move-right');
}
