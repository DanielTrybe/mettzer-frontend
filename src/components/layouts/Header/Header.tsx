import React from "react";
import { Grid, Box, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles, CustomTextField } from "./style";
import MettzerLogo from "images/logo_mettzer_PRINCIPAL_EDITOR.avif";
import { useArticlesContext } from "hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  searchTerm: string;
}

const schema = yup.object({
  searchTerm: yup.string().required("Por favor, digite um usuário válido."),
});

export default function Header() {
  const history = useLocation();
  const navigate = useNavigate();

  const { setSearch } = useArticlesContext();
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      searchTerm: "Mettzer",
    },
  });

  const onSubmit = (formData: IFormInputs) => {
    setSearch(formData.searchTerm);
    if (history.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <Grid className={classes.header}>
      <Box
        sx={{
          width: 100,
        }}
      >
        <img
          data-testid="header-logo"
          src={MettzerLogo}
          width="100px"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </Box>

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomTextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    data-testid="header-btn"
                    onClick={handleSubmit(onSubmit)}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputProps={{ "data-testid": "header-input" }}
            label="Search for a scientific article"
            id="outlined-start-adornment"
            sx={{
              m: 1,
            }}
            value={value}
            onChange={onChange}
            error={errors?.searchTerm ? true : false}
            helperText={
              errors?.searchTerm && (
                <span style={{ position: "absolute" }}>
                  {errors?.searchTerm?.message}
                </span>
              )
            }
          />
        )}
        name="searchTerm"
      />
    </Grid>
  );
}
