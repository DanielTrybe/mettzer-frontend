import { useEffect } from "react";

import {
  Typography,
  Box,
  Backdrop,
  Fade,
  Modal,
  Grid,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { useStyles } from "./style";
import { isValid, format } from "date-fns";

type PopupDetails = {
  modalInfo: {
    owner: string;
    repository: string;
    sha: string;
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
          <Typography
            className={classes.title}
            variant="h5"
            sx={{ mb: 2, mt: 1 }}
          >
            Card Details
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
