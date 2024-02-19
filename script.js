// fns

function openURL(url) {
  window.open(url, '_blank');
}

function themeChange(event) {
  if (event.matches) {
    fav.setAttribute('href', 'assets/favicon_black.ico')
  } else {
    fav.setAttribute('href', 'assets/favicon.ico')
  }
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

// themed favicon
const fav = document.querySelector('link[rel="icon"]')

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

themeChange(mediaQuery)

// hcps chromebook-specific tweaks
if (inIframe()) {
  document.getElementById("chromebook").style.display = "none";
}