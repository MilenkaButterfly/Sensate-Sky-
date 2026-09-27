const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileViewport = window.matchMedia('(max-width: 700px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.dataset.collapsed = String(mobileViewport.matches && !open);
}

function adaptNavigation() {
  menuButton.hidden = !mobileViewport.matches;
  setMenu(!mobileViewport.matches);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobileViewport.matches) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileViewport.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
mobileViewport.addEventListener('change', adaptNavigation);
adaptNavigation();
document.querySelector('#year').textContent = new Date().getFullYear();
