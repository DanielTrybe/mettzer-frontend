import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";

export default function MainLayout() {
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        style={{
          backgroundColor: "#EAEAEA",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Container maxWidth="xl" sx={{ display: "flex" }}>
          <SideMenu />
          <Header />
        </Container>
      </Container>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
}
