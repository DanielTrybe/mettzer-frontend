import React from "react";
import { Typography, Paper, Popover } from "@mui/material";
import { Card } from "services/context/types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  linkBtn: {
    backgroundColor: "#F9C29D",
    borderRadius: 5,
    border: "none",
    fontSize: "15px",
    width: "99%",
    overflow: "hidden",

    padding: 5,
    margin: 2,
    "&:hover": {
      backgroundColor: "#BEC8CE",
    },
    "&:active": {
      backgroundColor: "#90969A",
    },
    cursor: "pointer",
  },
  btnLinks: {
    backgroundColor: "#F9C29D",
    borderRadius: 5,
    border: "none",
    fontSize: "15px",
    width: "99%",
    padding: 5,
    margin: 2,
    "&:hover": {
      backgroundColor: "#BEC8CE",
    },
    "&:active": {
      backgroundColor: "#90969A",
    },
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": { textDecoration: "none" },
    "&:visited": { textDecoration: "none" },
    "&active": { textDecoration: "none" },
  },
});

function PopoverCustom({ card, children }: Card) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button
        aria-describedby={id}
        className={classes.btnLinks}
        onClick={handlePopoverOpen}
      >
        Links
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          maxWidth: 350,
        }}
      >
        <Paper onMouseLeave={handlePopoverClose}>
          {card?._source?.urls?.length > 0 ? (
            card?._source?.urls?.map((url) => (
              <button className={classes.linkBtn} onClick={handlePopoverClose}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                  onClick={handlePopoverClose}
                  // data-testid={`card-${index}-githubBtn`}
                >
                  {url}
                </a>
                {url}
              </button>
            ))
          ) : (
            <Typography
              sx={{
                minWidth: "300px",
                padding: 1,
                borderRadius: 5,
              }}
            >
              Não existem links
            </Typography>
          )}
        </Paper>
      </Popover>
    </div>
  );
}

export default PopoverCustom;
