document.getElementById("header").innerHTML = fetchHTML("./Pages/header.html");
document.getElementById("about").innerHTML = fetchHTML("./Pages/about.html");
// document.getElementById("shopping").innerHTML = fetchHTML("./Pages/shopping.html");
document.getElementById("experience").innerHTML = fetchHTML("./Pages/experience.html");
document.getElementById("projects").innerHTML = fetchHTML("./Pages/projects.html");
document.getElementById("contact").innerHTML = fetchHTML("./Pages/contact.html");
document.getElementById("footer").innerHTML = fetchHTML("./Pages/footer.html");

function fetchHTML(file) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file, false);
    xhr.send();
    return xhr.responseText;
}

// Function to detect if the user is on a mobile device
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
  
  // Instagram link handler
  document.querySelector('.social-link.instagram').addEventListener('click', function (event) {
    event.preventDefault();
    
    // Define app and web URLs
    var instagramAppLink = 'instagram://user?username=ann__rai';
    var instagramWebLink = 'https://www.instagram.com/ann__rai/';
    
    // Check if it's a mobile device
    if (isMobile()) {
      // Try opening Instagram in the app
      window.location = instagramAppLink;
      
      // If the app is not installed, fall back to web version after a brief delay
      setTimeout(function () {
        window.location = instagramWebLink;
      }, 1000); // 1 second delay
    } else {
      // For desktop users, open Instagram website in a new tab
      window.open(instagramWebLink, '_blank');
    }
  });
  
  // YouTube link handler
  document.querySelector('.social-link.youtube').addEventListener('click', function (event) {
    event.preventDefault();
    
    // Define app and web URLs
    var youtubeAppLink = 'vnd.youtube://channel/UCcQJcbQzWpg_Sj_gzGdbEiw';
    var youtubeWebLink = 'https://youtube.com/@fashionbeautywithme';
    
    // Check if it's a mobile device
    if (isMobile()) {
      // Try opening YouTube in the app
      window.location = youtubeAppLink;
      
      // If the app is not installed, fall back to web version after a brief delay
      setTimeout(function () {
        window.location = youtubeWebLink;
      }, 1000); // 1 second delay
    } else {
      // For desktop users, open YouTube website in a new tab
      window.open(youtubeWebLink, '_blank');
    }
  });
  
