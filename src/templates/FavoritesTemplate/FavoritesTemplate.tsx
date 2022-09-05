import { useEffect, useState, useCallback } from "react";
import { Grid, Typography } from "@mui/material";
import { CardShow } from "components/Items";
import { UseFavorites } from "hooks";

import { useStyles } from "./style";
import PaginationCustom from "components/Pagination/PaginationCustom";

function FavoritesTemplate() {
  const classes = useStyles();
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    numberOfPages,
    delFav,
    setDelFav,
    cardsList,
  } = UseFavorites();

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
