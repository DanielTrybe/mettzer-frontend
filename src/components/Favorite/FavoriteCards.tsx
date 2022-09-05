import { useEffect, useState } from "react";
import { cardProps } from "services/context/types";
import { useStyles } from "./style";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type CardProps = {
  card: { _id: string };
  delFav?: boolean;
  setDelFav?: (value: boolean) => void;
};

function FavoriteCards({ card, delFav, setDelFav }: CardProps) {
  const [isFav, setIsFav] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const getLocalCard = localStorage.getItem("@Mettzer:Favorites");
    if (!getLocalCard) {
      return localStorage.setItem("@Mettzer:Favorites", JSON.stringify([]));
    } else {
      const parseCards = JSON.parse(getLocalCard);
      const filterCard = parseCards.find(
        (favCard: cardProps) => favCard._id === card._id
      );
      filterCard ? setIsFav(true) : setIsFav(false);
    }
  }, []);

  const handleFavorite = () => {
    const getLocalCard = localStorage.getItem("@Mettzer:Favorites");
    if (getLocalCard) {
      const parseCards = JSON.parse(getLocalCard);
      const filterCard = parseCards.find(
        (favCard: cardProps) => favCard._id === card._id
      );
      if (filterCard) {
        // se achar a pessoa quer deletar
        const filtered = parseCards.filter(
          (favCard: cardProps) => favCard._id !== card._id
        );
        localStorage.setItem("@Mettzer:Favorites", JSON.stringify(filtered));
        setIsFav(false);
      } else {
        const organize = [...parseCards, card];
        localStorage.setItem("@Mettzer:Favorites", JSON.stringify(organize));
        setIsFav(true);
      }
    }
    if (
      window.location.pathname === "/mettzer-frontEnd/use-favorites" &&
      setDelFav
    ) {
      setDelFav(!delFav);
    }
  };

  return (
    <button className={classes.favBtn} onClick={handleFavorite}>
      {isFav ? <StarIcon /> : <StarBorderIcon />}
    </button>
  );
}
export default FavoriteCards;
