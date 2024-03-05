const Validation = (userData) => {
  const errors = {};
  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Debe ser un correo electrónico";
  } else if (userData.email.length < 1) {
    errors.email = "Recuerda llenar este campo";
  } else if (userData.password.length < 1) {
    errors.password = "Recuerde llenar este campo";
  }

  return errors;
};

export default Validation;
