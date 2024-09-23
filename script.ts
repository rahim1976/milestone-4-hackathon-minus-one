// Form Validation for empty fields
function isFieldEmpty(field: HTMLInputElement | HTMLTextAreaElement): boolean {
    return field.value.trim() === "";
  }
  
  function showError(field: HTMLElement): void {
    (field as HTMLInputElement).style.borderColor = "red";
  }
  
  function clearError(field: HTMLElement): void {
    (field as HTMLInputElement).style.borderColor = "";
  }
  
  function validateForm(): boolean {
    const fullName = document.getElementById("fullName") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const phone = document.getElementById("phone") as HTMLInputElement;
    const location = document.getElementById("location") as HTMLInputElement;
    const education = document.getElementById("education") as HTMLTextAreaElement;
    const experience = document.getElementById("experience") as HTMLTextAreaElement;
    const skills = document.getElementById("skills") as HTMLTextAreaElement;
    const projects = document.getElementById("projects") as HTMLTextAreaElement;
  
    let isValid = true;
  
    [fullName, email, phone, location, education, experience, skills, projects].forEach(function (field) {
      if (isFieldEmpty(field)) {
        showError(field);
        isValid = false;
      } else {
        clearError(field);
      }
    });
  
    return isValid;
  }
  
  function previewImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const profileDisplay = document.getElementById("profile-display") as HTMLImageElement;
    
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e: ProgressEvent<FileReader>) {
        if (e.target?.result) {
          profileDisplay.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  function generateResume(): void {
    if (!validateForm()) {
      alert("Please fill out all required fields.");
      return;
    }
  
    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
  
    document.getElementById("name-display")!.textContent = fullName;
    document.getElementById("email-display")!.textContent = email;
    document.getElementById("phone-display")!.textContent = phone;
    document.getElementById("location-display")!.textContent = location;
    document.getElementById("education-display")!.textContent = education;
    document.getElementById("experience-display")!.textContent = experience;
    document.getElementById("skills-display")!.textContent = skills;
    document.getElementById("projects-display")!.textContent = projects;
    document.getElementById("resume-form")!.style.display = "none";
    document.getElementById("resume-display")!.style.display = "block";
  }
  
  function editResume(): void {
    const fullName = document.getElementById("name-display")!.textContent;
    const email = document.getElementById("email-display")!.textContent;
    const phone = document.getElementById("phone-display")!.textContent;
    const location = document.getElementById("location-display")!.textContent;
    const education = document.getElementById("education-display")!.textContent;
    const experience = document.getElementById("experience-display")!.textContent;
    const skills = document.getElementById("skills-display")!.textContent;
    const projects = document.getElementById("projects-display")!.textContent;
  
    (document.getElementById("fullName") as HTMLInputElement).value = fullName || "";
    (document.getElementById("email") as HTMLInputElement).value = email || "";
    (document.getElementById("phone") as HTMLInputElement).value = phone || "";
    (document.getElementById("location") as HTMLInputElement).value = location || "";
    (document.getElementById("education") as HTMLTextAreaElement).value = education || "";
    (document.getElementById("experience") as HTMLTextAreaElement).value = experience || "";
    (document.getElementById("skills") as HTMLTextAreaElement).value = skills || "";
    (document.getElementById("projects") as HTMLTextAreaElement).value = projects || "";
  
    document.getElementById("resume-form")!.style.display = "block";
    document.getElementById("resume-display")!.style.display = "none";
  }
  
  document.getElementById("generate-resume")!.addEventListener("click", generateResume);
  document.getElementById("edit-resume")!.addEventListener("click", editResume);
  