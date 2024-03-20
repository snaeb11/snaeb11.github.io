function error() {
    alert("Under construction");
}

function asd(value){

    if (value == ''){
        alert("Please enter a value");
    } else {
        alert("You've search for " + value);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        asd(document.getElementById('srch-box').value);
    }
}

function emptyCheck(fieldValue, fieldName){
if (fieldValue == ''){
    alert("Please " + fieldName);
    return false;
    }
}

function notice(){
    alert("Site might be laggy due to high resolution images.");
}