function sendEmail() {
    Email.send({
        SecureToken: "91a4f35d-528c-4da7-835a-17eadfed3316",
        To: "takenolove13579@gmail.com",
        From: "kamrulnazmulhafiz@gmail.com",
        Subject: "New Email From WebTechDUDE",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("msg").value
        ,
    }).then(
        message => alert("Successfully Sent")
    );
}