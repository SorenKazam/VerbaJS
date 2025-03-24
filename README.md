# VerbaJS 🌍✨

**VerbaJS** is a lightweight and easy-to-use JavaScript library designed to simplify website localization. It detects the user's browser language, loads the corresponding translation JSON file from a `/locales` folder, and allows users to switch languages dynamically via a `<select>` dropdown. If no translation is available, it defaults to English (`en.json`).

## Features 🚀

- **Automatic language detection**: Detects the user's browser language.
- **Multiple language support**: Uses JSON files for translations.
- **Default fallback**: Defaults to English if no translation is found.
- **Simple integration**: Just include the script and create a `/locales` folder.
- **Dynamic language switch**: Allows real-time language updates without reloading the page.

## Installation 💻

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/verbaJS.git
   ```

2. Include `verba.js` in your HTML file:

   ```html
   <script src="path/to/verba.js"></script>
   ```

3. Create a `locales/` folder and add JSON translation files, e.g.:

   ```json
   // locales/en.json
   {
      "greeting": "Hello, welcome to our website!",
      "about_us": "We are a global company."
   }
   ```

   ```json
   // locales/pt-BR.json
   {
      "greeting": "Olá, bem-vindo ao nosso site!",
      "about_us": "Somos uma empresa global."
   }
   ```

4. Add a `<select>` element for language switching:

   ```html
   <select id="verbaSelector">
      <option value="en">English</option>
      <option value="pt-BR">Português (BR)</option>
      <option value="de">Deutsch</option>
   </select>
   ```

5. Done! VerbaJS will detect and apply the language settings automatically.

## How It Works ⚙️

### Step 1: Detecting Browser Language

When the page loads, VerbaJS detects the user's browser language using:

```js
const language = navigator.language || navigator.userLanguage || "en";
console.log(`Browser's language: ${language}`);
```

If the detected language is not stored in `localStorage`, it saves it:

```js
if (localStorage.getItem("verbaLanguage") === null) {
    localStorage.setItem("verbaLanguage", language);
}
```

### Step 2: Loading the Language File

VerbaJS loads the corresponding JSON file from the `/locales` folder:

```js
const languageFile = `/locales/${language}.json`;
fetch(languageFile)
    .then(response => response.ok ? response.json() : fetch("/locales/en.json").then(r => r.json()))
    .then(data => translatePage(data));
```

If the file for the detected language is missing, it falls back to English.

### Step 3: Applying Translations

VerbaJS replaces text content in elements with matching keys from the JSON file:

```js
function translatePage(data) {
    Object.keys(data).forEach(key => {
        const [tag, className] = key.split(".");
        document.querySelectorAll(`${tag}.${className}`).forEach(element => {
            element.textContent = data[key];
        });
    });
}
```

Only elements with a matching `tag.className` get updated.

### Step 4: Dynamic Language Switching

When a user selects a new language, VerbaJS updates the setting and reloads the translations:

```js
document.getElementById("verbaSelector").addEventListener("change", function() {
    localStorage.setItem("verbaLanguage", this.value);
    loadLanguageFile(this.value);
});
```

## License 📜

VerbaJS is licensed under the **MIT License**. You are free to use, modify, and distribute it. Giving credit is appreciated! 🙌

## Contributing 🤝

Feel free to open issues or submit pull requests. Contributions are welcome!

## Links 🔗

- GitHub: [https://github.com/your-username/verbaJS](https://github.com/your-username/verbaJS)
- Documentation: [Read the full documentation](https://github.com/your-username/verbaJS/wiki)
