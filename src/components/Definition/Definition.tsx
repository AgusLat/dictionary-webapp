import { useEffect, useState } from "react";
import { WordEntry } from "../../types";
import { useDefinitionContext } from "../../context/definitionContext";
import { DefinitionItem } from "../DefinitionItem/DefinitionItem.tsx";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import "./definition.css";

export const Definition = () => {
  const { definitionValue } = useDefinitionContext();
  const [phoneticAudio, setPhoneticAudio] = useState<string | null>(null);

  //SET AUDIO

  const findFirstAudio = (wordEntries: WordEntry[]): string | null => {
    for (const wordEntry of wordEntries) {
      const phoneticWithAudio = wordEntry.phonetics.find((phonetic) => {
        return typeof phonetic.audio === "string" && phonetic.audio !== "";
      });
      if (phoneticWithAudio) {
        return phoneticWithAudio.audio;
      }
    }
    return null;
  };

  const handleClick = () => {
    const audioElement = document.querySelector("audio");
    if (audioElement) {
      audioElement.play();
    }
  };

  useEffect(() => {
    if (definitionValue !== null) {
      let audio = findFirstAudio(definitionValue);
      setPhoneticAudio(audio);
    }
  }, [definitionValue]);

  return (
    <div className="definition">
      {definitionValue && (
        <div className="definition__head">
          <div className="definition__title">
            <h1>{definitionValue[0].word}</h1>
            <span>{definitionValue[0].phonetic}</span>
          </div>
          {phoneticAudio && (
            <div className="definition__audio">
              <audio key={phoneticAudio}>
                <source src={phoneticAudio} type="audio/mpeg" />
              </audio>
              <PlayCircleFilledTwoToneIcon
                onClick={handleClick}
                color="primary"
                sx={{ fontSize: 80 }}
              />
            </div>
          )}
        </div>
      )}
      {definitionValue &&
        definitionValue.map((item, index) => (
          <DefinitionItem key={index} item={item} />
        ))}
    </div>
  );
};
