document.addEventListener("DOMContentLoaded", () => {
  // Year update
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Testimonials carousel
  const reviews = document.querySelectorAll(".review");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;

  function showReview(index) {
    reviews.forEach(r => r.classList.remove("active"));
    reviews[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + reviews.length) % reviews.length;
    showReview(current);
  });
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % reviews.length;
    showReview(current);
  });

  setInterval(() => {
    current = (current + 1) % reviews.length;
    showReview(current);
  }, 7000);

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      showMessage("Please complete all fields.", "error");
      return;
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      showMessage("Invalid email address.", "error");
      return;
    }

    showMessage("Submitting inquiry...", "info");
    setTimeout(() => {
      contactForm.reset();
      showMessage("Thank you! We'll get back to you shortly.", "success");
    }, 1200);
  });

  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.style.color = type === "error" ? "#ffb3c6" : type === "success" ? "#bff7d6" : "#fff";
  }
});
