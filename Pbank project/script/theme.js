
function theme() {
    const themeButton = document.querySelector('.theme-button')
    let elem = document.documentElement
  
    themeButton.addEventListener('click', () => {
      if (elem.hasAttribute('data-theme')) {
        elem.removeAttribute('data-theme')
        localStorage.removeItem('theme')
      } else {
        elem.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
    });
  
    if (localStorage.getItem('theme') !== null) {
        elem.setAttribute('data-theme', 'light')
    }
  }
  
  document.addEventListener('DOMContentLoaded', theme);

  