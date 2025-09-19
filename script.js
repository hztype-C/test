function checkCode() {
    let code = prompt("Enter code: ");
    if (code === "1Type1C") {
        window.location.href = "secret.html";
    } else {
        alert("Wrong code.");
    }
}
