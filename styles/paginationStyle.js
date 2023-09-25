import { Box, styled } from "@mui/system";

export const PaginationStyle = styled(Box)(() => ({
  "& .MuiPaginationItem-root": {
    fontFamily: "Arial, sans-serif",
    fontWeight: 600,
    fontSize: "1.2rem",
    color: "#0096D1",
    border: "1px solid #0096D1",
    margin: "0 4px",
    "&.Mui-selected": {
      backgroundColor: "#0096D1",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#0096D1",
      color: "white",
    },
  },
}));
