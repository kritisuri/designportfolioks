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
