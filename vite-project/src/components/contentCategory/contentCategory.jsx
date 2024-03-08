import React, { useEffect } from "react";
import CardInfo from "../Card/card";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamesCategory } from "../actions/actions";
import { Box, Grid, Typography } from "@mui/material";

const ContentCategory = () => {
  const { genreName } = useParams();
  const dispatch = useDispatch();

  const games = useSelector((state) => state.gamesTemp);

  useEffect(() => {
    dispatch(getGamesCategory(genreName));
  }, [dispatch, genreName]);
  return (
    <>
      <Box height="178px">
        <Typography level="title-lg" sx={{ fontSize: "35px", margin: "-70px" }}>
          Selecciona un videojuego para ver mas detalles.
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
        {games.map((game) => (
          <Grid item md={2} lg={4} key={game.id}>
            <Link to={`/contentDetails/${game.id}`}>
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
    </>
  );
};

export default ContentCategory;
