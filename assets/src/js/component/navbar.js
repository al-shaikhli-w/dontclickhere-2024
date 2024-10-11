document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById("burger");
    const navbarMenu = document.getElementById("menu-header");
    const navbar = document.querySelector(".navbar");
    if (!burgerMenu || !navbarMenu) return;

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
        navbar.classList.toggle("is-active");
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.style.maxHeight = navbarMenu.scrollHeight + 100 + "px";
        } else {
            navbarMenu.removeAttribute("style");
        }
        /**
         * Retrieves all menu items with children.
         *
         * @type {NodeList}
         */
        const menuItems = document.querySelectorAll(".menu-item-has-children");
        if (!menuItems) return;
        menuItems.forEach((menuItem) => {
            menuItem.classList.remove("dch-item-active");
        });
    });
    // ON SCROLL REMOVE ACTIVE CLASS FROM BURGER MENU
    window.addEventListener("scroll", () => {
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
        navbar.classList.remove("is-active");
        navbarMenu.removeAttribute("style");
        const menuItems = document.querySelectorAll(".menu-item-has-children");
        if (!menuItems) return;
        menuItems.forEach((menuItem) => {
            menuItem.classList.remove("dch-item-active");
        });
    });


    const searchButton = document.querySelector(".search-nav");
    const searchPage = document.querySelector(".search.search-results");
    const page404 = document.querySelector(".error404");
    /**
     * Toggles a class on an element's class list.
     *
     * @param {Element} element - The element on which to toggle the class.
     * @param {string} className - The name of the class to toggle.
     */
    const toggleClass = (element, className) => element?.classList.toggle(className);
    const addClass = (element, className) => element?.classList.add(className);
    const removeClass = (element, className) => element?.classList.remove(className);
    const searchForm = document.querySelector(".search-form-header");

    if (!searchPage && !page404) {
        if (!searchButton || !searchForm) return;
        searchButton.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("search button clicked");
            toggleClass(searchForm, "is-open");
            if (searchForm.classList.contains("is-open")) {
                searchForm.querySelector("input").focus();
            }

            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    removeClass(searchForm, "is-open");
                }
                if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                    addClass(searchForm, "is-open");
                    searchForm.querySelector("input").focus();
                }
            });
            // remove is open class when click outside the search form
            document.addEventListener("click", (e) => {
                if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
                    removeClass(searchForm, "is-open");
                }
            });

            // remove is open class on scroll the page 
            window.addEventListener("scroll", () => {
                removeClass(searchForm, "is-open");
            });

        });
    }

    const menuItems = document.querySelectorAll(".menu-item-has-children");
    if (!menuItems) return;
    menuItems.forEach((menuItem) => {
        const menuLink = menuItem.querySelector('a');
        if (!menuLink) return;
        menuLink.classList.add("dch-item-has-children");
        menuLink.addEventListener("click", (e) => {
            e.preventDefault();
            if (navbarMenu.classList.contains("is-active")) {
                navbarMenu.style.maxHeight = navbarMenu.scrollHeight + 100 + "px";
            } else {
                navbarMenu.removeAttribute("style");
            }
            menuItem.classList.toggle("dch-item-active");
        });
    });
    
    const handleScrollNavbar = () => {
        const elementScrollable = document.querySelector("html");
        const viewPortHeight = window.innerHeight;
        const scrollTop = elementScrollable.scrollTop;
        navbar.classList.toggle("is-scrolled", scrollTop >= viewPortHeight);
    }
    window.addEventListener("scroll", handleScrollNavbar);
    window.addEventListener("resize", handleScrollNavbar);
    handleScrollNavbar();
});
