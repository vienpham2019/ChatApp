const validateEmail = (email) => {
  if (email === "") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  if (password === "") return false;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#!])[A-Za-z\d@$!%*?&#]{8,}$/;
  return passwordRegex.test(password);
};

export { validateEmail, validatePassword };
