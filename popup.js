const select = document.getElementById('lang');

// Load saved language preference on open
chrome.storage.sync.get(['targetLang'], (data) => {
  if (data.targetLang) {
    select.value = data.targetLang;
  }
});

// Save user's selection instantly on change
select.addEventListener('change', () => {
  chrome.storage.sync.set({ targetLang: select.value });
});