var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// function to generate the resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        //Generate HTML for the resume
        var resumeHTML = "\n\n      <h2>Generated Resume</h2>\n      <p><Strong>Name:</strong> ".concat(name, "</p>\n      <p><Strong>Email:</strong> ").concat(email, "</p>\n      <p><Strong>Phone:</strong> ").concat(phone, "</p>\n      <p><Strong>Education:</strong> ").concat(education, "</p>\n      <p><Strong>Experience:</strong> ").concat(experience, "</p>\n      <p><Strong>Skills:</strong> ").concat(skills, "</p>\n      <p><Strong>Description:</strong> ").concat(description, "</p>\n      \n  ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('form or output div not found in the DOM');
}
var shareablelLink = document.getElementById("shareable-link");
shareablelLink === null || shareablelLink === void 0 ? void 0 : shareablelLink.addEventListener("click", function () {
});
var downloadPdf = document.getElementById("downloadpdf");
downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", function () {
    window.print();
});
