import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Login = () => {
  const loginStyle = {
    padding: 20,
    height: "auto",
    width: "45%",
    margin: "50px auto",
    borderRadius: "20px",
    backgroundColor: "#E2F8FF",
    boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)",
  };
  const btnStyle = {
    margin: "10px 0",
    backgroundColor: "#E04F9D",
    fontWeight: 600,
  };

  const [login, setLogin] = useState({
    identifier: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const userDataCookie = Cookies.get("userData");
    const parsedUserData = JSON.parse(userDataCookie || "{}");
    setUserData(parsedUserData);
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: login.identifier,
          password: login.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const userData = {
          authToken: data.jwt,
          userName: data.user.username,
          isLoggedIn: data.user.confirmed,
        };

        Cookies.set("userData", JSON.stringify(userData), { expires: 7 }); // Expires in 7 days
        setUserData(userData);
        location.reload();
        
        // router.push('/profile'); // Replace '/profile' with your actual profile page route
      } else {
        setLoginError(data.message[0].messages[0].message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login. Please try again later.");
    }
  };

  const handleSignOut = () => {
    Cookies.remove("userData");
    setUserData(null);
    location.reload();
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        style={{ width: "100%", margin: "0 auto" }}
      >
        <form
          style={{
            ...loginStyle,
          }}
          onSubmit={handleLogin}
        >
          <Box align="center">
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Login
            </Typography>
          </Box>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl fullWidth={true}>
              <TextField
                name="identifier"
                onChange={handleChange}
                variant="standard"
                label="UserName"
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
                name="password"
                onChange={handleChange}
                label="Password"
                InputLabelProps={{
                  style: { fontWeight: 700 },
                }}
                placeholder="Enter your password"
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
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
            sx={{ marginLeft: "2px" }}
          />
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          <Button onClick={handleLogin} type="submit" variant="contained" style={btnStyle} fullWidth>
            Login
          </Button>
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
            New here?{" "}
            <Link
              href="Register"
              style={{
                color: "#E04F9D",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </form>
        {userData?.isLoggedIn && (
            <div>
              <p>Logged in as: {userData.userName}</p>
              <p>Is logged in: {userData.isLoggedIn ? 'Yes' : 'No'}</p>
              <Button variant="contained" onClick={handleSignOut} color={'error'}>
                Sign Out
              </Button>
            </div>
        )}
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <img
          src="https://img.freepik.com/premium-vector/tom-sawyer-paints-fence-open-book-illustration_135176-9.jpg?size=626&ext=jpg&ga=GA1.1.1747484890.1694422252&semt=ais"
          alt="Image"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
