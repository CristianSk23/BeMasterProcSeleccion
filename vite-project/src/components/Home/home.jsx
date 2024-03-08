import axios from "axios";
import React, { useEffect, useState } from "react";
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
    <>
      <Box height="178px">
        <Typography level="title-lg" sx={{ fontSize: "35px", margin: "-70px" }}>
          Escoge una categoria de videojuego para ver a detalle su contenido
          multimedial.
        </Typography>
      </Box>
      <Grid
        container
        rowSpacing={{ md: 3, lg: 5 }}
        columnSpacing={{ md: 1, lg: 2 }}
        height="347px"
        justifyContent="center"
        alignItems="center"
      >
        {genres.map((genre) => (
          <Grid item md={2} lg={4} key={genre.id}>
            <Link to={`/contentCategory/${genre.name}`}>
              <CardInfo
                key={genre.id}
                title={genre.name}
                image={genre.image_background}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
