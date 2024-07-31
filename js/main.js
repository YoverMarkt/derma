  /*=============== SEARCH ===============*/
  const search = document.getElementById('search');
  const searchBtnDesktop = document.getElementById('search-btn-desktop');
  const searchBtnMovil = document.getElementById('search-btn-movil');
  const searchClose = document.getElementById('search-close');
  
  searchBtnDesktop.addEventListener('click', () => search.classList.add('show-search'));
  searchBtnMovil.addEventListener('click', () => search.classList.add('show-search'));
  searchClose.addEventListener('click', () => search.classList.remove('show-search'));
  
  

  
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId),
        menu = document.getElementById(menuId)

    toggle.addEventListener('click', () => {
    
        menu.classList.toggle('show-menu')
       
        toggle.classList.toggle('show-icon')
    })
}

showMenu('menu-toggle', 'menu-menu')

const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(item => {
    const dropdownButton = item.querySelector('.dropdown__button');

    dropdownButton.addEventListener('click', () => {
        const showDropdown = document.querySelector('.show-dropdown');
        toggleItem(item);

        if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown);
        }
    });
});

const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown__container');

    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdown');
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown');
    }
};

const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainers = document.querySelectorAll('.dropdown__container');

const removeStyle = () => {
    if (mediaQuery.matches) {
        dropdownContainers.forEach(container => container.removeAttribute('style'));
        dropdownItems.forEach(item => item.classList.remove('show-dropdown'));
    }
};

addEventListener('resize', removeStyle);




//* CARRITO DE COMPRA

const addEventOnElem = (elems, type, callback) => {
    elems = elems.length ? elems : [elems];
    elems.forEach(elem => elem.addEventListener(type, callback));
  }
  
  const navbar = document.querySelector("[data-navbar]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleNavbar = () => {
    [navbar, overlay, document.body].forEach(el => el.classList.toggle("active"));
  }
  
  const closeNavbar = () => {
    [navbar, overlay, document.body].forEach(el => el.classList.remove("active"));
  }
  
  addEventOnElem(navTogglers, "click", toggleNavbar);
  addEventOnElem(navbarLinks, "click", closeNavbar);
  

