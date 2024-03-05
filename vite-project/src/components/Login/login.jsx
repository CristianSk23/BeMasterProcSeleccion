import React from "react";
import { useEffect, useState } from "react";
import Validation from "./Validation";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import wallpaper from "./Design/wallpaper.jpg";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (userData.email !== "" || userData.password !== "") {
      const userValidated = Validation(userData);
      setErrors(userValidated);
    }
  }, [userData]);

  return (
    <Container
      
      sx={{
        width: "1920px",
        height: "900px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CssBaseline />
      <Paper
        elevation={4}
        sx={{
          width: "550px",
          height: "450px",
          alignItems: "center",
          paddingTop: "15px",
          borderRadius: "20px",
        }}
      >
        <Box>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Ingresar
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                value={userData.email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
                sx={{
                  width: "400px",
                }}
              />
              <Box>
                {errors.email && (
                  <Typography id="errorText">{errors.email}</Typography>
                )}
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={userData.password}
                onChange={handleChange}
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Box>
                {errors.email && (
                  <Typography id="errorText">{errors.password}</Typography>
                )}
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!userData.email || !userData.password}
                sx={{ mt: 3, mb: 2 }}
              >
                Continuar
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
