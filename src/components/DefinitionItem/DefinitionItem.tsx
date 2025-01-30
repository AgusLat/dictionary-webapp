import { WordEntry } from "../../types";
import "./definitionItem.css";

interface DefinitionItemProps {
  item: WordEntry;
}

export const DefinitionItem = ({ item }: DefinitionItemProps) => {
  return (
    <>
      {item.meanings.map((item, index) => {
        return (
          <div className="definitionItem" key={index}>
            <div className="definitionItem__head">
              <h2>{item.partOfSpeech}</h2>
              <hr></hr>
            </div>
            <ul className="definitionItem__body">
              <h3>Meaning</h3>
              {item.definitions.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.definition}</p>
                    {item.example && <p>Example: {item.example}</p>}
                    {item.synonyms.length > 0 && (
                      <p className="definitionItem__synonym">
                        Synonym: <b>{item.synonyms.join(", ")}</b>
                      </p>
                    )}
                  </li>
                );
              })}
              {item.synonyms.length > 0 && (
                <p className="definitionItem__synonym">
                  List of synonyms: <b>{item.synonyms.join(", ")}</b>
                </p>
              )}
            </ul>
          </div>
        );
      })}

      <p className="definitionItem__source">
        Source <a href={item.sourceUrls[0]}>{item.sourceUrls[0]}</a>
      </p>
    </>
  );
};
