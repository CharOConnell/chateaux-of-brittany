describe("Contact form",function() {
    it("name should be a string",function(sendMail){
        expect(contactForm.name.value).toBeInstanceOf(String);
    });
    it("message should be a string",function(sendMail){
        expect(contactForm.fullmessage.value).toBeInstanceOf(String);
    });
    it("subject should be a string",function(sendMail){
        expect(contactForm.subject.value).toBeInstanceOf(String);
    });
    it("name should be a string",function(sendMail){
        expect(contactForm.name.value).toBeInstanceOf(String);
    });
});
