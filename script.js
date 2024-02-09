// gonna avoid href for now
function openURL(url) {
    window.open(url, '_blank');
}

// themed favicon
const fav = document.querySelector('link[rel="icon"]')

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

function themeChange(event) {
  if (event.matches) {
    fav.setAttribute('href', 'assets/favicon_black.ico')
  } else {
    fav.setAttribute('href', 'assets/favicon.ico')
  }
}

themeChange(mediaQuery)