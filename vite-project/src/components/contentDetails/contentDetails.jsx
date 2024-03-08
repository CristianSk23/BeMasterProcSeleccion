import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const key = "13e28b0cefb441d399fa357254d9dab9";
const ContentDetails = () => {
  const { id } = useParams();
  const urlG_detail = `https://api.rawg.io/api/games/${id}?key=${key}`;
  const urlG_Clipl = `https://api.rawg.io/api/games/${id}/movies?key=${key}`;

  const [game, setGame] = useState(null);
  const [gameClip, setGameClip] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const { data } = await axios(urlG_detail);
        const results = await axios(urlG_Clipl);

        let clips = results.data.results.map((item) => item.data.max);
        clips = clips.slice(0, 3);

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
    <Box sx={{ p: 2, paddingTop: "-300px" }}>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3, md: 3, lg: 5 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ mt: 2 }}>
            {game && game.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: 2 }}>
            <img
              src={game && game.image}
              alt={game && game.name}
              style={{ width: "50%", height: "auto" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 2 }}>
            {game && game.description}
          </Typography>
        </Grid>

        <Grid container>
          {gameClip &&
            gameClip.map((clip, index) => (
              <Grid item xs={4} key={index}>
                <video width="100%" height="auto" controls sx>
                  <source src={clip} type="video/mp4" />
                </video>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentDetails;
