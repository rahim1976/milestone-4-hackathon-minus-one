// Form Validation for empty fields
function isFieldEmpty(field) {
    return field.value.trim() === "";
}
function showError(field) {
    field.style.borderColor = "red";
}
function clearError(field) {
    field.style.borderColor = "";
}
function validateForm() {
    var fullName = document.getElementById("fullName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var location = document.getElementById("location");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var isValid = true;
    [fullName, email, phone, location, education, experience, skills, projects].forEach(function (field) {
        if (isFieldEmpty(field)) {
            showError(field);
            isValid = false;
        }
        else {
            clearError(field);
        }
    });
    return isValid;
}
function previewImage(event) {
    var input = event.target;
    var profileDisplay = document.getElementById("profile-display");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                profileDisplay.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function generateResume() {
    if (!validateForm()) {
        alert("Please fill out all required fields.");
        return;
    }
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var projects = document.getElementById("projects").value;
    document.getElementById("name-display").textContent = fullName;
    document.getElementById("email-display").textContent = email;
    document.getElementById("phone-display").textContent = phone;
    document.getElementById("location-display").textContent = location;
    document.getElementById("education-display").textContent = education;
    document.getElementById("experience-display").textContent = experience;
    document.getElementById("skills-display").textContent = skills;
    document.getElementById("projects-display").textContent = projects;
    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-display").style.display = "block";
}
function editResume() {
    var fullName = document.getElementById("name-display").textContent;
    var email = document.getElementById("email-display").textContent;
    var phone = document.getElementById("phone-display").textContent;
    var location = document.getElementById("location-display").textContent;
    var education = document.getElementById("education-display").textContent;
    var experience = document.getElementById("experience-display").textContent;
    var skills = document.getElementById("skills-display").textContent;
    var projects = document.getElementById("projects-display").textContent;
    document.getElementById("fullName").value = fullName || "";
    document.getElementById("email").value = email || "";
    document.getElementById("phone").value = phone || "";
    document.getElementById("location").value = location || "";
    document.getElementById("education").value = education || "";
    document.getElementById("experience").value = experience || "";
    document.getElementById("skills").value = skills || "";
    document.getElementById("projects").value = projects || "";
    document.getElementById("resume-form").style.display = "block";
    document.getElementById("resume-display").style.display = "none";
}
document.getElementById("generate-resume").addEventListener("click", generateResume);
document.getElementById("edit-resume").addEventListener("click", editResume);
