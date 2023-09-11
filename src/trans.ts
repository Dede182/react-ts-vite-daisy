import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';

type TranslationsData = Record<string, string>;

const fetchTranslations = async () => {
  try {
    const response = await axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSiiZjxgjnIRWc0T7ZC-4AO5DWjka3_JKZ9l2Ju3yZHya9z7TOOW9xIgidr8Ew9ZiAaH0ZpWGEsf43D/pub?output=csv'
    );

    const csvData = response.data;
    const rows = csvData.split('\r\n');
    const [header, ...translations] = rows.map((row: string) => row.split(','));
    console.log("🚀 ~ file: lang.js:13 ~ fetchTranslations ~ translations:", translations)
    
    const languages = header.slice(1);

    languages.forEach((language: string) => {
      const translationsData : TranslationsData = {};
      translations.forEach((cols: any[]) => {
        const key = cols[0];
        const translation = cols[languages.indexOf(language) + 1];
        translationsData[key] = translation;
      });

      const filePath = path.join('src','locales', language, 'translation.json');

      // Ensure that the directories are created if they don't exist
      fs.ensureDirSync(path.dirname(filePath));
      fs.writeFileSync(filePath, JSON.stringify(translationsData, null, 2));
    });

    console.log('Translations fetched and stored.');
  } catch (error) {
    console.error('Error fetching and storing translations:', error);
  }
};

fetchTranslations();
