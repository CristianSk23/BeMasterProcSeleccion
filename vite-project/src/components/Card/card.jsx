import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "./style.css";

const CardInfo = ({ title, image, name }) => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box>
      {showCards && (
        <Card
          className="fadeInCard"
          sx={{ maxWidth: 345, borderRadius: "20px" }}
        >
          <CardActionArea>
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                sx={{ textAlign: "center", fontSize: "30px" }}
              >
                {title || name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Box>
  );
};

export default CardInfo;
