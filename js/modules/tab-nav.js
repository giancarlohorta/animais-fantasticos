export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const ativoClass = "ativo";

  tabContent[0].classList.add(ativoClass);

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(ativoClass);
    });
    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add(ativoClass, direction);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
