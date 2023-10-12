import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Register = () => {
  const registerStyle = {
    padding: 20,
    height: "auto",
    width: "45%",
    margin: "50px auto",
    borderRadius: "20px",
    backgroundColor: "#E2F8FF",
    boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)",
  };
  const btnStyle = {
    margin: "8px 0",
    backgroundColor: "#E04F9D",
    fontWeight: "semiBold",
  };

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState("");

  console.log(register);

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: register.username,
            email: register.email,
            password: register.password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      location.reload();
    } catch (error) {
      console.error("Registration error:", error);
      setRegisterError(
        "An error occurred during register. Please try again later."
      );
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        style={{ width: "100%", margin: "60px auto" }}
      >
        <Box style={{ ...registerStyle }}>
          <form onSubmit={handleRegister}>
            <Typography
              align="center"
              variant="h5"
              sx={{ fontWeight: 700, marginBottom: 2 }}
            >
              Register
            </Typography>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard" fullWidth={true}>
                <TextField
                  label="UserName"
                  onChange={handleChange}
                  name="username"
                  InputLabelProps={{
                    style: { fontWeight: 700 },
                  }}
                  placeholder="Enter your name"
                  sx={{
                    fontSize: "14px",
                    padding: "4px",
                    color: "black",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard" fullWidth={true}>
                <TextField
                  label="Email"
                  onChange={handleChange}
                  name="email"
                  InputLabelProps={{
                    style: { fontWeight: 700 },
                  }}
                  placeholder="Enter your email"
                  sx={{
                    fontSize: "9px",
                    padding: "4px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ fontSize: 17 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard" fullWidth={true}>
                <TextField
                  label="Password"
                  onChange={handleChange}
                  name="password"
                  InputLabelProps={{
                    style: { fontWeight: 700 },
                  }}
                  placeholder="Type your password"
                  sx={{
                    fontSize: "14px",
                    padding: "4px",
                    color: "black",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ fontSize: 17 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard" fullWidth={true}>
                <TextField
                  label="Confirm Password"
                  InputLabelProps={{
                    style: { fontWeight: 700 },
                  }}
                  placeholder="Confirm your password"
                  sx={{
                    fontSize: "9px",
                    padding: "4px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ fontSize: 17 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Button
              type="submit"
              variant="contained"
              style={btnStyle}
              fullWidth
              onSubmit={handleRegister}
            >
              Register
            </Button>

            <Box>
              <Typography
                variant="h6"
                style={{ textAlign: "center", fontSize: 14 }}
              >
                Or logging using
              </Typography>
              <Box sx={{ textAlign: "center", margin: 2 }}>
                <GoogleIcon sx={{ color: "green", cursor: "pointer" }} />
                <FacebookIcon
                  sx={{ color: "#0048A6", margin: "0 4px", cursor: "pointer" }}
                />
                <TwitterIcon
                  sx={{
                    backgroundColor: "#1877F2",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: 25,
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Already have an account!{" "}
                <Link
                  href="Login"
                  style={{
                    color: "#E04F9D",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
          </form>
          {registerError && (
            <Typography style={{ color: "red" }}>{registerError}</Typography>
          )}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        sx={{ margin: { xs: "0 auto", lg: "60px auto" }, width: "100%" }}
      >
        <img
          src="https://img.freepik.com/premium-vector/tom-sawyer-paints-fence-open-book-illustration_135176-9.jpg?size=626&ext=jpg&ga=GA1.1.1747484890.1694422252&semt=ais"
          alt="Image"
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Register;
