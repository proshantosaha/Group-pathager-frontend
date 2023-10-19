import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#B0B4B4",
  "&:hover": {
    backgroundColor: "#A8A8A8",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",

  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },

    [theme.breakpoints.up("xl")]: {
      width: "80ch",
    },
  },
}));

export const Separator = styled("div")(
  ({ theme }) => `
    height: ${theme.spacing(3)};
  `
);

export const WraperButton = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  mt: 3,
  "& button": {
    background: "white",
    fontWeight: 700,
    border: "1px solid grey",
    borderRadius: 25,
    color: "green",
    transition: "background 0.3s, color 0.3s",
    "&:hover": {
      background: "green",
      color: "white",
    },
  },
}));
