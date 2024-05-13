var viewportHeight = window.innerHeight/3;

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var newOpacity = 1 - (scrollTop / viewportHeight); // Adjust the value 200 to control when the opacity starts to fade
    newOpacity = Math.min(1, Math.max(0, newOpacity)); // Ensure opacity stays between 0 and 1
    document.querySelector('.headies').style.opacity = newOpacity;
});

function redirectToGitHub() {
    // Define the URL you want to redirect to
    var url = 'https://github.com/tobi-awolaju-21';
    
    // Open the URL in a new tab
    window.open(url, '_blank');
}

function redirectToLinkedIn() {
    // Define the URL you want to redirect to
    var url = 'https://www.linkedin.com/in/awolaju/';
    
    // Open the URL in a new tab
    window.open(url, '_blank');
}