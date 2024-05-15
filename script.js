var viewportHeight = window.innerHeight/3;
var totalHeight = document.body.scrollHeight*0.55;

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var newOpacity = 1 - (scrollTop / viewportHeight); // Adjust the value 200 to control when the opacity starts to fade
    newOpacity = Math.min(1, Math.max(0, newOpacity)); // Ensure opacity stays between 0 and 1
    document.querySelector('.headies').style.opacity = newOpacity;

    var newOpacity = (scrollTop / totalHeight) - 1; // Adjust the value 200 to control when the opacity starts to fade
    newOpacity = Math.min(Math.max(0, newOpacity),1); 
    document.querySelector('.footies').style.opacity = newOpacity;

  
    var newOpacity = (scrollTop / totalHeight*20) - 1; // Adjust the value 200 to control when the opacity starts to fade
    newOpacity = Math.min(Math.max(0, newOpacity),1); 
    document.querySelector('.skills').style.opacity = newOpacity;

    var newOpacity = (scrollTop / totalHeight*3) - 1; // Adjust the value 200 to control when the opacity starts to fade
    newOpacity = Math.min(Math.max(0, newOpacity),1); 
    document.querySelector('.experience').style.opacity = newOpacity;

    var newOpacity = (scrollTop / totalHeight*2) - 1; // Adjust the value 200 to control when the opacity starts to fade
    newOpacity = Math.min(Math.max(0, newOpacity),1); 
    document.querySelector('.projects').style.opacity = newOpacity;


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

function redirectToMedium() {
       // Define the URL you want to redirect to
       var url = 'https://medium.com/@tobiawolaju21';
    
       // Open the URL in a new tab
       window.open(url, '_blank'); 
}


function redirectToTwitter() {
    // Define the URL you want to redirect to
    var url = 'https://twitter.com/sidotart';
 
    // Open the URL in a new tab
    window.open(url, '_blank'); 
}


//send mail
document.getElementById("sendmail").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can perform validation here if needed

    // Create a data object to send to the server
    var data = {
        name: name,
        email: email,
        message: message
    };

    // Send the data to the server using fetch API or XMLHttpRequest
    fetch("https://blockchain-backend-e394.onrender.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Error sending email. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error sending email. Please try again later.");
    });
});

