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

