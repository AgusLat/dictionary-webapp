import "./app.css";
import { Definition } from "./components/Definition/Definition";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { DefinitionContextProvider } from "./context/definitionContext";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <DefinitionContextProvider>
        <SearchBar />
        <Definition />
      </DefinitionContextProvider>
      <Footer />
    </div>
  );
};
