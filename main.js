var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // Declare variables outside the if block
    var name = "";
    var email = "";
    var phone = "";
    var education = "";
    var experience = "";
    var skills = "";
    // Assign values only if elements exist
    if (nameElement &&
        emailElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        name = nameElement.value;
        email = emailElement.value;
        phone = phoneElement.value;
        education = educationElement.value;
        experience = experienceElement.value;
        skills = skillsElement.value;
    }
    else {
        console.error("One or more elements are missing");
        return; // Exit if any elements are missing
    }
    var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> <span id=\"edit.name\" class=\"editable\"> ".concat(name, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit.email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>Phone:</strong>  <span id=\"edit.phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n    <h3>Education</h3>\n    <p id=\"edit.education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p id=\"edit.experience\" class=\"editable\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p id=\"edit.skills\" class=\"editable\">").concat(skills, "</p>\n    ");
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
    }
    else {
        console.error("The resume output element is missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(editable);
    editableElements.forEach(function (element) {
        element.addEventListener(click, function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement(Input);
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentMode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
