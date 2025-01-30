import { createContext, useContext, useState } from "react";

//CONTEXT
interface ThemeContextType {
  isChecked: boolean | undefined;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({
  isChecked: undefined,
  setIsChecked: () => {},
});

//CUSTOM HOOK
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context.isChecked === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

//PROVIDER
interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </ThemeContext.Provider>
  );
};
