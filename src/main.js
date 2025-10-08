import './style.css'

// Add loading screen
document.body.innerHTML = `
  <div class="loading-screen">
    <div class="loading-spinner"></div>
    <div class="loading-text">Loading A-Frame Experience...</div>
  </div>
`

// Wait for A-Frame to load
window.addEventListener('load', () => {
  // Add loaded class to body to hide loading screen
  document.body.classList.add('loaded')
  
  // Optional: Add some custom A-Frame components or interactions here
  console.log('A-Frame scene loaded successfully!')
})
