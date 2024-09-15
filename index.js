var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Close the parenthesis here
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var addressElement = document.getElementById("address");
    var cityElement = document.getElementById("city");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        // Check if all form elements are present
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var city = cityElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username_1 = usernameElement.value;
        var uniquePath = "resumes/".concat(username_1.replace(/\s+/g, "_"), "_cv.html");
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Generate resume HTML
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n            <p><strong>Full Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n        \n            <p><strong>City:</strong> ").concat(city, "</p>\n            <p><strong>Contact No.:</strong> ").concat(phone, "</p>\n\n            <h3>Education:</h3>\n            <p>").concat(education, "</p>\n            \n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var downlodlink = document.createElement("a");
        downlodlink.href =
            "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downlodlink.download = uniquePath;
        downlodlink.textContent = "Download your Resume";
        // Display resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            // Add Shareable Link button <
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", function () {
                var shareableLink = "https://yourdomain.com/resumes/".concat(username_1.replace(/\s+/g, "_"), "_cv.html");
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(shareableLink).then(function () {
                        alert("Shareable link copied to clipboard!");
                    }).catch(function (err) {
                        console.error("Failed to copy link: ", err);
                        alert("Failed to copy link to clipboard. Please try again.");
                    });
                }
                else {
                    var tempTextArea = document.createElement("textarea");
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
        }
        else {
            console.error("The resume output element is unavailable.");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
// Display resume output
