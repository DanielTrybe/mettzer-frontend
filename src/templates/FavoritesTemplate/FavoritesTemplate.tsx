import { useEffect, useState, useCallback } from "react";
import { Grid, Typography } from "@mui/material";
import { CardShow } from "components/Items";
import { cardProps } from "services/context/types";
import { useStyles } from "./style";
import PaginationCustom from "components/Pagination/PaginationCustom";

function FavoritesTemplate() {
  const classes = useStyles();
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
          (cards: any, index: number) => index < page * pageSize
        );
        setCardsList(filter);
      } else {
        const filter2 = parse.filter(
          (cards: any, index: number) => index >= page * pageSize - pageSize
        );
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

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Favoritos
      </Typography>
      <Grid className={classes.cards}>
        {cardsList.length > 0 ? (
          cardsList.map((card, index) => (
            <Grid key={index}>
              <CardShow
                card={card}
                index={index}
                delFav={delFav}
                setDelFav={setDelFav}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" className={classes.notFoundText}>
            Não encontrei nenhum favorito.
          </Typography>
        )}
      </Grid>
      <PaginationCustom
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        numberOfPages={numberOfPages}
      />
    </>
  );
}

export default FavoritesTemplate;
