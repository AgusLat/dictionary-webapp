import { WordEntry } from "../../types";

interface DefinitionItemProps {
  item: WordEntry;
}

export const DefinitionItem = ({ item }: DefinitionItemProps) => {
  return (
    <>
      {item.meanings.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.partOfSpeech}</h2>
            <ul>
              {item.definitions.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.definition}</p>
                    {item.example && <p>Example: {item.example}</p>}
                    {item.synonyms.length > 0 && (
                      <p>Synonyms: {item.synonyms.join(", ")}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <p>
        Source <a href={item.sourceUrls[0]}>{item.sourceUrls[0]}</a>
      </p>
    </>
  );
};
