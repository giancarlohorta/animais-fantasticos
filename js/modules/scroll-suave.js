export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-anime="suave"] a[href^="#"]'
  );
  function scrowToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrowToSection);
  });
}
