import { useState } from "react";
import { ErrorType, WordApiResponse } from "../types";

export const useFetchWord = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  const fetchWord = async (word: string): Promise<WordApiResponse> => {
    setIsLoading(true);
    setError(null);

    // en try/catch, el objeto error capturado en catch tiene el tipo 'unknown' por defecto

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        throw new Error(
          "Sorry pal, we couldn't find definitions for the word you were looking for."
        );
      }

      const json = await response.json();
      return json;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        return null;
      } else {
        setError("An unexpected error ocurred");
        return null;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, error, fetchWord] as const;
};
