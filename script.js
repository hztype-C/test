function checkCode() {
    let code = prompt("Enter code: ");
    if (code === "1Type1C") {
        window.location.href = "secret.html";
    } else {
        alert("Wrong code.");
    }
}

function toggleMakerInfo() {
    let card = document.getElementById("makerCard");
    let info = document.getElementById("makerInfo");
    card.classList.toggle("active");
    if (card.classList.contains("active")) {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
