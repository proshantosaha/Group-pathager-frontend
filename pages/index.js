import BooksCart from "@/component/Home/PopularBooks/BooksCart";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <Box sx={{maxWidth:"90%" ,margin:" auto"}}>
      this is home
      <BooksCart/>
    </Box>
  )
}
