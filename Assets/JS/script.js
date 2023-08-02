function toggleMenu() {
  const menuBtn = document.querySelector(".menu-button-lines");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".menu-link");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("visible");
    menuBtn.classList.toggle("checked");
  });
  links.forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("visible");
      menuBtn.classList.remove("checked");
    })
  );
}
toggleMenu();
