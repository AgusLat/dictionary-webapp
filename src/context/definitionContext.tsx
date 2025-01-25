import { useState, createContext, useContext } from "react";
import { WordApiResponse } from "../types";

//CONTEXT
interface DefinitionContextType {
  definitionValue: WordApiResponse;
  setDefinitionValue: React.Dispatch<React.SetStateAction<WordApiResponse>>;
}

const DefinitionContext = createContext<DefinitionContextType>({
  definitionValue: null,
  setDefinitionValue: () => {},
});

//CUSTOM HOOK
export const useDefinitionContext = (): DefinitionContextType => {
  const context = useContext(DefinitionContext);

  if (!context) {
    throw new Error(
      "useDefinitionContext must be used within a DefinitionContextProvider"
    );
  }

  return context;
};

//PROVIDER
interface ProviderProps {
  children: React.ReactNode;
}
export const DefinitionContextProvider = ({ children }: ProviderProps) => {
  const [definitionValue, setDefinitionValue] = useState<WordApiResponse>(null);

  return (
    <DefinitionContext.Provider value={{ definitionValue, setDefinitionValue }}>
      {children}
    </DefinitionContext.Provider>
  );
};
