import { useEffect, useState } from "react";
import { cardProps } from "services/context/types";
import { useStyles } from "./style";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type CardProps = {
  card: { _id: number };
};

function FavoriteCards({ card }: CardProps) {
  const [isFav, setIsFav] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const getLocalCard = localStorage.getItem("@Mettzer:Favorites");
    if (!getLocalCard) {
      return localStorage.setItem("@Mettzer:Favorites", JSON.stringify([]));
    } else {
      const parseCards = JSON.parse(getLocalCard);
      const filterCard = parseCards.find(
        (card: cardProps) => card._id === card._id
      );
      filterCard ? setIsFav(true) : setIsFav(false);
    }
  }, []);

  const handleFavorite = () => {
    const getLocalCard = localStorage.getItem("@Mettzer:Favorites");
    if (getLocalCard) {
      const parseCards = JSON.parse(getLocalCard);
      const filterCard = parseCards.find(
        (card: cardProps) => card._id === card._id
      );
      if (filterCard) {
        // se achar a pessoa quer deletar
      } else {
      }
      filterCard ? setIsFav(true) : setIsFav(false);
    }
  };

  return (
    <button className={classes.favBtn} onClick={handleFavorite}>
      {isFav ? <StarIcon /> : <StarBorderIcon />}
    </button>
  );
}
export default FavoriteCards;
