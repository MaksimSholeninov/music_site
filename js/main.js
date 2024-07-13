function info(message) {
    console.log(message);
}

function activateSendButton() {
    let active = document.getElementById("email").value;
    if (active.length > 3) {
        let elem = document.getElementById("send");
        elem.disabled = false;
    } else {
        let elem = document.getElementById("send");
        elem.disabled = true;
    }
}

