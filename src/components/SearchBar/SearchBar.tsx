import { useState } from "react";
import { useFetchWord } from "../../hooks/useFetchWord.jsx";
import { useDefinitionContext } from "../../context/definitionContext.tsx";
import SearchIcon from "@mui/icons-material/Search";
import "./searchBar.css";

export const SearchBar = () => {
  //USE STATE
  const [wordInput, setWordInput] = useState("");
  const [isNotValidWord, setIsNotValidWord] = useState(false);

  //CONTEXT
  const { setDefinitionValue } = useDefinitionContext();

  //CUSTOM HOOKS
  const [isLoading, error, fetchWord] = useFetchWord();

  const handleClick = async (word: string) => {
    let regexp = "^[a-zA-Z]+$";

    if (word.match(regexp) === null) {
      // CAMBIAR EL CLASSNAME PARA MOSTRAR ERROR EN EL INPUT
      setIsNotValidWord(true);
      return;
    }

    if (word.match(regexp)) {
      const definitionData = await fetchWord(word);
      setIsNotValidWord(false);
      setWordInput("");

      //SET CONTEXT

      setDefinitionValue(definitionData);
      return;
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick(wordInput);
    }
  };

  return (
    <div className="searchBar">
      <div
        className={
          isNotValidWord
            ? "searchBar__container--notValid"
            : "searchBar__container"
        }
      >
        <input
          className="searchBar__input"
          type="text"
          onChange={(e) => setWordInput(e.target.value)}
          onKeyDown={(e) => handleOnKeyDown(e)}
          placeholder="Type your word here.."
          value={wordInput}
        />

        <button
          className="searchBar__button"
          onClick={() => handleClick(wordInput)}
        >
          <SearchIcon color="primary" />
        </button>
      </div>
      {isNotValidWord && (
        <span className="searchBar__invalidInputSpan">* Insert valid word</span>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
