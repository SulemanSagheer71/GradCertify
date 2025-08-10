// Global functions (available immediately for onclick handlers)
function toggleWhatsAppPopup() {
  const popup = document.getElementById("whatsapp-popup");
  
  if (popup) {
    const isVisible = popup.style.display === "block" || 
                     window.getComputedStyle(popup).display === "block";
    
    if (isVisible) {
      // Hide popup
      popup.style.display = "none";
    } else {
      // Show popup
      popup.style.display = "block";
      popup.style.position = "fixed";
      popup.style.bottom = "160px";
      popup.style.right = "20px";
      popup.style.zIndex = "10001";
      popup.style.animation = "fadeInUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)";
    }
  }
}

// Make it available on window object
window.toggleWhatsAppPopup = toggleWhatsAppPopup;

document.addEventListener("DOMContentLoaded", function() {
  // Fix footer logo
  (function fixFooterLogo() {
    const footerLogo = document.querySelector(".footer-brand .logo");
    const footerLogoImg = document.querySelector(".footer-brand .logo img");

    if (footerLogo) {
      footerLogo.style.display = "block";
      footerLogo.style.pointerEvents = "none";
      footerLogo.style.animation = "none !important";
      footerLogo.style.transition = "none !important";
      footerLogo.style.transform = "none !important";
      footerLogo.style.position = "static !important";
    }

    if (footerLogoImg) {
      footerLogoImg.style.transform = "none !important";
      footerLogoImg.style.transition = "none !important";
      footerLogoImg.style.animation = "none !important";
      footerLogoImg.style.filter = "none !important";
      footerLogoImg.style.opacity = "1 !important";
    }
  })();

  // Navbar scroll effect
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (navbar && window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else if (navbar) {
      navbar.classList.remove("scrolled");
    }
  });

  // Reveal animations on scroll
  (function initializeRevealAnimations() {
    const revealElements = document.querySelectorAll(
      ".section-title, .section-subtitle, .feature-item, .course-card, .stats-card, .blog-card"
    );

    if (revealElements.length === 0) return;

    // Set initial styles for animation
    revealElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    function revealOnScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }

    // Run on load and scroll
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
  })();

  // Initialize core functionality
  initializeSmoothScroll();
  initializeBackToTop();
  initializeTrainerSlider();
  initializeMobileMenu();
});

// Initialize WhatsApp popup initial state
document.addEventListener("DOMContentLoaded", function() {
  const whatsappPopup = document.querySelector(".whatsapp-popup");
  if (whatsappPopup) {
    // Ensure popup starts hidden
    whatsappPopup.style.display = "none";
  }

  // Close popup when clicking outside
  document.addEventListener("click", function(e) {
    const whatsappButton = document.querySelector(".whatsapp-button");
    const popup = document.getElementById("whatsapp-popup");
    
    if (popup && whatsappButton && 
        !whatsappButton.contains(e.target) && 
        !popup.contains(e.target) && 
        popup.style.display === "block") {
      popup.style.display = "none";
    }
  });

  // Close popup with Escape key
  document.addEventListener("keydown", function(e) {
    const popup = document.getElementById("whatsapp-popup");
    if (e.key === "Escape" && popup && popup.style.display === "block") {
      popup.style.display = "none";
    }
  });
});

// Smooth scroll for anchor links
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href");
      // Only proceed if href is not just "#"
      if (href && href !== "#") {
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// Back to top button functionality
function initializeBackToTop() {
  const backToTopBtn = document.querySelector(".back-top-btn");

  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("show");
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.visibility = "visible";
      } else {
        backToTopBtn.classList.remove("show");
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.visibility = "hidden";
      }
    });

    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

  // Enhanced mobile menu functionality
  function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenuItems = document.getElementById("mobile-menu-items");
    const mobileMenuClose = document.querySelector(".mobile-menu-close");
    
    if (!mobileMenuToggle || !mobileMenuItems) return;

    function openMobileMenu() {
      mobileMenuItems.classList.add("active");
      mobileMenuToggle.classList.add("active");
      mobileMenuToggle.setAttribute("aria-expanded", "true");
      mobileMenuToggle.setAttribute("aria-label", "Close mobile menu");
      document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
      mobileMenuItems.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute("aria-label", "Open mobile menu");
      document.body.style.overflow = "auto";
    }

    // Click event for toggle button
    mobileMenuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      isExpanded ? closeMobileMenu() : openMobileMenu();
    });

    // Close button functionality
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
      });
    }

    // Touch event for mobile devices
    mobileMenuToggle.addEventListener("touchstart", function(e) {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      isExpanded ? closeMobileMenu() : openMobileMenu();
    }, { passive: true });

    // Close menu when pressing escape key
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    });

  // Close menu when clicking on menu links (except dropdown toggles)
    const menuLinks = mobileMenuItems.querySelectorAll("a[href]");
    menuLinks.forEach((link) => {
      if (!link.classList.contains("mobile-dropdown-toggle") && !link.classList.contains("mobile-nested-toggle")) {
        link.addEventListener("click", closeMobileMenu);
      }
    });

    // Mobile dropdown functionality
    const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");
    mobileDropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".mobile-dropdown-toggle");
      if (toggle) {
        toggle.addEventListener("click", function(e) {
          e.preventDefault();
          e.stopPropagation();

          // Close other dropdowns
          mobileDropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove("active");
            }
          });

          // Toggle current dropdown
          dropdown.classList.toggle("active");
        });
      }
    });

  // Mobile nested dropdowns
  const mobileNestedDropdowns = document.querySelectorAll('.mobile-nested-dropdown');
  mobileNestedDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.mobile-nested-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
  }
  });

    // Close mobile menu when clicking on the background (not on menu content)
    mobileMenuItems.addEventListener('click', (e) => {
      if (e.target === mobileMenuItems) {
        closeMobileMenu();
      }
    });
}

// Trainer slider functionality
function initializeTrainerSlider() {
  const slider = document.getElementById("trainerSlider");
  if (!slider) return;

    const cards = slider.querySelectorAll(".trainer-card");
  if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20; // Including gap
    let currentPosition = 0;
    let isAutoScrolling = true;
    let autoScrollInterval;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    function setSliderPosition() {
      slider.style.transform = `translateX(${currentPosition}px)`;
    }

    function moveSlider(direction) {
    const containerWidth = slider.parentElement.offsetWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxScroll = -(cardWidth * (cards.length - visibleCards));

    if (direction === 1) { // Next
        currentPosition = Math.max(currentPosition - cardWidth, maxScroll);
    } else { // Previous
        currentPosition = Math.min(currentPosition + cardWidth, 0);
      }

      setSliderPosition();
    }

    function startAutoScroll() {
      if (isAutoScrolling) {
        autoScrollInterval = setInterval(() => {
        const containerWidth = slider.parentElement.offsetWidth;
        const visibleCards = Math.floor(containerWidth / cardWidth);
        const maxScroll = -(cardWidth * (cards.length - visibleCards));

          if (currentPosition <= maxScroll) {
            currentPosition = 0;
          } else {
            currentPosition -= cardWidth;
          }

          setSliderPosition();
        }, 3000);
      }
    }

  // Touch events for mobile - optimized for performance
    slider.addEventListener("touchstart", (e) => {
      isDragging = true;
      startPos = e.touches[0].clientX;
      prevTranslate = currentPosition;

      clearInterval(autoScrollInterval);
      slider.style.cursor = "grabbing";
    }, { passive: true });

    slider.addEventListener("touchmove", (e) => {
      if (!isDragging) return;

      const currentPos = e.touches[0].clientX;
      currentTranslate = prevTranslate + (currentPos - startPos);

      // Add boundaries
    const containerWidth = slider.parentElement.offsetWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxScroll = -(cardWidth * (cards.length - visibleCards));
      currentTranslate = Math.max(Math.min(currentTranslate, 0), maxScroll);

      currentPosition = currentTranslate;
      setSliderPosition();
    }, { passive: true });

    slider.addEventListener("touchend", () => {
      isDragging = false;
      slider.style.cursor = "grab";

      // Snap to nearest card
      const remainder = currentPosition % cardWidth;
      if (Math.abs(remainder) > cardWidth / 2) {
        currentPosition -= cardWidth + remainder;
      } else {
        currentPosition -= remainder;
      }

      setSliderPosition();
      startAutoScroll();
    });

  // Mouse events for desktop
    slider.addEventListener("mouseenter", () => {
      clearInterval(autoScrollInterval);
    });

    slider.addEventListener("mouseleave", () => {
      if (!isDragging) {
        startAutoScroll();
      }
    });

    // Initialize auto scroll
    startAutoScroll();

  // Make moveSlider function available globally for onclick handlers
    window.moveSlider = moveSlider;

  // Handle window resize - optimized setTimeout performance
  window.addEventListener('resize', () => {
    // Use requestAnimationFrame for better performance instead of setTimeout
    requestAnimationFrame(() => {
      const newCardWidth = cards[0].offsetWidth + 20;
      if (newCardWidth !== cardWidth) {
        currentPosition = 0;
        setSliderPosition();
      }
    });
  });
} 