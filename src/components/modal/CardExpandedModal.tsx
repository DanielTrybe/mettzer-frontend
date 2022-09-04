import { useEffect } from "react";

import {
  Typography,
  Box,
  Backdrop,
  Fade,
  Modal,
  Grid,
  Tooltip,
} from "@mui/material";
import { useStyles } from "./style";
import { isValid, format } from "date-fns";

type PopupDetails = {
  modalInfo: {
    title: string;
    authors: string;
    types: string;
    description: string;
  };
  setOpen: (value: boolean) => void;
  open: boolean;
};

function CardExpandedModal({ modalInfo, setOpen, open }: PopupDetails) {
  const classes = useStyles();

  const handleClose = () => setOpen(false);

  const validDate = (date: string) => {
    const valid = isValid(new Date(date));
    return valid
      ? format(new Date(date), "dd/MM/yyyy hh:mm:ss")
      : "Data inválida";
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      keepMounted={false}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.boxStyle}>
          <Typography variant="h5" className={classes.title}>
            {modalInfo.title}
          </Typography>
          <Box className={classes.boxBorder}>
            <Typography variant="subtitle1" className={classes.authors}>
              Autores: {modalInfo.authors}
            </Typography>
            <Typography variant="subtitle1" className={classes.types}>
              Tipos: {modalInfo.types}
            </Typography>
          </Box>
          <Typography variant="body1" className={classes.description}>
            {modalInfo.description}
          </Typography>

          <Grid sx={{ mt: 1, mr: 2 }} className={classes.gridBtn}>
            <Tooltip title="Fechar" placement="left-start">
              <button
                onClick={handleClose}
                type="button"
                className={classes.closeBtn}
              >
                X
              </button>
            </Tooltip>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CardExpandedModal;
