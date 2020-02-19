describe("EmailCheck",function() {
    var name = document.getElementById("name");
    it("name should be a string",function(sendMail){
        expect(name).toBeInstanceOf(string);
    });
    it("message should be a string",function(sendMail){
        expect(contactForm.fullmessage.value).toBeInstanceOf(string);
    });
    it("subject should be a string",function(sendMail){
        expect(contactForm.subject.value).toBeInstanceOf(string);
    });
    it("name should be a string",function(sendMail){
        expect(contactForm.name.value).toBeInstanceOf(email);
    });
});
