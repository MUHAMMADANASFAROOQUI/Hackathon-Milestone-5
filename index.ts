document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault(); // Close the parenthesis here

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const cityElement = document.getElementById("city") as HTMLSelectElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;

    const usernameElement = document.getElementById(
      "username"
    ) as HTMLTextAreaElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      usernameElement
    ) {
      // Check if all form elements are present
      const name = nameElement.value;
      const email = emailElement.value;
      const address = addressElement.value;
      const city = cityElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const username = usernameElement.value;
      const uniquePath = `resumes/${username.replace(/\s+/g, "_")}_cv.html`;

      // Handle profile picture
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      // Generate resume HTML
      const resumeOutput = `
            <h2>Resume</h2>
            ${
              profilePictureURL
                ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
                : ""
            }
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
        
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Contact No.:</strong> ${phone}</p>

            <h3>Education:</h3>
            <p>${education}</p>
            
            <h3>Experience:</h3>
            <p>${experience}</p>
            
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const downlodlink = document.createElement("a");
        downlodlink.href =
          "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downlodlink.download = uniquePath;
        downlodlink.textContent = "Download your Resume";
        
      // Display resume output
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");


        const buttonsContainer = document.createElement("div");
        buttonsContainer.id = "buttonsContainer";
        resumeOutputElement.appendChild(buttonsContainer);
        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as PDF";
        downloadButton.addEventListener("click", () => {
          window.print(); 
        });
         


        buttonsContainer.appendChild(downloadButton);
        // Add Shareable Link button <
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable Link";
        shareLinkButton.addEventListener("click", () => {
          const shareableLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g, "_")}_cv.html`;
        
          if (navigator.clipboard && window.isSecureContext) {
            
            navigator.clipboard.writeText(shareableLink).then(() => {
              alert("Shareable link copied to clipboard!");
            }).catch(err => {
              console.error("Failed to copy link: ", err);
              alert("Failed to copy link to clipboard. Please try again.");
            });
          } else {
            
            const tempTextArea = document.createElement("textarea");
            tempTextArea.value = shareableLink;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand("copy");
            document.body.removeChild(tempTextArea);
            alert("Shareable link copied to clipboard (fallback method)!");
          }
        });
        

        resumeOutputElement.appendChild(downlodlink);

        resumeOutputElement.style.display = "block";
      } else {
        console.error("The resume output element is unavailable.");
      }
    } else {
      console.error("One or more form elements are missing.");
    }
  });
// Display resume output
