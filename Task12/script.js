function translateText() {
    // Get the dropdown element and the translated text element
    const languageSelect = document.getElementById('language-select');
    const translatedTextDiv = document.getElementById('translated-text');

    // Translation map for each language
    const translations = {
        english: "Hi welcome to google translation",
        hindi: "नमस्ते, गूगल अनुवाद में आपका स्वागत है",
        french: "Salut, bienvenue sur google traduction",
        telugu: "హాయ్, గూగుల్ అనువాదానికి స్వాగతం",
        dutch: "Hallo, welkom bij Google-vertaling"
    };

    // Get the selected language from the dropdown
    const selectedLanguage = languageSelect.value;

    // Update the text content with the translation
    translatedTextDiv.textContent = translations[selectedLanguage];
}