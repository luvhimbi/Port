const myStoryTab = document.getElementById('my-story');
const skillsTab = document.getElementById('skills');
const educationTab = document.getElementById('education');

const myStoryContent = document.getElementById('my-story-content');
const skillsContent = document.getElementById('skills-content');
const educationContent = document.getElementById('education-content');

myStoryTab.addEventListener('click', () => {
    myStoryContent.style.display = 'block';
    skillsContent.style.display = 'none';
    educationContent.style.display = 'none';
});

skillsTab.addEventListener('click', () => {
    myStoryContent.style.display = 'none';
    skillsContent.style.display = 'block';
    educationContent.style.display = 'none';
});

educationTab.addEventListener('click', () => {
    myStoryContent.style.display = 'none';
    skillsContent.style.display = 'none';
    educationContent.style.display = 'block';
});
// Get the pop-up message element
const popupMessage = document.getElementById("popup-message");

// Show the pop-up message
window.onload = function() {
    popupMessage.style.display = "block";

    // Hide the pop-up message after 15 seconds (15000 milliseconds)
    setTimeout(function() {
        popupMessage.style.display = "none";
    }, 4000);
};
