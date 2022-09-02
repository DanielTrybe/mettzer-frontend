import { useContext } from "react";
import { SeachArticleContext } from "services/context/ArticlesList";

export const useArticlesContext = () => {
  const context = useContext(SeachArticleContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }
  return context;
};

export default useArticlesContext;
