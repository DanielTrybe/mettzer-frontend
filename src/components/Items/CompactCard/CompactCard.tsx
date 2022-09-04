import { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Card,
  Box,
  Tooltip,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { cardProps } from "services/context/types";
import { PopoverCustom } from "components/Items";
import { useStyles } from "./style";
import CardExpandedModal from "components/modal/CardExpandedModal";

type CardProps = {
  card: cardProps;
  index: number;
};

function CompactCard({ card, index }: CardProps) {
  const classes = useStyles();
  const [paperElevation, setPaperElevation] = useState(2);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    authors: "",
    types: "",
    description: "",
  });
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const authorsReduce =
    card._source.authors.length > 0
      ? card?._source?.authors?.reduce((acc, next) => acc + "," + next)
      : "Não encontrei os autores";

  const typesReduce =
    card?._source?.types.length > 0
      ? card?._source?.types?.reduce((acc, next) => acc + "," + next)
      : "Não encontrei os tipos";

  const handleOpenModal = () => {
    setModalInfo({
      title: card?._source.title,
      authors: authorsReduce,
      types: typesReduce,
      description: card?._source?.description ?? "Sem descrição",
    });
    setOpen(true);
  };

  return (
    <>
      <Paper
        elevation={paperElevation}
        onMouseEnter={() => setPaperElevation(20)}
        onMouseLeave={() => setPaperElevation(2)}
      >
        <div data-testid={`card-${index}-card`}>
          <Card className={classes.card}>
            <Grid>
              <CardContent>
                <Typography color="text.primary" className={classes.textFields}>
                  <Tooltip
                    title={<h1>{card?._source.title}</h1>}
                    placement="top"
                  >
                    <span
                      style={{ fontSize: 15 }}
                      data-testid={`card-${index}-name`}
                    >
                      {card?._source.title}
                    </span>
                  </Tooltip>
                </Typography>

                <Typography
                  sx={{ mt: 1 }}
                  color="text.secondary"
                  variant="body2"
                  className={classes.textFields}
                >
                  Autores: {authorsReduce}
                </Typography>

                <Typography
                  sx={{ mb: 1 }}
                  color="text.secondary"
                  variant="body2"
                  className={classes.textFields}
                >
                  Tipos: {typesReduce}
                </Typography>

                <Typography
                  sx={{ maxHeight: 100, overflowY: "scroll" }}
                  color="text.secondary"
                  variant="body1"
                >
                  Descrição: {card?._source?.description ?? "Sem descrição"}
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                padding: 5,
              }}
            >
              <PopoverCustom card={card} />

              <button className={classes.btnLinks} onClick={handleOpenModal}>
                Card Details
              </button>
            </Grid>
          </Card>
        </div>
      </Paper>
      <CardExpandedModal modalInfo={modalInfo} open={open} setOpen={setOpen} />
    </>
  );
}

export default CompactCard;
