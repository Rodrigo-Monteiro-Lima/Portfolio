const tabs = document.querySelectorAll('.aba');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('selecionado')) return;
    switchTab(tab);
    showTabInfo(tab);
  });
});

const switchTab = (tab) => {
  const selectedTab = document.querySelector('.aba.selecionado');
  selectedTab.classList.remove('selecionado');
  tab.classList.add('selecionado');
};

const showTabInfo = (tab) => {
  const tabId = `informacao-${tab.id}`;
  const newTab = document.getElementById(tabId);
  const selectedInfo = document.querySelector('.informacao.selecionado');
  selectedInfo.classList.remove('selecionado');
  newTab.classList.add('selecionado');
};
