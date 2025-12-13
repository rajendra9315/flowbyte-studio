// Main JS file
// Accordion functionality
document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    document.querySelectorAll(".accordion-content").forEach(item => {
      if (item !== content) item.style.display = "none";
    });

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Hero text slider
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
    heroHeading.innerHTML = heroTexts[heroIndex].replace(" Made Simple", "<br><span>Made Simple</span>");
  }, 3000);
}

// Testimonial slider
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

// Telegram popup
setTimeout(() => {
  const popup = document.getElementById("tgPopup");
  if (popup) popup.style.display = "block";
}, 6000);


