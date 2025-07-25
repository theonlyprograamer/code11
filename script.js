document.addEventListener("DOMContentLoaded", () => {
  const text = "The Coding Redefined";
  const target = document.getElementById("typewriter");
  let i = 0;

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
});
