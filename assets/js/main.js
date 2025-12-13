// Main JS file - FIXED VERSION
document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     SERVICES ACCORDION
  =============================== */
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(button => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Close other accordions
      document.querySelectorAll(".accordion-content").forEach(item => {
        if (item !== content) {
          item.style.display = "none";
        }
      });

      // Toggle current
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  /* ===============================
     HERO TEXT SLIDER
  =============================== */
  const heroTexts = [
    "Web, Ads & Automation Made Simple",
    "Everything Digital, One Place",
    "Professional Services for Modern Businesses"
  ];

  let heroIndex = 0;
  const heroHeading = document.querySelector(".hero h1");

  if (heroHeading) {
    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroTexts.length;
      heroHeading.innerHTML =
        heroTexts[heroIndex].replace(
          " Made Simple",
          "<br><span>Made Simple</span>"
        );
    }, 3000);
  }

  /* ===============================
     TESTIMONIAL SLIDER
  =============================== */
  const testimonials = [
    "Professional work, fast delivery, and clear communication.",
    "Great experience working with Flowbyte Studio.",
    "Clean design and reliable support."
  ];

  let tIndex = 0;
  const testimonialBox = document.getElementById("testimonial");

  if (testimonialBox) {
    setInterval(() => {
      tIndex = (tIndex + 1) % testimonials.length;
      testimonialBox.innerHTML =
        `“${testimonials[tIndex]}”<span>— Client Review</span>`;
    }, 4000);
  }

  /* ===============================
     TELEGRAM POPUP
  =============================== */
  setTimeout(() => {
    const popup = document.getElementById("tgPopup");
    if (popup) popup.style.display = "block";
  }, 6000);

});
