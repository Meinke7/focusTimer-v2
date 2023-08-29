import * as sounds from './sounds.js'

const treeTheme = document.querySelector(".ph-tree-evergreen")
const fireTheme = document.querySelector(".ph-fire-simple")
const rainTheme = document.querySelector(".ph-cloud-rain")
const coffeeTheme = document.querySelector(".ph-storefront")
const bodyElement = document.body

let currentTheme = null

treeTheme.addEventListener('click', function() {

  if(currentTheme !== null) {
    currentTheme.pause()
  }
  currentTheme = sounds.treeAudio

  sounds.treeAudio.play()

  toggleThemeClass("treebg");
})


fireTheme.addEventListener('click', function() {
  if(currentTheme !== null) {
    currentTheme.pause()
  }
  currentTheme = sounds.fireAudio

  
  sounds.fireAudio.play()

  
    toggleThemeClass("firebg");
  })
 

rainTheme.addEventListener('click', function() {
  if(currentTheme !== null) {
    currentTheme.pause()
  }
  currentTheme = sounds.rainAudio

  
  sounds.rainAudio.play()

  
  toggleThemeClass("rainbg");
  })

  

coffeeTheme.addEventListener('click', function() {
  if(currentTheme !== null) {
    currentTheme.pause()
  }
  currentTheme = sounds.coffeeAudio


  sounds.coffeeAudio.play()

  
    toggleThemeClass("coffeebg");
  })


  function toggleThemeClass(themeClass) {
   
    bodyElement.classList.remove("treebg", "rainbg", "coffeebg", "firebg");
    
    bodyElement.classList.add(themeClass);
  }


