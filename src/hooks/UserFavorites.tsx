import { useState, useEffect } from "react";
import { cardProps } from "services/context/types";

function UseFavorites() {
  const [cardsList, setCardsList] = useState<Array<cardProps>>(() => {
    const getLocalCards = localStorage.getItem("@Mettzer:Favorites");
    return getLocalCards ? JSON.parse(getLocalCards) : [];
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [delFav, setDelFav] = useState(false);

  const handleChangePage = () => {
    const getLocalCards = localStorage.getItem("@Mettzer:Favorites");
    if (getLocalCards) {
      const parse = JSON.parse(getLocalCards);
      if (page === 1) {
        const filter = parse.filter(
          (cards: cardProps, index: number) => index < page * pageSize
        );
        setCardsList(filter);
      } else {
        const filter2 = parse.filter(
          (cards: cardProps, index: number) =>
            index >= page * pageSize - pageSize && index < page * pageSize
        );
        console.log(filter2);
        setCardsList(filter2);
      }
    }
  };

  useEffect(() => {
    handleChangePage();
  }, [page]);

  useEffect(() => {
    const getLocalCards = localStorage.getItem("@Mettzer:Favorites");
    if (!getLocalCards) {
      localStorage.setItem("@Mettzer:Favorites", JSON.stringify([]));
    } else {
      setPage(1);
      const parse = JSON.parse(getLocalCards);
      setNumberOfPages(Math.ceil(parse.length / pageSize));
      handleChangePage();
    }
  }, [pageSize, delFav]);

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    numberOfPages,
    setNumberOfPages,
    delFav,
    setDelFav,
    cardsList,
    setCardsList,
  };
}

export default UseFavorites;
