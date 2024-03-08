import React, { useEffect } from "react";
import CardInfo from "../Card/card";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamesCategory } from "../actions/actions";
import { Box, Button, Grid, Typography } from "@mui/material";

const ContentCategory = () => {
  const { genreName } = useParams();
  const dispatch = useDispatch();

  const games = useSelector((state) => state.gamesTemp);

  useEffect(() => {
    dispatch(getGamesCategory(genreName));
  }, [dispatch, genreName]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        paddingTop: "80px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "40px", marginBottom: "2rem" }}>
        Estás en la categoria: {genreName}.
      </Typography>
      <Typography variant="h3" sx={{ fontSize: "30px", marginBottom: "5rem" }}>
        Selecciona un videojuego para ver mas información relacionada.
      </Typography>

      <Grid
        container
        rowSpacing={{ md: 3, lg: 5 }}
        columnSpacing={{ md: 1, lg: 5 }}
        sx={{
          paddingLeft: "10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {games.map((game) => (
          <Grid item md={2} lg={4} key={game.id}>
            <Link to={`/contentDetails/${genreName}/${game.id}`}>
              <CardInfo
                key={game.id}
                title={game.name}
                image={game.background_image}
                clip={game.clip}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Link to={"/home"}>
        <Button
          variant="contained"
          sx={{
            marginTop: "50px",
          }}
        >
          Regresar
        </Button>
      </Link>
    </Box>
  );
};

export default ContentCategory;
