document.addEventListener("DOMContentLoaded", () => {
  /* Welcome message */
  console.log("VerbaJS is ready to go!");

  /* Detecting browser's language */
  const language =
    navigator.language ||
    navigator.userLanguage ||
    "en"; /* Default language is always english! */

  /* Loggin the user's browser language */
  console.log(`Browser's language: ${language}`);

  /* Save browser's language into local memory! */
  if (localStorage.getItem("verbaLanguage") === null) {
    console.log("Empty memory!");
    localStorage.setItem("verbaLanguage", language);
  }

  /* Verba manual selector AJUSTAR NOUTRO DIA!!! */
  const verbaSelector = document.getElementById("verbaSelector");
  if (verbaSelector) {
    verbaSelector.addEventListener("change", () => {
      localStorage.setItem("verbaLanguage", verbaSelector.value);
      loadLanguageFile(localStorage.getItem("verbaLanguage")); // Update language instantly!
    });
  } else {
    console.log("Verba selector not found!");
  }

  const verbaLanguage = localStorage.getItem("verbaLanguage");
  console.log(`Verba language: ${verbaLanguage}`);

  /* Getting the language file! */
  loadLanguageFile(verbaLanguage);
});

/* Funcion responsible for loading the language file */
function loadLanguageFile(language) {
  const languageFile = `./locales/${language}.json`;

  /* Getting the language file */
  fetch(languageFile)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error(
          `Language file for ${language} not found. Falling back to default (en.json).`
        );
        return fetch("./locales/en.json").then((response) => response.json());
      }
    })
    .then((data) => {
      console.log(`Language file: ${data.language} loaded`);
      /* Get translatable elements */
      const elements = getTranslatableElements();

      /* Verify if there is any transatable element in the DOM before proceeding */
      if (elements.length > 0) {
        translatePage(data, elements);
      } else {
        console.error("There is no translatable element in the DOM");
      }
    })
    .catch((error) => {
      console.error("Failed to load language file:", error);
    });
}

/* Function to get all translatable elements from the DOM */
function getTranslatableElements() {
  const translatableElements = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "a",
    "button",
    "input",
    "textarea",
    "select",
  ];

  return document.querySelectorAll(translatableElements.join(", "));
}

/* Function to apply the translations */
function translatePage(data) {
  // Iterating over all elements that have a corresponding key in the JSON file
  Object.keys(data).forEach((key) => {
    // separates the tag from the class name
    const [tag, className] = key.split(".");

    // Selects the element with the specified tag and class
    const elements = document.querySelectorAll(`${tag}.${className}`);

    elements.forEach((element) => {
      // Replaces the content with the translation
      element.textContent = data[key];
    });
  });
}
