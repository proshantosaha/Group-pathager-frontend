import { Box, styled } from "@mui/system";
import Link from "next/link";

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

export const PaginationUlStyle = styled(Box)(() => ({
  listStyle: "none",
  display: "flex",
  color: "black",
  gap: 5,
}));

export const PaginationLiStyle = styled(Box)(() => ({
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  padding: "7px",
  border: "1px solid blue",
  borderRadius: "50%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#0096D1",
    color: "white",
  },
}));

export const StyledNavLink = styled(Link)(() => ({
  backgroundColor: "#0096D1",
}));
