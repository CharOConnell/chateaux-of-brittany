function sendMail(contactForm) {
    emailjs.send("gmail","chateau",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "user_subject": contactForm.subject.value,
        "user_message": contactForm.message.value
    }) 
    .then(
        function(response) {
            console.log("SUCCESS", response); // successfully sends data to email
        },
        function(error) {
            console.log("FAILED", error); // if it failed to send
        }
    );
    return false; // to block the button from loading a new page
}




