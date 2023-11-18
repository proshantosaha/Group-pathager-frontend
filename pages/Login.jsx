import React, { useState, useEffect } from "react";
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
import Cookies from "js-cookie";

const initialUser = {
  identifier: "",
  password: "",
};

const Login = () => {
  // const [user, setUser] = useState(initialUser);

  // const [identifier, setIdentifier] = useState("");
  // const [password, setpassword] = useState("");

  const [loginError, setloginError] = useState("");

  const [userData, setUserData] = useState(initialUser);
  console.log(userData);

  // console.log(user);

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

  // handle change for email password

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    const userDataCookie = Cookies.get("userData");
    const parseUserData = JSON.parse(userDataCookie || "{}");
    setUserData(parseUserData);
  }, []);

  // const handleChange = (e) => {
  //   const { name, value } = target;
  //   setUser((currentUser) => ({
  //     ...currentUser,
  //     [name]: value,
  //   }));
  // };

  // handle click for button

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = "http://localhost:1337/api/auth/local";
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: userData.identifier,
          password: userData.password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        const userData = {
          authToken: data.jwt,
          userName: data.user.username,
          isLoggedIn: data.user.confirmed,
        };
        Cookies.set("userData", JSON.stringify(userData), { expires: 7 });

        setUserData(userData);

        location.reload();
      } else {
        setloginError(data.message[0].message[0].message);
      }
    } catch (error) {
      console.log("login error:", error);
      setloginError("error occurd plz try to log");
    }
  };

  const handleSignOut = () => {
    Cookies.remove("userData");
    setUserData(null);
    location.reload();
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();

  // try {
  //   const res = await fetch(`http://localhost:1337/api/auth/local`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ indentifier, password }),
  //   });
  //     const data = await res.json();

  //     console.log(data);

  // if (res.ok) {
  //   const res = await fetch(url, { user });
  //   console.log({ res });
  // }
  //   } catch (error) {
  //     console.error("login error:", error);
  //   }
  // };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        style={{ width: "100%", margin: "0 auto" }}
      >
        <Box
          style={{
            ...loginStyle,
          }}
        >
          <Box align="center">
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Login
            </Typography>
          </Box>
          {/* {!userData?.isLoggedIn && ( */}
          <form onSubmit={handleLogin}>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl fullWidth={true}>
                <TextField
                  // type="text"
                  variant="standard"
                  label="UserName"
                  name="identifier"
                  // value={identifier}
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
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard" fullWidth={true}>
                <TextField
                  // type="password"
                  label="Password"
                  name="password"
                  // value={password}
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
                  onChange={handleChange}
                />
              </FormControl>
            </Box>

            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
              sx={{ marginLeft: "2px" }}
            />
            {loginError && (
              <Typography style={{ color: "red" }}>{loginError}</Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              style={btnStyle}
              fullWidth
              onClick={handleLogin}
              color="success"
            >
              Login
            </Button>
          </form>
          {/* )} */}

          {userData?.isLoggedIn && (
            <div>
              <p>Logged in as :{userData.userName}</p>
              <p> is logged in :{userData.isLoggedIn ? "yes" : "no"}</p>

              <Button
                variant=" contained"
                onClick={handleSignOut}
                color={"error"}
              >
                Sign out
              </Button>
            </div>
          )}

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
        </Box>
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
