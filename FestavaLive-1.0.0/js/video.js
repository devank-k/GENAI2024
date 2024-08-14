// Get the video element
const video = document.getElementById('video');

// Add an event listener to the video element to detect when it ends
video.addEventListener('ended', function() {
  console.log('Video ended');
  
  // Get the next section element
  const nextSection = document.getElementById('about');
  
  console.log('Next section:', nextSection);
  
  // Scroll to the next section
  window.scrollTo({
    top: nextSection.offsetTop,
    behavior: 'smooth'
  });
});