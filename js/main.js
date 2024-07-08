function info(message) {
    console.log(message);
}

function activateSendButton() {
    let active = document.getElementById("email").value;
    if (active.length > 5) {
        let elem = document.getElementById("send");
        elem.disabled = false;
    } else {
        elem.disabled = true;
    }
}

