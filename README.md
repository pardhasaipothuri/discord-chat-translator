# 🌍 Discord Real-Time Chat Translator

A lightweight, open-source Google Chrome extension designed to automatically translate incoming Discord chat messages and usernames into your preferred language in real time. 

Built specifically to handle Discord's dynamic single-page layout without breaking the chat flow.

---

## ✨ Features
* **1-Click Setup:** Simply click the extension icon in your browser, pick your target language from the dropdown menu, and you're good to go.
* **Real-Time Translation:** Automatically scans and translates incoming messages and usernames as they appear on your screen.
* **100% Free & Open Source:** Runs entirely on your browser with no API keys, accounts, or subscriptions required.

---

## 🚀 How to Install (For Users)

Since this extension is open-source and hosted on GitHub, you can install it locally in under a minute:

1. **Download the Code:**
   * Scroll up to the top of this repository page, click the green **`<> Code`** button, and select **Download ZIP**.
   * Extract (unzip) the downloaded file to a folder on your computer.

2. **Open Chrome Extensions:**
   * Open Google Chrome, type `chrome://extensions/` into your address bar, and press Enter.

3. **Load the Extension:**
   * In the top-right corner of the Extensions page, toggle on **Developer mode**.
   * In the top-left corner, click the **Load unpacked** button.
   * Select the folder where you extracted your downloaded project files.

4. **Start Chatting:**
   * Open [Discord Web](https://discord.com/app), click the extension icon in your Chrome toolbar to choose your target language, and enjoy chatting across languages seamlessly!

---

## 🛠️ Project Files
* `manifest.json` — Extension configuration and permissions setup.
* `popup.html` — The settings dropdown UI for language selection.
* `popup.js` — Saves your preferred language choice automatically.
* `content.js` — The background observer script that scans Discord chat elements and updates them.

---

## 🤝 Contributing
Feel free to fork this repository, open issues, or submit pull requests if you have ideas for new features or improvements!
