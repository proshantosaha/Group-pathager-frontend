import Login from "@/app/ui/login/page";
import { SignIn } from "@clerk/nextjs";
import { Grid } from "@mui/material";

export default function Page() {
  return (
    <>
      <Grid container spacing={2}>
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
        
        <SignIn />
      </Grid>
    </>
  );
}
