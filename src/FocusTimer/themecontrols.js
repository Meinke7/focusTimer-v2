
const buttons = document.querySelectorAll('#card');

 buttons.forEach(button => {
  button.addEventListener('click', function() {
    
    buttons.forEach(btn => btn.classList.remove('running'));
    
    
    button.classList.add('running');
  });
});