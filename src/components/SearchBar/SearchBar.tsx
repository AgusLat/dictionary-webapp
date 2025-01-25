import { useState } from "react";
import { useFetchWord } from "../../hooks/useFetchWord.jsx";
import { useDefinitionContext } from "../../context/definitionContext.tsx";

export const SearchBar = () => {
  //USE STATE
  const [wordInput, setWordInput] = useState("");

  //CONTEXT
  const { setDefinitionValue } = useDefinitionContext();

  //CUSTOM HOOKS
  const [isLoading, error, fetchWord] = useFetchWord();

  const handleClick = async (word: string) => {
    let regexp = "^[a-zA-Z]+$";

    if (word.match(regexp) === null) {
      // CAMBIAR EL CLASSNAME PARA MOSTRAR ERROR EN EL INPUT

      console.log("No word written");
      return;
    }

    if (word.match(regexp)) {
      const definitionData = await fetchWord(word);
      setWordInput("");

      //SET CONTEXT
      setDefinitionValue(definitionData);
      return;
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setWordInput(e.target.value)}
        placeholder="Type your word here.."
        value={wordInput}
      />
      <button onClick={() => handleClick(wordInput)}>Search</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
