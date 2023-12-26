// const darkMode = document.querySelector('.dark-mode');
// darkMode.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode-variables');      
//     darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
//     darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
// })
//
const darkModeButton = document.querySelector('.dark-mode');
// Retrieve dark mode preference from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  const span1 = darkModeButton.querySelector('.material-icons-sharp:nth-child(1)');
  const span2 = darkModeButton.querySelector('.material-icons-sharp:nth-child(2)');
  const isDarkMode = storedDarkMode === 'true';
  document.body.classList.toggle('dark-mode-variables', isDarkMode);
  span1.classList.toggle('active', !isDarkMode);
  span2.classList.toggle('active', isDarkMode);
});
// Toggle dark mode on button click and store preference in localStorage
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode-variables');
  const span1 = darkModeButton.querySelector('.material-icons-sharp:nth-child(1)');
  const span2 = darkModeButton.querySelector('.material-icons-sharp:nth-child(2)');
  span1.classList.toggle('active');
  span2.classList.toggle('active');
  // Store the dark mode preference in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode-variables');
  localStorage.setItem('darkMode', isDarkMode);
});
//
const toggleContainer = document.querySelector('.toggle');
const toggleMenu = document.querySelector('#toggle-menu');
const toggleX = document.querySelector('#toggle-X');
const asideElement = document.querySelector('aside');
toggleContainer.addEventListener('click',()=>{
    toggleMenu.classList.toggle('hide')
    toggleX.classList.toggle('hide')
})
toggleMenu.addEventListener('click',()=>{
    asideElement.classList.remove('hidden')
})
toggleX.addEventListener('click',()=>{
    asideElement.classList.add('hidden')
})
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
let dateElement = document.querySelector('.dateElement');
dateElement.innerHTML= `Effective Date: ${month}/${day}/${year}.`