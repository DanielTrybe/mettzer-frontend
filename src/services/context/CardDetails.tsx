import React, { createContext, useEffect, useState } from "react";
import api from "services/api/api";
// import { CardsContextProps } from "./interface";

import { CardsDetailsContextProps, BranchList, CommitProps } from "./types";

export const CardsDetailsContext = createContext(
  {} as CardsDetailsContextProps
);

const CardDetailsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardDetail, setCardDetail] = useState([] as BranchList);
  const [loading, setLoading] = useState(false);

  const [commits, setCommits] = useState([] as CommitProps);
  const [loadingCommits, setLoadingCommits] = useState(false);

  const getOneRepo = async (owner: string, repo: string) => {
    setLoading(true);
    // busca um card
    try {
      const response = await api.get(`repos/${owner}/${repo}/branches`);

      setCardDetail(response.data);
    } catch {
      setCardDetail([]);
    } finally {
      setLoading(false);
    }
  };

  const getCommits = async (owner: string, repo: string, sha: string) => {
    setLoadingCommits(true);
    try {
      const response = await api.get(
        `repos/${owner}/${repo}/commits?sha=${sha}`
      );

      setCommits(response.data);
    } catch {
      setCommits([]);
    } finally {
      setLoadingCommits(false);
    }
  };

  const values = {
    cardDetail,
    getOneRepo,
    loading,
    getCommits,
    loadingCommits,
    commits,
  };

  return (
    <CardsDetailsContext.Provider value={values}>
      {children}
    </CardsDetailsContext.Provider>
  );
};

export default CardDetailsProvider;
