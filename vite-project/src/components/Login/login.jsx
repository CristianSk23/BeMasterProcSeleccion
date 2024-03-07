import React from "react";
import { useEffect, useState } from "react";
import Validation from "./Validation";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Container, Paper } from "@mui/material";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "Obligatorio",
    password: "",
  });

  let navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  useEffect(() => {
    if (userData.email !== "" || userData.password !== "") {
      const userValidated = Validation(userData);
      setErrors(userValidated);
    }
  }, [userData]);

  return (
    <Container>
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
            onSubmit={handleSubmit}
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
                component="a"
                href={`/home`}
                disabled={Object.keys(errors).length > 0}
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
