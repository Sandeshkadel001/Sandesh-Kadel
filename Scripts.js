function sendMail() {
    let parms = {
    name : document.getElementById("name").Value,
    email : document.getElementById("email").Value,
    subject : document.getElementById("subject").Value,
    message : document.getElementById("message").Value,
    }
    emailjs.send("service_vjyoo2t","template_rsv070p",parms).then(alert("Email Sent !!!"))
}