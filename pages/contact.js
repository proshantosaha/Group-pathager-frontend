import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import contuct from "public/contact.png";
import { Button, TextField } from "@mui/material";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_SERVICE_ID,
        process.env.NEXT_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccess(true);
  };

  return (
    <Container>
      <AppBar>
        <Typography variant="h6" sx={{ textAlign: "center", paddingY: 2 }}>
          Contact Us
        </Typography>
      </AppBar>
      <Toolbar />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                marginRight: 2,
                borderLeft: 1,
                borderRight: 2,
                borderBottom: 2,
                borderColor: "gray",
              }}
            >
              <Box sx={{ marginBottom: 5 }}>
                <Image src={contuct} width={400} alt="Contact Image" />
              </Box>
              <Box sx={{ marginBottom: 5, marginLeft: 4 }}>
                <h2 style={{ margin: 0, paddingBottom: 30 }}>
                  Address: 8th Flore, Good Center
                </h2>
                <h2 style={{ margin: 0, paddingBottom: 30 }}>
                  Phone: +88 01833-078059
                </h2>
                <h2 style={{ margin: 0 }}>
                  Email: bepariprantosh360@gmail.com
                </h2>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <form ref={form} onSubmit={sendEmail}>
              <Box
                sx={{
                  borderLeft: 2,
                  borderBottom: 2,
                  borderColor: "gray",
                }}
              >
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Name</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="name"
                    placeholder="Name"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Email</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="email"
                    placeholder="Email"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Subject</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="subject"
                    placeholder="Subject"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ marginLeft: 4 }}>
                  <h3>Description:</h3>
                  <TextField
                    sx={{ width: "100%" }}
                    name="message"
                    placeholder="Description"
                    multiline
                    rows={4}
                  />
                </Box>
                <Box sx={{ marginLeft: 4, marginY: 3 }}>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
            {success && (
              <div
                style={{
                  padding: 10,
                  marginTop: 20,
                  borderRadius: 5,
                  fontSize: 28,
                  color: "white",
                  backgroundColor: "green",
                }}
              >
                Your message was sent Successfully.
              </div>
            )}
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: 10 }}>
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65917.01266068258!2d90.1154004734008!3d23.084764126933784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755699b96eeefab%3A0x87448fa52c571029!2z4Kan4Ka-4Kau4KeB4Ka44Ka-IOCmrOCnh-CmquCmvuCmsOCngCDgpqzgpr7gp5zgpr8!5e0!3m2!1sen!2sbd!4v1656664803781!5m2!1sen!2sbd"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  );
}
