document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    // Declare variables outside the if block
    let name = "";
    let email = "";
    let phone = "";
    let education = "";
    let experience = "";
    let skills = "";

    // Assign values only if elements exist
    if (
      nameElement &&
      emailElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      name = nameElement.value;
      email = emailElement.value;
      phone = phoneElement.value;
      education = educationElement.value;
      experience = experienceElement.value;
      skills = skillsElement.value;
    } else {
      console.error("One or more elements are missing");
      return; // Exit if any elements are missing
    }

    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit.name" class="editable"> ${name} </span> </p>
    <p><strong>Email:</strong> <span id="edit.email" class="editable"> ${email} </span> </p>
    <p><strong>Phone:</strong>  <span id="edit.phone" class="editable"> ${phone} </span> </p>

    <h3>Education</h3>
    <p id="edit.education" class="editable">${education}</p>

    <h3>Experience</h3>
    <p id="edit.experience" class="editable">${experience}</p>

    <h3>Skills</h3>
    <p id="edit.skills" class="editable">${skills}</p>
    `;

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      makeEditable();
    } else {
      console.error("The resume output element is missing");
    }
  });

  function makeEditable(){
    const editableElements = document.querySelectorAll(.editable);
    editableElements.forEach(element => {
        element.addEventListener(click , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // replace content
            if(currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
                const input = document.createElement(Input)
                input.type = "text"
                input.value = currentValue
                input.classList.add("editing input")
                 
                input.addEventListener("blur" , function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = "inline"
                    input.remove()
                })
                currentElement.style.display = "none"
                currentElement.parentMode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
  }