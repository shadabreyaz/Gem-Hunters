// for accordian
function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (content.style.maxHeight) {
    // Collapse
    content.style.maxHeight = null;
    icon.style.transform = "rotate(90deg)";
  } else {
    // Expand
    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = "rotate(270deg)";
  }
}


// for slider
// const slider = document.getElementById("slider");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");

// let scrollAmount = 0;

// prevButton.addEventListener("click", () => {
//   slider.scrollBy({
//     left: -320, // Adjust scroll distance as needed
//     behavior: "smooth",
//   });
// });

// nextButton.addEventListener("click", () => {
//   slider.scrollBy({
//     left: 320, // Adjust scroll distance as needed
//     behavior: "smooth",
//   });
// });

const slider = document.getElementById("slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to check scroll position and toggle buttons
function checkScroll() {
  if (slider.scrollLeft <= 0) {
    prevButton.disabled = true;
    prevButton.style.cursor = "not-allowed";
  } else {
    prevButton.disabled = false;
    prevButton.style.cursor = "pointer";
  }

  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    nextButton.disabled = true;
    nextButton.style.cursor = "not-allowed";
  } else {
    nextButton.disabled = false;
    nextButton.style.cursor = "pointer";
  }
}

// Add click events to Prev and Next buttons
prevButton.addEventListener("click", () => {
  slider.scrollBy({
    left: -320,
    behavior: "smooth",
  });

  // Check scroll position after scrolling
  setTimeout(checkScroll, 300); // Add delay to allow smooth scrolling
});

nextButton.addEventListener("click", () => {
  slider.scrollBy({
    left: 320,
    behavior: "smooth",
  });

  // Check scroll position after scrolling
  setTimeout(checkScroll, 300); // Add delay to allow smooth scrolling
});

// Initial check for button states
checkScroll();

