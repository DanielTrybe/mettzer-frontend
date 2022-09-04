import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CardShow } from "components/Items";
import { cardProps } from "services/context/types";
import { useStyles } from "./style";

function FavoritesTemplate() {
  const classes = useStyles();
  const [cardsList, setCardsList] = useState<Array<cardProps>>(() => {
    const getLocalCards = localStorage.getItem("@Mettzer:Favorites");
    return getLocalCards ? JSON.parse(getLocalCards) : [];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const getLocalCards = localStorage.getItem("@Mettzer:Favorites");
      if (getLocalCards) {
        const parse = JSON.parse(getLocalCards);
        setCardsList(parse);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Favoritos
      </Typography>
      <Grid className={classes.cards}>
        {cardsList.length > 0 ? (
          cardsList.map((card, index) => (
            <Grid key={index}>
              <CardShow card={card} index={index} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" className={classes.notFoundText}>
            Não encontrei nenhum favorito.
          </Typography>
        )}
      </Grid>
    </>
  );
}

export default FavoritesTemplate;
