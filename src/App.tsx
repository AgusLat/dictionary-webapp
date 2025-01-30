import "./app.css";
import { Definition } from "./components/Definition/Definition";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { DefinitionContextProvider } from "./context/definitionContext";
import { useThemeContext } from "./context/themeContext";
import { Layout } from "./layout/Layout";

export const App = () => {
  const { isChecked } = useThemeContext();

  return (
    <div className={isChecked ? "app --darkTheme" : "app"}>
      <Layout>
        <Header />
        <DefinitionContextProvider>
          <SearchBar />
          <Definition />
        </DefinitionContextProvider>
      </Layout>
    </div>
  );
};
