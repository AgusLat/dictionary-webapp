// Try/Catch used in custom hooks
export type ErrorType = string | null;

// API JSON Response type
// Tipo para los objetos dentro de "phonetics"
type Phonetic = {
  text: string;
  audio: string;
  sourceUrl?: string; // Opcional
};

// Tipo para los objetos dentro de "definitions"
type Definition = {
  definition: string;
  example?: string; // Opcional
  synonyms: string[];
  antonyms: string[];
};

// Tipo para los objetos dentro de "meanings"
type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

// Tipo para el objeto "license"
type License = {
  name: string;
  url: string;
};

// Tipo principal para cada elemento del array (una entrada de la palabra)
export type WordEntry = {
  word: string;
  phonetic?: string; // Opcional
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};

// Tipo para la respuesta completa de la API
export type WordApiResponse = WordEntry[] | null;
