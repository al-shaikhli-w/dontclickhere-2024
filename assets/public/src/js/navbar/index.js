const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const burgermenu = select('.burgermenu');
const menuHeader = select('#menu-header');
const header = select('.header');
const firstAnchorsLink = selectAll('.header-menu #menu-header>li a');
const itemHasChildren = selectAll('.header .header-menu .menu-item-has-children');

const backLink = `
    <li class="back-item">
        <button class="nav-link nav-back-link" aria-label="Main menu" name="back button">
            <svg class="back-icon" width="20" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
        </button>
    </li>
`;

const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);

const addEventListenerToElements = (elements, event, listener) => {
    elements.forEach(element => element.addEventListener(event, listener));
};

const menuhandler = () => {
    toggleClass(burgermenu, 'opened');
    toggleClass(menuHeader, 'opened');
    toggleClass(header, 'opened');

    selectAll('.header .header-menu .sub-menu.opened').forEach(item => removeClass(item, 'opened'));
};
const addClassWhenScrollToHeader = () => {
    if (window.scrollY > 0) {
        addClass(header, 'scroll');
    }
    else {
        removeClass(header, 'scroll');
    }
}

const addBackLink = () => {
    itemHasChildren.forEach(item => {
        const submenu = item.querySelector('.sub-menu');
        if (submenu) {
            submenu.insertAdjacentHTML('afterbegin', backLink);
        }
    });
};

const closeSubmenu = (event) => {
    event.preventDefault();
    const parent = event.target.parentElement.parentElement;
    const parentSubmenu = parent.parentElement;

    if (parentSubmenu.classList.contains('opened')) {
        removeClass(parentSubmenu, 'opened');
    }

    if (event.target.classList.contains('nav-back-link')) {
        removeClass(parent, 'opened');
    }
};

const addClassToHasChildren = (event) => {
    event.preventDefault();
    const target = event.target;
    const parent = target.parentElement;
    const submenu = parent.querySelector('.sub-menu');
    const allSubmenu = selectAll('.header .header-menu .sub-menu');

    if (submenu) {
        allSubmenu.forEach(item => {
            if (item !== submenu) {
                removeClass(item, 'opened');
            }
        });
        toggleClass(submenu, 'opened');
    }
};
const addClassTohasChildrenWhenHover = (event) => {
    const target = event.target;
    const parent = target.parentElement;
    const submenu = parent.querySelector('.sub-menu');

    if (submenu) {
        addClass(submenu, 'menu-hover');
    }
}
const removeClassTohasChildrenWhenHover = (event) => {
    const target = event.target;
    const parent = target.parentElement;
    const submenu = parent.querySelector('.sub-menu');

    if (submenu) {
        removeClass(submenu, 'menu-hover');
    }
}

window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', addClassWhenScrollToHeader);
    burgermenu.addEventListener('click', menuhandler);
    addEventListenerToElements(itemHasChildren, 'click', addClassToHasChildren);

    const backLinks = selectAll('.nav-back-link');
    addEventListenerToElements(backLinks, 'click', closeSubmenu);
    addEventListenerToElements(itemHasChildren, 'mouseover', addClassTohasChildrenWhenHover);
    addEventListenerToElements(itemHasChildren, 'mouseout', removeClassTohasChildrenWhenHover);
    addBackLink();
});