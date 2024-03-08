import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
const key = "13e28b0cefb441d399fa357254d9dab9";

const ContentDetails = () => {
  const { id, genreName } = useParams();
  const urlG_detail = `https://api.rawg.io/api/games/${id}?key=${key}`;
  const urlG_Clipl = `https://api.rawg.io/api/games/${id}/movies?key=${key}`;

  const [game, setGame] = useState(null);
  const [gameClip, setGameClip] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const { data } = await axios(urlG_detail);
        const results = await axios(urlG_Clipl);
        console.log(data);

        let clips = results.data.results.map((item) => item.data.max);
        clips = clips.slice(0, 4);

        let gameDetails = {
          id: data.id,
          name: data.name,
          description: data.description.replace(/<\/?[^>]+(>|$)/g, ""),
          rating: data.rating,
          platforms: data.platforms.map((platform) => platform.platform.name),
          genres: data.genres.map((genre) => genre.name),
          released: data.released,
          image: data.background_image,
        };

        setGame(gameDetails);
        setGameClip(clips);
      } catch (error) {
        throw Error(error.message);
      }
    };

    fetchGameDetails();
  }, [urlG_detail]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(23, 26, 33, 0.8)",
        color: "#fff",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        paddingTop: "30px",
      }}
    >
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3, md: 3, lg: 5 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        <Grid item xs={12} sx={{ marginTop: "40px", textAlign: "center" }}>
          <Typography variant="h2">{game && game.name}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <img
              src={game && game.image}
              alt={game && game.name}
              style={{
                width: "50%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              }}
            />
          </Box>
        </Grid>

        <Grid
          sx={{
            width: "1500px",
            marginTop: "3%",
            marginBottom: "3%",
            marginLeft: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {game && game.description}
          </Typography>
        </Grid>

        <Grid
          container
          direction="row"
          rowSpacing={{ xs: 8, sm: 1, md: 2, lg: 10 }}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 8 }}
          sx={{
            width: "1000px",
            paddingLeft: "15%",
            marginBottom: "20px",
          }}
        >
          {gameClip &&
            gameClip.map((clip, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={5}>
                <video
                  width="100%"
                  height="auto"
                  controls
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  }}
                >
                  <source src={clip} type="video/mp4" />
                </video>
              </Grid>
            ))}
        </Grid>
      </Grid>

      <Link to={`/contentCategory/${genreName}`}>
        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
            marginBottom: "50px",
            marginLeft: "45%",
          }}
        >
          Regresar
        </Button>
      </Link>
    </Box>
  );
};

export default ContentDetails;
