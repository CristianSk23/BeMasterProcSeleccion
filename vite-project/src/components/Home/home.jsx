import axios from "axios";
import React, { useEffect, useState } from "react";
import CardInfo from "../Card/card";
import { Box, Grid, Typography } from "@mui/material";

//KEY 13e28b0cefb441d399fa357254d9dab9
const key = "13e28b0cefb441d399fa357254d9dab9";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axios(
          `https://api.rawg.io/api/genres?key=${key}`
        );
        let dataGames = data.results.slice(0, 5);
        setGames(dataGames);
       
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchGames();
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
        {games.map((game) => (
          <Grid item md={2} lg={4} key={game.id}>
            <CardInfo
              key={game.id}
              title={game.name}
              image={game.image_background}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
