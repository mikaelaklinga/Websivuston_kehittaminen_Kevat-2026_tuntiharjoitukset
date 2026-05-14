function toggleHamburger() {  
  const nav = document.getElementById("mainNav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
} 
