// Ensure DOM is loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {

  // Toggle mobile menu
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }

  // Change navbar background on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.toggle("navbar-scroll", window.scrollY > 0);
    }
  });

  // Program Curriculum Tabs
  const tabs = document.querySelectorAll(".tab-1-button");
  const contents = document.querySelectorAll(".tab-1-content");

  if (tabs.length && contents.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((btn) => btn.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));

        tab.classList.add("active");
        const activeContent = document.getElementById(tab.getAttribute("data-tab"));
        if (activeContent) {
          activeContent.classList.add("active");
          activeContent.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // Helper function to open and close popups
  function openPopup(popupId) {
    const popupContainer = document.getElementById(popupId);
    if (!popupContainer) {
      console.error(`Popup with ID "${popupId}" not found.`);
      return;
    }
    popupContainer.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  function closePopup(popupId) {
    const popupContainer = document.getElementById(popupId);
    if (!popupContainer) {
      console.error(`Popup with ID "${popupId}" not found.`);
      return;
    }
    popupContainer.style.display = "none";
    document.body.style.overflow = "auto";
  }
  

  // Apply Now Popup
  window.applyNow = function () {
    openPopup("applyNowPopup");
  };

  window.closeApplyNow = function () {
    closePopup("applyNowPopup");
  };

  // Free Demo Popup
  window.freeDemo = function () {
    openPopup("freeDemoPopup");
  };

  window.closeFreeDemo = function () {
    closePopup("freeDemoPopup");
  };

  // Download Brochure Popup
  window.downloadBrochure = function () {
    openPopup("downloadBrochurePopup");
  };

  window.closeDownloadBrochure = function () {
    closePopup("downloadBrochurePopup");
  };

});
