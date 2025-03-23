
# VerbaJS 🌍✨

**VerbaJS** is a lightweight and easy-to-use JavaScript library designed to simplify the localization and translation process of websites. It automatically detects the user's browser language and loads the corresponding translation JSON file from a `/locales` folder. If no specific translation is found, it defaults to English (`en.json`). Users can easily switch between languages by adding a simple `<select>` dropdown to their HTML, enabling seamless language updates without refreshing the page.

## Features 🚀
- **Automatic language detection**: VerbaJS automatically detects the user's browser language.
- **Supports multiple languages**: Easily manage translations with separate JSON files for each language.
- **Default language**: If no translation is found for the browser's language, it defaults to English (`en.json`).
- **Easy integration**: Just include the library in your HTML and create a `/locales` folder with the corresponding JSON files.
- **Dynamic language switch**: Add a `<select>` dropdown to switch languages on the fly without page reloads.

## Installation 💻

1. Download or clone the repository:
   ```bash
   git clone https://github.com/your-username/verbaJS.git
   ```

2. Include `verba.js` in your HTML:
   ```html
   <script src="path/to/verba.js"></script>
   ```

3. Create a `locales/` folder in your project directory.

4. Add your language files (`en.json`, `pt-BR.json`, etc.) in the `/locales` folder. Example:
   - `/locales/en.json` for English
   - `/locales/pt-BR.json` for Portuguese (Brazil)
   - `/locales/de.json` for German

5. Add a `<select>` dropdown to allow users to switch languages:
   ```html
   <select id="language-switcher">
      <option value="en">English</option>
      <option value="pt-BR">Português (BR)</option>
      <option value="de">Deutsch</option>
   </select>
   ```

6. Done! VerbaJS will detect the user's browser language and automatically load the corresponding translation.

## Usage ⚙️

Once integrated, VerbaJS will:
- Detect the user's browser language and show a message in the console like:
  ```
  "Browser language detected: pt-BR. Create a /locales/pt-BR.json file to start using VerbaJS. For default language create /locales/en.json."
  ```

- If the user selects a language from the dropdown, VerbaJS will automatically reload the page content in that language.

## Example JSON Structure 🗂️

Here’s an example of how your JSON files should look:

`/locales/en.json`:
```json
{
  "greeting": "Hello, welcome to our website!",
  "about_us": "We are a global company."
}
```

`/locales/pt-BR.json`:
```json
{
  "greeting": "Olá, bem-vindo ao nosso site!",
  "about_us": "Somos uma empresa global."
}
```

## License 📜

VerbaJS is licensed under the **MIT License**. You are free to use, modify, and distribute it, but it’s appreciated if you provide credit by linking back to this GitHub repository. 🙌

## Contributing 🤝

Feel free to open issues and pull requests if you'd like to contribute! Any improvements or fixes are always welcome.

## Links 🔗

- GitHub: [https://github.com/your-username/verbaJS](https://github.com/your-username/verbaJS)
- Documentation: [Read the full documentation](https://github.com/your-username/verbaJS/wiki)
