import { useDefinitionContext } from "../../context/definitionContext";
import { DefinitionItem } from "../DefinitionItem/DefinitionItem.tsx";

export const Definition = () => {
  const { definitionValue } = useDefinitionContext();

  return (
    <div>
      {definitionValue && <h1>{definitionValue[0].word}</h1>}
      {definitionValue && (
        <span>
          {definitionValue[0].phonetic}
          {definitionValue[0].phonetics[0].audio && (
            <audio key={definitionValue[0].phonetics[0].audio} controls>
              <source
                src={definitionValue[0].phonetics[0].audio}
                type="audio/mpeg"
              />
            </audio>
          )}
        </span>
      )}
      {definitionValue &&
        definitionValue.map((item, index) => (
          <DefinitionItem key={index} item={item} />
        ))}
    </div>
  );
};
