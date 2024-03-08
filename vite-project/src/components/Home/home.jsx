import React, { useEffect } from "react";
import CardInfo from "../Card/card";
import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../actions/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(getGenres());
      dispatch(getGames());
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textShadow: "2px 2px 4px #000000",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "bold", marginBottom: "8rem", marginTop: "-200px" }}
      >
        ¡Bienvenidos!
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "5rem", marginTop: "-100px" }}
      >
        Escoge una categoría de videojuego para ver a detalle su contenido
        multimedial.
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3, md: 3, lg: 5 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
        sx={{
          paddingLeft: "2%",
        }}
      >
        {genres.map((genre) => (
          <Grid item md={4} lg={2} key={genre.id} sx={{ margin: "25px" }}>
            <Link
              to={`/contentCategory/${genre.name}`}
              style={{ textDecoration: "none" }}
            >
              <CardInfo
                key={genre.id}
                title={genre.name}
                image={genre.image_background}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
