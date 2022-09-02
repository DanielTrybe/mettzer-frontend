import { Card } from "services/context/types";
import { Grid } from "@mui/material";

import { CompactCard } from "components/Items";
import { cardProps } from "services/context/types";

type CardProps = {
  index: number;
  card: cardProps;
};

function CardShow({ card, index }: CardProps) {
  return (
    <Grid>
      <CompactCard card={card} index={index} />
    </Grid>
  );
}

export default CardShow;
