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
  
  // Custom pulling interactions
  setupPullingInteractions()
  console.log('A-Frame scene loaded successfully!')
})

function setupPullingInteractions() {
  // Add visual feedback when objects are grabbed
  document.addEventListener('grab-start', (event) => {
    const object = event.target
    object.setAttribute('material', 'opacity', '0.8')
    object.setAttribute('scale', '1.1 1.1 1.1')
    console.log('Grabbed:', object.id || 'object')
  })
  
  // Reset visual feedback when objects are released
  document.addEventListener('grab-end', (event) => {
    const object = event.target
    object.setAttribute('material', 'opacity', '1.0')
    object.setAttribute('scale', '1 1 1')
    console.log('Released:', object.id || 'object')
  })
  
  // Add hover effects
  document.addEventListener('hover-start', (event) => {
    const object = event.target
    object.setAttribute('material', 'emissive', '#444444')
    console.log('Hovering over:', object.id || 'object')
  })
  
  document.addEventListener('hover-end', (event) => {
    const object = event.target
    object.setAttribute('material', 'emissive', '#000000')
  })
  
  // Add custom pull strength based on object type
  document.querySelectorAll('[grabbable]').forEach(object => {
    // Make sphere easier to pull (less mass)
    if (object.tagName === 'A-SPHERE') {
      object.setAttribute('dynamic-body', 'mass', '0.5')
    }
    // Make cylinder harder to pull (more mass)
    else if (object.tagName === 'A-CYLINDER') {
      object.setAttribute('dynamic-body', 'mass', '2.0')
    }
  })
}
