const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// OPEN MENU
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

// CLOSE MENU
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// CLOSE ON OVERLAY CLICK
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// HERO ANIMATION
window.onload = () => {
  document.getElementById("hero").classList.add("show");
};










// SCROLL ANIMATION FOR DASHBOARD
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

// APPLY TO ELEMENT
document.querySelectorAll(".scroll-animate").forEach(el=>{
  observer.observe(el);
});




