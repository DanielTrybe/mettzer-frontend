import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsContextProps, PageAndSize, SearchList } from "./types";

export const SeachArticleContext = createContext({} as CardsContextProps);

const SeachArticlesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState([] as SearchList);
  const [search, setSearch] = useState("mettzer");
  const [loading, setLoading] = useState(false);
  const [pageAndSize, setPageAndSize] = useState({
    page: 1,
    pageSize: 10,
  } as PageAndSize);
  const [selectTypeSearch, setSelectTypeSearch] = useState("title" as string);

  const getArticles = async () => {
    setLoading(true);
    // busca por titulo como padrão
    try {
      const response = await api.post(
        `search${process.env.REACT_APP_API_KEY}`,
        [
          {
            query: `${selectTypeSearch}:${search}`,
            page: `${pageAndSize.page}`,
            pageSize: `${pageAndSize.pageSize}`,
          },
        ]
      );
      setCardsList(response.data);
    } catch {
      setCardsList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, [search]);

  const values = {
    cardsList,
    search,
    setSearch,
    setSelectTypeSearch,
    setPageAndSize,
    selectTypeSearch,
    getArticles,
    loading,
  };

  return (
    <SeachArticleContext.Provider value={values}>
      {children}
    </SeachArticleContext.Provider>
  );
};

export default SeachArticlesProvider;
