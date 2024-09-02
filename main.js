document.addEventListener("DOMContentLoaded", () => {
  const error = document.getElementById("error");
  const small = document.getElementById("small");
  const email = document.querySelector("[name='E-mail']");
  const form = document.forms[0];

  form.addEventListener("submit", (e) => {
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      e.preventDefault();
      error.classList.remove("hide");
      small.classList.remove("hide");
    } else {
      error.classList.add("hide");
      small.classList.add("hide");
      alert("Thank you! Your email has been submitted.");
    }
  });

  email.addEventListener("click", () => {
    error.classList.add("hide");
    small.classList.add("hide");
  });

  email.onclick = function () {
    error.classList.add("hide");
    small.classList.add("hide");
  };
});
