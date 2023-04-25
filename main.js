const hamb = document.querySelector(".hamb");
const linksItems = document.querySelector(".links__items");
const navOverlay = document.querySelector(".nav-overlay");
const isMobileView = () => window.innerWidth <= 820;
hamb.addEventListener("click", (event) => {
  event.stopPropagation();
  hamb.classList.toggle("active");
  linksItems.classList.toggle("active");
  navOverlay.classList.toggle("active");
});

const featuresLink = document.querySelector(".features");
const companyLink = document.querySelector(".company");
const featuresSubMenu = document.querySelector(".sub-menu.one");
const companySubMenu = document.querySelector(".sub-menu.two");
const handleSubMenuClick = (event, link, subMenu, otherLink, otherSubMenu) => {
  event.stopPropagation();
  if (!isMobileView()) {
    if (otherLink.classList.contains("active")) {
      otherSubMenu.classList.remove("show");
      otherLink.classList.remove("active");
    }
    subMenu.classList.toggle("show");
    link.classList.toggle("active");
  } else {
    subMenu.classList.toggle("show");
    link.classList.toggle("active");
  }
};

featuresLink.addEventListener("click", (event) =>
  handleSubMenuClick(
    event,
    featuresLink,
    featuresSubMenu,
    companyLink,
    companySubMenu
  )
);

companyLink.addEventListener("click", (event) =>
  handleSubMenuClick(
    event,
    companyLink,
    companySubMenu,
    featuresLink,
    featuresSubMenu
  )
);

linksItems.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Close submenus and mobile menu when clicked outside
document.addEventListener("click", () => {
  if (!isMobileView()) {
    featuresSubMenu.classList.remove("show");
    featuresLink.classList.remove("active");
    companySubMenu.classList.remove("show");
    companyLink.classList.remove("active");
  }
  if (linksItems.classList.contains("active")) {
    hamb.classList.remove("active");
    linksItems.classList.remove("active");
    navOverlay.classList.remove("active");
  }
});
