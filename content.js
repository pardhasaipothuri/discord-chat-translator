chrome.storage.sync.get(['targetLang'], (data) => {
  const targetLang = data.targetLang || 'en';

  async function translateText(text) {
    try {
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=autodetect|${targetLang}`);
      const json = await res.json();
      return json.responseData.translatedText || text;
    } catch {
      return text; // Fallback gracefully if offline
    }
  }

  async function processChatNodes() {
    // Targets Discord message texts and username tags that haven't been translated yet
    const selectors = '[id^="message-content-"]:not(.translated), [class*="username-"]:not(.translated)';
    const elements = document.querySelectorAll(selectors);

    for (let el of elements) {
      el.classList.add('translated');
      const originalText = el.innerText;
      
      if (originalText && originalText.trim().length > 0) {
        const translated = await translateText(originalText);
        el.innerText = translated;
      }
    }
  }

  // Watch Discord's real-time DOM stream for new incoming messages
  const observer = new MutationObserver(() => {
    processChatNodes();
  });

  observer.observe(document.body, { childList: true, subtree: true });
});