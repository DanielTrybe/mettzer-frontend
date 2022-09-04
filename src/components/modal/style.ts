import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",

    width: "100%",
  },
  authors: { textAlign: "center", width: "100%" },
  types: {
    width: "100%",
    textAlign: "center",
  },
  boxBorder: {
    borderBottom: "1px solid #EAEAEA",
    borderTop: "1px solid #EAEAEA",
    margin: "10px 0 10px 0",
  },
  description: {
    textAlign: "justify",
    padding: 5,
  },
  boxStyle: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    maxHeight: "80%",
    minHeight: 200,
    overflow: "scroll",
    background: "white",
    border: "1px solid #EAEAEA",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  notFoundText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media (max-width: 400px)": {
    boxStyle: {
      width: 320,
    },
  },
  gridBtn: {
    position: "fixed",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  closeBtn: {
    width: 30,
    height: 30,

    background: "#F9C29D",
    border: "none",
    borderRadius: "50%",
    position: "relative",
    "&:hover": {
      background: "#BEC8CE",
    },
    "&:active": {
      background: "gray",
    },
  },
});

export { useStyles };
