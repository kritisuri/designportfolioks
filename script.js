// Smooth scrolling to "Design Portfolio" when image5 is clicked
document.getElementById('image5').addEventListener('click', function() {
    document.getElementById('text1').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Smooth scrolling to "C:\Users\Kriti Suri\Downloads\Frame 2 (1).png" when image7 is clicked
  document.getElementById('image7').addEventListener('click', function() {
    document.getElementById('image6').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('scroll-link3').addEventListener('click', function() {
    document.getElementById('image-5').scrollIntoView({ behavior: 'smooth' });
  });
  const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
const content = document.querySelector('section');

toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
    content.classList.toggle('expand');
};

const body = document.querySelector('body');
const bgModeBtn = document.getElementById('bgModeBtn');
const bgModeIcon = document.getElementById('bgModeIcon');
const sectionHeader = document.querySelector('section h1');

bgModeBtn.onclick = function(){
    body.classList.toggle("dark-mode");
    bgModeIcon.classList.toggle("fa-sun-o");
    bgModeIcon.classList.toggle("fa-moon-o");
    sectionHeader.classList.toggle("dark-mode");
}
