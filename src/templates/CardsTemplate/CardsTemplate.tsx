import { Grid, Typography } from "@mui/material";
import { useArticlesContext } from "hooks";
import { CardShow } from "components/Items";
import SkeletonCustom from "components/skeleton/SkeletonCustom";
import { useStyles } from "./style";

function CardsTemplate() {
  const classes = useStyles();
  const { cardsList, loading } = useArticlesContext();

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Resultados
      </Typography>
      <Grid className={classes.cards}>
        {loading ? (
          <SkeletonCustom
            length={12}
            childClass={classes.childClass}
            fatherClass={classes.cards}
          />
        ) : cardsList[0]?.data?.length > 0 ? (
          cardsList[0]?.data?.map((card, index) => (
            <Grid key={index}>
              <CardShow card={card} index={index} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" className={classes.notFoundText}>
            Não encontrei nenhum usuário do GitHub com o termo pesquisado, tente
            novamente.
          </Typography>
        )}
      </Grid>
    </>
  );
}

export default CardsTemplate;
