import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsContextProps, SearchList } from "./types";

export const SeachArticleContext = createContext({} as CardsContextProps);

const SeachArticlesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsList, setCardsList] = useState([] as SearchList);
  const [search, setSearch] = useState("mettzer");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [selectTypeSearch, setSelectTypeSearch] = useState("title" as string);

  const getArticles = async () => {
    setPage(1);
    setLoading(true);
    // busca por titulo como padrão

    try {
      const response = await api.post(
        `search${process.env.REACT_APP_API_KEY}`,
        [
          {
            query: `${selectTypeSearch}:${search}`,
            page: `${page}`,
            pageSize: `${pageSize}`,
          },
        ]
      );
      setNumberOfPages(Math.round(response.data[0].totalHits / pageSize));
      setCardsList(response.data);
    } catch {
      setCardsList([]);
    } finally {
      setLoading(false);
    }
  };

  const getArticlesChangePage = async () => {
    setLoading(true);
    // busca por titulo como padrão
    try {
      const response = await api.post(
        `search${process.env.REACT_APP_API_KEY}`,
        [
          {
            query: `${selectTypeSearch}:${search}`,
            page: `${page}`,
            pageSize: `${pageSize}`,
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
    getArticlesChangePage();
  }, [page]);

  useEffect(() => {
    getArticles();
    return () => {
      setPage(1);
    };
  }, [search, pageSize]);

  const values = {
    cardsList,
    search,
    setSearch,
    setSelectTypeSearch,
    setPage,
    page,
    pageSize,
    setPageSize,
    selectTypeSearch,
    numberOfPages,
    getArticles,
    loading,
    getArticlesChangePage,
  };

  return (
    <SeachArticleContext.Provider value={values}>
      {children}
    </SeachArticleContext.Provider>
  );
};

export default SeachArticlesProvider;
