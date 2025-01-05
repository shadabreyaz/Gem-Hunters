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

  setTimeout(checkScroll, 300); 
});

// Initial check for button states
checkScroll();

   

// function for validation of form
const form = document.getElementById('submitForm');

const conditions = {
  name: [{ required: true, message: 'Enter your name' }],
  email: [
    { required: true, message: 'Enter an email' },
    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
  ],
  phone: [
    { required: true, message: 'Enter your number' },
    { pattern: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number' }
  ],
  balance: [{ required: true, message: 'Select your crypto portfolio balance' }],
  message: [{ required: true, message: 'Message is required' }]
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true; // Tracks if the form is valid overall

  Object.entries(conditions).forEach(([key, rules]) => {
    const input = document.getElementById(key);
    const inputValue = input.value.trim();
    let fieldIsValid = true;

    for (const rule of rules) {
      if (rule.required && !inputValue) {
        showError(input, rule.message);
        fieldIsValid = false;
        break;
      }

      if (rule.pattern && !rule.pattern.test(inputValue)) {
        showError(input, rule.message);
        fieldIsValid = false;
        break;
      }
    }

    if (fieldIsValid) {
      clearError(input);
    } else {
      isValid = false;
    }
  });

  if (isValid) {
    console.log('Form submitted successfully!');
    form.reset();
  }
});

const showError = (input, message) => {
  let error = input.nextElementSibling;
  if (!error) {
    error = document.createElement('small');
    error.className = 'text-red-500 mt-1 block error-message';
    input.parentElement.appendChild(error);
  }
  error.textContent = message;
  input.classList.add('border-red-500');
};

const clearError = (input) => {
  const error = input.nextElementSibling;
  if (error) {
    error.remove();
  }
  input.classList.remove('border-red-500');
};

// Clear error when the user focus on the input
document.querySelectorAll('input, select, textarea').forEach((input) => {
  input.addEventListener('focus', () => clearError(input));
});



// for hamburger
const hamburger = document.getElementById('hamburger');
const buttonContainer = document.getElementById('button-container');
let isOpen = false;

hamburger.addEventListener('click', () => {
  buttonContainer.classList.toggle('hidden');

  isOpen = !isOpen;
  hamburger.innerHTML = isOpen ? '&#x2715;' : '&#9776;';
});

