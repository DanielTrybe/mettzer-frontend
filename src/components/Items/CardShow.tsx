import { Card } from "services/context/types";
import { Grid } from "@mui/material";

import { CompactCard } from "components/Items";
import { cardProps } from "services/context/types";

type CardProps = {
  index: number;
  card: cardProps;
  delFav?: boolean;
  setDelFav?: (value: boolean) => void;
};

function CardShow({ card, index, delFav, setDelFav }: CardProps) {
  return (
    <Grid>
      <CompactCard
        card={card}
        index={index}
        delFav={delFav}
        setDelFav={setDelFav}
      />
    </Grid>
  );
}

export default CardShow;
